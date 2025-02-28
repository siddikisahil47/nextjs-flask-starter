# Next.js Flask Starter Template

A modern full-stack template using Next.js 15 with Flask backend

## 🚀 Features

- **Frontend**: Next.js 15 with TypeScript
- **Backend**: Python Flask API
- **Styling**: TailwindCSS
- **Development**: Hot-reload for both Next.js and Flask
- **Production-ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React Framework (v15.2.0)
- [Flask](https://flask.palletsprojects.com/) - Python Backend
- [TailwindCSS](https://tailwindcss.com/) - Styling (v4.0.9)
- [TypeScript](https://www.typescriptlang.org/) - Type Safety (v5)
- [React](https://react.dev/) - UI Library (v19.0.0)
- [Vercel](https://vercel.com/) - Deployment Platform

## 📦 Quick Start

1. **Install pnpm** (if not already installed)

```bash
# macOS (using Homebrew)
brew install pnpm

# Windows (using npm)
npm install -g pnpm

# Linux/Unix (using npm)
npm install -g pnpm

# Using curl (Unix-like systems)
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

2. **Clone the template**

```bash
npx create-next-app my-app --example https://github.com/siddikisahil47/nextjs-flask-starter
```

3. **Install dependencies**

```bash
# Install frontend dependencies
npm install
# or
pnpm install

# Install Python dependencies
pip install -r requirements.txt
```

4. **Start development servers**

```bash
# Start both Next.js and Flask servers
npm run dev
# or
pnpm dev
```

5. **Open browsers**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://127.0.0.1:5328/api/python](http://127.0.0.1:5328/api/python)

## 🔧 Project Structure

```
├── app/                   # Next.js frontend
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── api/                   # Flask backend
│   └── index.py          # API routes
├── public/               # Static assets
└── package.json          # Project configuration
```

## 🌐 API Routes

The Flask backend is automatically mapped to `/api/*` routes in Next.js:

- `GET /api/python` - Example endpoint

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:5328
```

## 🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsiddikisahil47%2Fnextjs-flask-starter)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Vercel Python Guide](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
