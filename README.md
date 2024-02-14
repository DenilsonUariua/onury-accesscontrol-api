# onury-accesscontrol-api

# Access Control API for Node.js Express JS

### Description

This is a simple access control API for Node.js Express JS. It uses the accesscontrol package to manage roles and permissions.

### Clone the repository

```bash
git clone git@github.com:DenilsonUariua/onury-accesscontrol-api.git
```

### Installation

```bash
npm install
```

### Run the application in production mode

```bash
npm run build
```

#### then

```bash
npm run start
```

### Run the application in development mode

```bash
npm run dev
```

### Available GET routes

- /users/:role

### Available POST routes

- /update/file {"role": "user"}
- /delete/file {"role": "admin"}
- /create/file {"role": "user"}
- /read/file {"role": "admin"}
