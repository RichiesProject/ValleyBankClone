# Overview

This is a full-stack web application for Willamette Valley Bank, built as a modern React-based banking website. The application showcases the bank's services, features, and community involvement with a professional, user-friendly interface. It includes sections for awards recognition, home loans, mobile banking features, careers, and customer support through an integrated chat widget.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side application is built using **React 18** with **TypeScript** and follows a component-based architecture:

- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation schemas

The frontend follows a modular structure with:
- Reusable UI components in `/components/ui/`
- Page-specific components in `/components/`
- Custom hooks in `/hooks/`
- Utility functions in `/lib/`
- Pages in `/pages/`

## Backend Architecture

The server-side is built with **Express.js** and **TypeScript**:

- **Runtime**: Node.js with ESM modules
- **Server Framework**: Express.js with middleware for JSON parsing and request logging
- **Development Setup**: Hot reloading with Vite integration in development mode
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

The backend uses a clean architecture pattern with:
- Route registration system in `routes.ts`
- Abstract storage interface in `storage.ts` for data operations
- Vite integration for development server setup

## Data Storage

**Database**: PostgreSQL with Drizzle ORM for type-safe database operations:
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations in `/migrations/`
- **Connection**: Neon Database serverless PostgreSQL adapter
- **Development Storage**: In-memory storage implementation for local development

The database schema currently includes:
- Users table with username/password authentication structure
- UUID primary keys with PostgreSQL's gen_random_uuid()

## Development & Deployment

**Build Process**:
- Client builds to `dist/public/` using Vite
- Server builds to `dist/` using esbuild
- Single production start command serves both static files and API

**Environment Configuration**:
- Development: NODE_ENV=development with hot reloading
- Production: NODE_ENV=production with static file serving
- Database URL required via environment variable

# External Dependencies

## UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Data & State Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation

## Database & ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Zod**: Integration between Drizzle schemas and Zod validation

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for server builds
- **TSX**: TypeScript execution for development

## Additional Features
- **Date-fns**: Modern date utility library
- **Embla Carousel**: Lightweight carousel component
- **Wouter**: Minimalist routing library
- **CMDK**: Command palette component