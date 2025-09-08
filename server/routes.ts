import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import bcrypt from "bcryptjs";
import session from "express-session";

// Session configuration
declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Session middleware
  app.use(session({
    secret: 'banking-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set to true in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }));

  // Authentication middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (req.session.userId) {
      next();
    } else {
      res.status(401).json({ error: 'Authentication required' });
    }
  };

  // Auth routes
  app.post('/api/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
      }

      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      req.session.userId = user.id;
      res.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          firstName: user.firstName, 
          lastName: user.lastName 
        } 
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: 'Could not log out' });
      }
      res.json({ message: 'Logged out successfully' });
    });
  });

  app.get('/api/auth/me', requireAuth, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          firstName: user.firstName, 
          lastName: user.lastName 
        } 
      });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Banking routes
  app.get('/api/accounts', requireAuth, async (req, res) => {
    try {
      const accounts = await storage.getUserAccounts(req.session.userId!);
      res.json({ accounts });
    } catch (error) {
      console.error('Get accounts error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/transactions', requireAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const transactions = await storage.getUserTransactions(req.session.userId!, limit);
      res.json({ transactions });
    } catch (error) {
      console.error('Get transactions error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/api/accounts/:accountId/transactions', requireAuth, async (req, res) => {
    try {
      const { accountId } = req.params;
      const limit = parseInt(req.query.limit as string) || 50;
      
      // Verify account belongs to user
      const account = await storage.getAccount(accountId);
      if (!account || account.userId !== req.session.userId) {
        return res.status(404).json({ error: 'Account not found' });
      }
      
      const transactions = await storage.getAccountTransactions(accountId, limit);
      res.json({ transactions });
    } catch (error) {
      console.error('Get account transactions error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
