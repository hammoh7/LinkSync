# LinkSync

## Development in Progress

### Getting Started

Clone the project:

1. Run the command:
```npm install```

2. Create a .env file (no need to create if already exist)
   <br />
   Create a AUTH_SECRET key. Copy your MongoDB URL, GITHUB & GOOGLE api keys
```
DATABASE_URL=""
AUTH_SECRET=""

GITHUB_ID=
GITHUB_SECRET_ID=

GOOGLE_ID=
GOOGLE_SECRET_ID=
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open (http://localhost:3000) with your browser to see the result.
