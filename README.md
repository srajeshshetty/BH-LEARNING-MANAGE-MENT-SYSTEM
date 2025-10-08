# Learning Management System

A modern, next-generation Learning Management System (LMS) built with React and TypeScript.

## Features

- **Task Tracking**: Visual progress tracking with sidebar navigation
- **Project Management**: Comprehensive project phase tracking and submission system
- **Modern UI**: Clean, responsive design with dark mode support
- **Real-time Updates**: Track your learning journey with live progress indicators

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

### Local Development

```sh
# Run development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── lib/            # Utility functions
└── hooks/          # Custom React hooks
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
