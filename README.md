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

## Creating simple utils function

- create a folder called utils, within this we can create a files that do the specific function.

```
//common js export method
module.exports = {
  stringLength,
};
```

- To run the code, <i>node app</i>.

## Create a port to run

- In the config file inside the utils folder
