# Learning Nodejs

- app folder contains index.js file, by default it will be executed.
- second, config.js that defines the port we are running.
- In the utils folder, we can create the our other js files.
- install node inside the folder, npm init.
- `npm init -y` command creates the package.json with default version settings.
- download express `npm i express`, Allows you to define application routes using HTTP methods and URLs.
- download `npm i -D nodemon`, It monitors your project directory and automatically restarts your node application when it detects any changes.
- dowlaod `npm i morgan`, http logging library
- We should not push the node_modules to git, so create a `.gitignore` file enter the node_modules.

## Creating commonjs

- create a folder called utils, within this we can create a files that do the specific function.
- import command common js

```
\\common js import method
const express = require("express");
const morgan = require("morgan");
const config = require("./config");
```

- export command common js

```
//common js export method
module.exports = {
  stringLength,
};
module.exports = config;
```

- To run the code, <i>node app</i>.

## Create a port to run

- In the config file and set port.
- install nodemon, write the scripts to start and dev

- `npm start` runs node app command

```

```

"main": "index.js",
"scripts": {
"start": "node app",
"dev": "nodemon"
},

```

```

- while running `npm run dev` it throws an error,after calling main with correct path, it resolved.

```
"main": "app/index.js",
```

## Import node js

- To use import and export, add `"type"="module"` in package.json.
- import and export using node js

```
//node js
import express from "express";
import morgan from "morgan";
import config from "./config.js";
```

```
export default config;
```
