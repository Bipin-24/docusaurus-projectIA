# 📘 My Docusaurus Documentation Site

Welcome to the documentation site built with [Docusaurus 2](https://docusaurus.io/) – a modern static website generator optimized for documentation websites.


## 🦖 Running Docusaurus on Mac via VS Code

This guide walks you through installing and running a Docusaurus site locally using VS Code on macOS.

---

### 🛠 Prerequisites

Before you begin, make sure the following are installed:

- **Node.js** (v16.14 or later)
- **npm** (comes with Node.js)
- **Git**
- **VS Code**

Check installation:

```bash
node -v
npm -v
git --version
```

### 📁 Step 1: Open Terminal & Create Project Directory

```bash

mkdir my-docusaurus-site
cd my-docusaurus-site
```

### 🧱 Step 2: Scaffold Docusaurus Project

Run the following to create a new site:

```bash

npx create-docusaurus@latest . classic  
```

### 💻 Step 3: Open in VS Code
``` bash

code .
This opens the project in VS Code.
```

### 📦 Step 4: Install Dependencies (if not already)

```bash
  
npm install
```

### 🚀 Step 5: Run Docusaurus Locally
```bash
 
npm run start  

```

This will start the dev server. Open your browser and go to:

http://localhost:3000


#### 📌 Notes 

To build the site for production:  

```bash  

npm run build  

```

To serve the built site locally:

```bash  

npm run serve
```