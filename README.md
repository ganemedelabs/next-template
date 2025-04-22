# Next.js Template

![next version](https://img.shields.io/badge/next-15.3.1-000000?logo=next.js&logoColor=white)
![react version](https://img.shields.io/badge/react-19.0.0-61DAFB?logo=react&logoColor=white)
![eslint version](https://img.shields.io/badge/eslint-9-4B32C3?logo=eslint&logoColor=white)
![jest version](https://img.shields.io/badge/jest-29.7.0-C21325?logo=jest&logoColor=white)
![tailwindcss version](https://img.shields.io/badge/tailwindcss-4.1.4-06B6D4?logo=tailwindcss&logoColor=white)
![typescript version](https://img.shields.io/badge/typescript-5-3178C6?logo=typescript&logoColor=white)
![pwa Support](https://img.shields.io/badge/PWA-support-4FC08D?logo=pwa&logoColor=white)
![docker](https://img.shields.io/badge/docker-available-2496ED?logo=docker&logoColor=white)

A modern Next.js template pre-configured with TypeScript, TailwindCSS, ESLint, Prettier, Jest, Docker, and PWA support using Workbox. It includes a GitHub Action workflow for automated deployment to Vercel configured to work with organization-owned repositories.

## 📋 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Repository Configuration](#-repository-configuration)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Next.js**: Full-stack React framework with SSR, SSG, and API routes for dynamic and static web applications.
- **TypeScript**: Type-safe JavaScript with modern ECMAScript features.
- **Jest**: Unit testing framework for reliable code quality.
- **TailwindCSS**: Utility-first CSS framework for rapid, customizable styling.
- **Prettier & ESLint**: Ensures consistent code style and catches potential errors.
- **Docker**: Containerized development and production environments.
- **PWA Support**: Offline capabilities, installable app experience, and service worker integration via Workbox.
- **Vercel Deployment**: Automated deployment for Next.js sites to Vercel if version changed.

## 📦 Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- Docker (for containerized development, optional)

## 🚀 Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/ganemedelabs/next-template.git
    cd next-template
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run the Development Server**

    ```bash
    npm run dev

    # or if you prefer to run it inside a Docker container
    docker build -t next-template .
    docker run -p 3000:3000 next-template
    ```

    This will start the development server at `http://localhost:3000`.

## 🚢 Deploying to Vercel

This template uses a GitHub Action to automatically deploy a Next.js site to Vercel when changes are pushed to the `main` branch with a new version name.

### Features

- Triggers on push or pull request to the `main` branch.
- Checks out the repository code.
- Checks if the version in package.json has changed.
- If changed or first commit, deploys to Vercel using provided secrets.

### Notes

- Vercel does not offer free deployment for organization-owned repositories.
- You must manually configure Vercel for deployment before using this workflow:

    1. Install Vercel CLI: `npm i -g vercel`.
    2. Run `vercel` and select your personal or organization's account for deployment scope.
    3. Obtain `orgId` and `projectId` from `.vercel/project.json` after setup.
    4. Generate a Vercel Account Token at https://vercel.com/account/tokens.
    5. Add secrets to your repository: `VERCEL_TOKEN`, `ORG_ID`, `PROJECT_ID`.

- Deployment occurs automatically on version change after setup.

## 🔧 Repository Configuration

To adapt this template to your repository, update the `.env` files to reflect your repository's URL. Ensure that `NEXT_PUBLIC_URL` matches your local development server URL in `.env.development` and your Vercel URL in `.env.production`.

    **.env.development**

    ```env
    NEXT_PUBLIC_URL=http://localhost:3000
    ```

    **.env.production**

    ```env
    NEXT_PUBLIC_URL=http://your-repo-name.vercel.app
    ```

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this template!

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
