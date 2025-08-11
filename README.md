# 🚀 BOSS-UP - Groq App Generator

A modern web application that generates and modifies web applications using Groq's LLM API. Built with Next.js 14, TypeScript, and Supabase for robust data persistence and user management.

## ✨ Recent Updates

### 🔧 Latest Improvements
- **Vercel Analytics Integration** - Added comprehensive analytics tracking
- **Build System Optimization** - Fixed ChunkLoadError issues and improved stability
- **Development Environment** - Enhanced local development experience
- **Git Configuration** - Cleaned up repository structure and removed sensitive data

### 🏗️ Core Infrastructure

**Database & Backend:**
- **Supabase PostgreSQL** - Production-ready database with full schema
- **Real-time synchronization** with Supabase Realtime
- **Row Level Security (RLS)** policies for data protection
- **IP-based content moderation** and vote fraud prevention

**Frontend & Analytics:**
- **Next.js 14** with App Router and TypeScript
- **Vercel Analytics** for performance monitoring
- **Tailwind CSS** for responsive design
- **Modern React patterns** with hooks and context

### 🔒 Security & Data Protection Implementation

**Security layers implemented:**
- **Row Level Security (RLS)** policies for data isolation
- **IP address hashing** using SHA-256 for privacy protection
- **Rate limiting** and abuse prevention mechanisms
- **Content moderation** with automatic IP blocking
- **Environment variable security** with proper secret management

### 🛠️ Development Environment Mastery

**Infrastructure setup:**
- **Supabase CLI integration** for local development
- **Environment configuration** with all required variables
- **Database deployment automation** to cloud infrastructure
- **MCP server configuration** for enhanced development workflow
- **Type-safe database interactions** with full TypeScript support

### 📊 Database Schema Architecture

#### Core Tables Created:
1. **gallery_items** - Application storage with metadata, timestamps, and engagement metrics
2. **upvotes** - Vote tracking with IP-based deduplication and fraud prevention
3. **blocked_ips** - Content moderation system with hashed IP storage
4. **app_sessions** - User session management for continuity

#### Advanced Features:
- **12 specialized indexes** for optimal query performance
- **8 RLS policies** ensuring data security and privacy
- **7 custom PostgreSQL functions** for complex operations
- **Database triggers** for automatic timestamp updates
- **Full-text search** capabilities for gallery discovery

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with 18.17.0+)
- pnpm (recommended) or npm package manager
- Supabase account (free tier supported)
- Groq API key (free tier available)

### Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory (see Environment Configuration below)

3. **Start development server:**
   ```bash
   pnpm dev
   ```

### Environment Configuration

Create a `.env` file in the root directory with the following variables:

```bash
# Required: Groq API Configuration
GROQ_API_KEY=your_groq_api_key_here

# Required: Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Optional: Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

**Note:** The `.env` file is already included in `.gitignore` to prevent accidental commits of sensitive data.

### Supabase Setup

1. **Create Supabase project:**
   - Visit [supabase.com](https://supabase.com)
   - Create new project (free tier works)
   - Navigate to Settings → API
   - Copy your project URL and anon key

2. **Deploy database schema:**
   ```bash
   # Using Supabase CLI (recommended)
   npx supabase link --project-ref your-project-ref
   npx supabase db push complete_supabase_setup.sql
   
   # Alternative: Manual deployment
   # 1. Go to Supabase Dashboard → SQL Editor
   # 2. Copy contents of complete_supabase_setup.sql
   # 3. Run the complete query
   ```

## 🛠️ Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Testing the Application

1. **Generate a sample application**
2. **Test gallery voting system**
3. **Verify real-time updates**
4. **Check analytics integration**

### 🔧 Advanced Configuration

#### Supabase CLI Setup:
```bash
# Install Supabase CLI globally
npm install -g supabase

# Link to your project
supabase login
supabase link --project-ref your-project-ref

# Database management commands
supabase db pull          # Pull schema changes
supabase db reset         # Reset database (development)
supabase status          # Check project status
```

#### Environment Variables Reference:
| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `GROQ_API_KEY` | Groq API access | ✅ | `gsk_...` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ | `https://xyz.supabase.co` |
| `SUPABASE_ANON_KEY` | Supabase anon key | ✅ | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role | ✅ | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

### 🐛 Troubleshooting Guide

#### Common Issues & Solutions:

1. **Database connection errors:**
   - Verify Supabase URL and keys
   - Check IP allowlist in Supabase settings
   - Ensure RLS policies are enabled

2. **Build failures:**
   - Delete `.next` folder and restart
   - Run `npm install` to ensure dependencies
   - Check Node.js version compatibility

3. **Permission denied errors:**
   - Verify service role key has proper permissions
   - Check RLS policies in Supabase dashboard
   - Ensure database tables exist

#### Debug Commands:
```bash
# Check database status
npx supabase status

# Reset development database
npx supabase db reset

# View detailed logs
npm run dev -- --verbose

# Check environment variables
node -e "console.log(process.env)"
```

### 🎯 Next Steps & Roadmap

#### Immediate Next Steps:
1. **Customize UI**: Modify components in `/src/components`
2. **Add features**: Extend database schema as needed
3. **Performance optimization**: Monitor query performance
4. **Testing**: Add comprehensive test suite

#### Production Deployment:
1. **Vercel deployment**: `vercel --prod`
2. **Custom domain**: Configure DNS and SSL
3. **Monitoring**: Set up error tracking and analytics
4. **Scaling**: Configure Supabase compute settings

## 🚀 Features

- **AI-Powered App Generation** - Create web applications using Groq's LLM API
- **Real-time Gallery** - Browse and vote on generated applications
- **Modern Tech Stack** - Next.js 14, TypeScript, Tailwind CSS
- **Database Integration** - Supabase PostgreSQL with real-time updates
- **Analytics** - Vercel Analytics for performance monitoring
- **Security** - Row Level Security and IP-based moderation
- **Responsive Design** - Mobile-first approach with modern UI

## 📝 Project Structure

```
groq-appgen/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and configurations
│   ├── providers/           # Context providers
│   └── server/              # Server-side utilities
├── public/                  # Static assets
├── complete_supabase_setup.sql  # Database schema
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**BOSS-UP** - Empowering developers with AI-driven application generation 🚀
