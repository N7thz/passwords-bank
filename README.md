# 🔐 Passwords Bank

![alt text](image.png)

A secure and modern password manager built with Next.js, allowing users to safely store and manage their passwords with a clean and intuitive interface.

## ✨ Features

- **🔒 Secure Authentication**: User registration and login with encrypted passwords
- **💾 Password Storage**: Safely store passwords for different websites and accounts
- **✏️ Password Management**: Create, edit, and delete stored passwords
- **🎲 Password Generation**: Built-in strong password generator
- **🌙 Dark/Light Theme**: Toggle between dark and light modes
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🗃️ Database Integration**: PostgreSQL database with Prisma ORM

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.0](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Authentication**: JWT with [jose](https://github.com/panva/jose)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- PostgreSQL database (local or remote)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/N7thz/passwords-bank.git
   cd passwords-bank
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example.txt .env.local
   ```
   
   Fill in the required environment variables:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/passwords_bank"
   DIRECT_URL="postgresql://username:password@localhost:5432/passwords_bank"
   JWT_SECRET="your-super-secret-jwt-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── actions/           # Server actions for data operations
│   ├── sign-in.ts
│   ├── sign-up.ts
│   ├── register-password.ts
│   ├── edit-password.ts
│   ├── delete-password.ts
│   └── find-passwords.ts
├── app/               # Next.js app directory
│   ├── (private)/     # Protected routes
│   ├── globals.css
│   └── layout.tsx
├── components/        # Reusable React components
│   ├── forms/         # Form components
│   ├── ui/           # UI components (shadcn/ui)
│   └── ...
├── functions/         # Utility functions
├── lib/              # Library configurations
│   ├── auth.ts       # Authentication utilities
│   ├── prisma.ts     # Prisma client
│   └── utils.ts      # General utilities
├── schemas/          # Zod validation schemas
└── middleware.ts     # Next.js middleware
```

## 🗄️ Database Schema

The application uses two main models:

- **User**: Stores user authentication information
- **Password**: Stores encrypted password entries with associated site and account information

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run Biome linting
- `npm run format` - Format code with Biome

## 🔐 Security Features

- Passwords are encrypted using bcryptjs before storage
- JWT-based authentication for secure sessions
- Protected routes with middleware authentication
- Input validation with Zod schemas
- Secure password generation utilities

## 🎨 UI/UX Features

- Clean and modern interface
- Dark/Light theme support
- Responsive design for all screen sizes
- Smooth animations with Tailwind CSS
- Toast notifications for user feedback
- Loading states and error handling

## 📝 Usage

1. **Register** a new account or **login** with existing credentials
2. **Add passwords** by clicking the "Add Password" button
3. **View** all your stored passwords in the dashboard
4. **Edit** or **delete** passwords using the action buttons
5. **Generate** strong passwords using the built-in generator
6. **Toggle** between light and dark themes for your preference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is a study project. For production use, please ensure additional security measures are implemented according to your specific requirements.

---

**Made with ❤️ using Next.js and modern web technologies**
