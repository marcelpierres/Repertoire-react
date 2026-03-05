# Marcel-Pierre Samuels — Personal Portfolio

A personal portfolio and chat application built with **Next.js 13** (App Router), **Tailwind CSS**, and **Firebase** (Realtime Database + Hosting).

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Local Development](#local-development)
4. [Building for Production](#building-for-production)
5. [Firebase Hosting](#firebase-hosting)
6. [Firebase Configuration](#firebase-configuration)

---

## Prerequisites

Ensure the following are installed before getting started:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 18+ | https://nodejs.org |
| npm | 9+ | Comes with Node.js |
| Firebase CLI | latest | `npm install -g firebase-tools` |

Verify your installations:

```bash
node --version
npm --version
firebase --version
```

---

## Project Structure

```
repertoire-next/
├── app/                    # Next.js App Router pages
│   ├── layout.js           # Root layout (Nav, fonts, global CSS)
│   ├── page.js             # Home page → renders MainPage
│   ├── chat/
│   │   └── page.js         # Chat page → renders ChatApp
│   └── globals.css         # Global styles + Tailwind directives
├── components/             # React components
│   ├── Nav.js              # Sidebar / top navbar
│   ├── MainPage.js         # Resume / portfolio content
│   ├── Slide.js            # Photography carousel
│   ├── ChatApp.js          # Chat page wrapper
│   ├── Form.js             # Chat form (Firebase Realtime DB)
│   └── Message.js          # Individual chat message
├── lib/
│   └── firebase.js         # Firebase v10 initialization
├── public/
│   └── img/                # All static images
├── next.config.js          # Next.js config (static export)
├── tailwind.config.js      # Tailwind theme (primary color, fonts)
├── firebase.json           # Firebase Hosting config
├── .firebaserc             # Firebase project alias
├── database.rules.json     # Firebase Realtime Database rules
└── storage.rules           # Firebase Storage rules
```

---

## Local Development

### 1. Install Dependencies

From inside the `repertoire-next/` directory:

```bash
npm install
```

### 2. Start the Dev Server

```bash
npm run dev
```

This starts a local development server at **http://localhost:3000** with hot reloading.

**Available routes:**

| URL | Page |
|-----|------|
| `http://localhost:3000/` | Portfolio / Resume |
| `http://localhost:3000/chat` | Chat Application |

### 3. Stopping the Server

Press `Ctrl + C` in the terminal where the server is running.

---

## Building for Production

Next.js is configured with `output: 'export'`, which generates a fully static site — no server required. This is ideal for Firebase Hosting.

### Run the Build

```bash
npm run build
```

This will:

1. Compile and optimize all pages
2. Process Tailwind CSS (removing unused classes)
3. Export the static site to the **`out/`** directory

You should see output like:

```
Route (app)                Size     First Load JS
┌ ○ /                      802 B          87 kB
└ ○ /chat                  54 kB         135 kB

○  (Static) automatically rendered as static HTML
```

The `out/` directory contains everything needed to host the site — it is self-contained with no Node.js runtime dependency.

### Preview the Production Build Locally

To verify the build before deploying, serve the `out/` directory with any static file server:

```bash
npx serve out
```

Then open **http://localhost:3000** (or the port shown in the terminal).

---

## Firebase Hosting

### First-Time Setup

#### 1. Log In to Firebase

```bash
firebase login
```

A browser window will open to authenticate with your Google account.

#### 2. Verify the Project

Check that your Firebase project is linked:

```bash
firebase projects:list
```

You should see `repertoire-631c3` listed. The `.firebaserc` file already configures this as the default project.

---

### Deploy to Firebase

#### Standard Deployment (recommended)

Run the build and deploy in one sequence:

```bash
npm run build && firebase deploy --only hosting
```

#### Step-by-Step

```bash
# 1. Build the static export
npm run build

# 2. Deploy only the hosting (not database/storage rules)
firebase deploy --only hosting

# 3. — OR — deploy everything (hosting + database + storage rules)
firebase deploy
```

After a successful deploy, Firebase will output a **Hosting URL**:

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/repertoire-631c3/overview
Hosting URL: https://repertoire-631c3.web.app
```

---

### Deploy Database and Storage Rules

If you change `database.rules.json` or `storage.rules`, deploy them separately:

```bash
# Deploy database rules only
firebase deploy --only database

# Deploy storage rules only
firebase deploy --only storage
```

---

### Rollback a Deployment

Firebase keeps a history of deploys. To roll back to a previous version:

1. Go to the [Firebase Console](https://console.firebase.google.com)
2. Navigate to **Hosting → Release History**
3. Click the three-dot menu on any previous release and select **Rollback**

---

## Firebase Configuration

The Firebase project config lives in `lib/firebase.js`. If you need to connect a different Firebase project, update the `firebaseConfig` object there and update `.firebaserc` with the new project ID.

### Realtime Database Rules

`database.rules.json` controls read/write access to the chat messages. Review and tighten these rules before going to production.

### Environment Variables (optional hardening)

To avoid exposing Firebase config in source control, move the config values to a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
```

Then update `lib/firebase.js` to read from `process.env.NEXT_PUBLIC_*`.

> **Note:** `.env.local` is excluded from Git by default (listed in `.gitignore`).
