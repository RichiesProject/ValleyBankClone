import { type User, type InsertUser, type Account, type InsertAccount, type Transaction, type InsertTransaction, users, accounts, transactions } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Account methods
  getUserAccounts(userId: string): Promise<Account[]>;
  getAccount(id: string): Promise<Account | undefined>;
  createAccount(account: InsertAccount): Promise<Account>;
  updateAccountBalance(accountId: string, balance: string, availableBalance: string): Promise<void>;
  
  // Transaction methods
  getAccountTransactions(accountId: string, limit?: number): Promise<Transaction[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getUserTransactions(userId: string, limit?: number): Promise<Transaction[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Account methods
  async getUserAccounts(userId: string): Promise<Account[]> {
    return await db
      .select()
      .from(accounts)
      .where(eq(accounts.userId, userId))
      .orderBy(accounts.createdAt);
  }

  async getAccount(id: string): Promise<Account | undefined> {
    const [account] = await db.select().from(accounts).where(eq(accounts.id, id));
    return account || undefined;
  }

  async createAccount(insertAccount: InsertAccount): Promise<Account> {
    const [account] = await db
      .insert(accounts)
      .values(insertAccount)
      .returning();
    return account;
  }

  async updateAccountBalance(accountId: string, balance: string, availableBalance: string): Promise<void> {
    await db
      .update(accounts)
      .set({ balance, availableBalance })
      .where(eq(accounts.id, accountId));
  }

  // Transaction methods
  async getAccountTransactions(accountId: string, limit: number = 50): Promise<Transaction[]> {
    return await db
      .select()
      .from(transactions)
      .where(eq(transactions.accountId, accountId))
      .orderBy(desc(transactions.date))
      .limit(limit);
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const [transaction] = await db
      .insert(transactions)
      .values(insertTransaction)
      .returning();
    return transaction;
  }

  async getUserTransactions(userId: string, limit: number = 50): Promise<Transaction[]> {
    return await db
      .select({
        id: transactions.id,
        accountId: transactions.accountId,
        type: transactions.type,
        amount: transactions.amount,
        description: transactions.description,
        merchant: transactions.merchant,
        category: transactions.category,
        status: transactions.status,
        date: transactions.date,
        createdAt: transactions.createdAt,
      })
      .from(transactions)
      .leftJoin(accounts, eq(transactions.accountId, accounts.id))
      .where(eq(accounts.userId, userId))
      .orderBy(desc(transactions.date))
      .limit(limit);
  }
}

export const storage = new DatabaseStorage();
