# MyDay

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)


## General info

[Git repo](https://github.com/amirbashan/MyDay)

### This project

A personal take to create a project management site.

### Technologies

Project is created with:

- Node.js v16 or higher (LTS version)
- React Vite


## Setup

### `Initialize`

To run this project, install it locally using npm:

```bash
$ cd ./MyDay
npm install
npm run initialize
```

### `Config`

**Frontend**

Frontend is configured using public assets to allow configuration to be changed at run time.  
The configuration directory is: `packages/frontend/public/assets/config`.  
Configuration defaults in-code directory is: `packages/frontend/src/assets/config`

Connection to backend is defined in `general.config.json`.

**Server**

Copy .env.example to .env and change the required values.  


## Scripts

### `Run in Dev mode`

  ```bash
  npm run dev
  ```

### `Remove node modules from packages`

  ```bash
  npm run clean
  ```

### `Link different projects within the repo`

  ```bash
  npm run refresh
  ```

### `Build`

  ```bash
  npm run build
  ```

### `Update Version Number`

```bash
npm run new-version
```


## `Troubleshooting`

### `How to add new packages`

1. Create the package in the shared directory.

2. In the package.json, file name should be "@myday/(packageName)"

3. Add your new package __in the package you want to use it__ in package.json under dependencies as "@myday/(packageName)": "\*"

4. ```bash
   npm run clean
   npm run bootstrap
   ```

5. check if the package added properly
   ```bash
   npx nx graph
   ```

   press "show all projects" and see if there is an arrow heading to your new package
