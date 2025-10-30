# ChatbotPractice# EBAC T3 Stack Chatbot Workshop - Day 2 Code



Practice exercise from the EBAC School AI Chatbot Workshop led by [Zura Guerra](https://github.com/ZuraGuerra). This repository showcases my custom modifications and extensions to the original workshop base, serving as both a learning project and portfolio piece.This is a [T3 Stack](https://create.t3.gg/) project demonstrating how to build an AI-powered chatbot integrated with [Plomb](https://plomb.ai). Built with TypeScript and modern web technologies.



**Credits:** Original workshop and codebase by Zura Guerra - EBAC School## Prerequisites



## Project Vision- Node.js

- [Plomb](https://plomb.ai) account

A personal website featuring:

- Professional portfolio showcase## Getting Started

- Interactive AI chatbot that can answer questions about me

- Modern, responsive designFirst, set up your development environment:

- Built with Next.js and React

1. Clone the repository

## Tech Stack2. Install dependencies:

```bash

- **Framework:** Next.js 15.3.2npm install

- **Frontend:** React 19, TypeScript```

- **Styling:** Tailwind CSS 4.1.8

- **Database:** Prisma ORM with SQLite3. Set up your database:

- **API:** tRPC for type-safe APIs```bash

- **State Management:** TanStack Query (React Query)npx prisma db push

- **AI Integration:** Plomb.ainpx prisma generate

```

## Prerequisites

1. Configure environment variables:

- Node.js 18+ or Bun```bash

- npm/pnpm/yarn/bun package managerPLOMB_WORKFLOW_URL=your_plomb_workflow_url

- [Plomb](https://plomb.ai) account (for AI features)PLOMB_API_KEY=your_plomb_token

```

## Getting Started

1. Start the development server:

### 1. Clone the repository```bash

npm run dev

```bash```

git clone <your-repo-url>

cd ChatbotPracticeOpen [http://localhost:3000](http://localhost:3000) to see the result.

```

## Tech Stack

### 2. Install dependencies

This project uses:

```bash

npm install- [Next.js](https://nextjs.org) - React framework

# or- [Prisma](https://prisma.io) - Database ORM

bun install- [SQLite](https://www.sqlite.org) - Database

```- [Tailwind CSS](https://tailwindcss.com) - Styling

- [tRPC](https://trpc.io) - Type-safe APIs

### 3. Set up environment variables- [Plomb](https://plomb.ai) - AI Integration



Create a `.env` file in the root directory:## Database Configuration



```bashThis project uses SQLite for simplicity. The database file is located at `prisma/db.sqlite`.

cp .env.example .env

```To modify your database schema:

1. Edit `prisma/schema.prisma`

Edit `.env` with your credentials:2. Run `npx prisma db push`

3. Run `npx prisma generate`

```env

DATABASE_URL="file:./db.sqlite"## Plomb.ai Setup

PLOMB_WORKFLOW_URL="your_plomb_workflow_url"

PLOMB_API_KEY="your_plomb_token"1. Sign up at [Plomb.ai](https://plomb.ai)

```2. Configure your workflow for chatbot functionality

3. Set up environment variables with your Plomb credentials

### 4. Set up the database

## Learn More

```bash

npx prisma generateTo understand the T3 Stack better:

npx prisma db push

```- [T3 Stack Documentation](https://create.t3.gg/)

- [Plomb Website](https://plomb.ai)

### 5. Run the development server

## Important Notes

```bash

npm run dev- This is a demo project for educational purposes

# or- You must have a compatible Plomb workflow before running the application

bun dev

```## Support



Open [http://localhost:3000](http://localhost:3000) to see your application.For questions about this demo, please open an issue.


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Database Configuration

This project uses SQLite for simplicity. The database file is located at `prisma/db.sqlite`.

To modify your database schema:
1. Edit `prisma/schema.prisma`
2. Run `npx prisma db push`
3. Run `npx prisma generate`

## Plomb.ai Setup

1. Sign up at [Plomb.ai](https://plomb.ai)
2. Configure your workflow for chatbot functionality
3. Set up environment variables with your Plomb credentials

## Features (Planned)

- [ ] Personal portfolio section
- [ ] About me page
- [ ] Projects showcase
- [ ] Interactive AI chatbot
- [ ] Contact form
- [ ] Blog (optional)
- [ ] Dark/Light mode

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── admin/        # Admin dashboard
│   ├── demo/         # Demo pages
│   ├── widget/       # Chatbot widget
│   └── api/          # API routes
├── server/           # Backend logic
│   ├── api/          # tRPC routers
│   └── services/     # Business logic
├── styles/           # Global styles
└── trpc/             # tRPC client setup
```

## Contributing

This is a personal project, but suggestions and feedback are welcome! Feel free to open an issue.

## License

This project is based on educational material from EBAC School. Please respect the original creator's work.

## Acknowledgments

- **Zura Guerra** - Original workshop creator and instructor
- **EBAC School** - For providing the workshop
- All contributors and supporters

## Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Plomb.ai Documentation](https://plomb.ai)
- [tRPC Documentation](https://trpc.io)

---

**Note:** This is a learning project and portfolio piece. The base structure comes from the EBAC School AI Chatbot Workshop (Day 2).
