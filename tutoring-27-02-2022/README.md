# 1. What is Typescript?
- a superset of Javascript. (all your working javascript is also typescript code)
- a transpiled language (typescript is not executed directly, it is first transpiled/translated into javascript)
- a language that adds static typing to javascript (the types of variables have to be known before executing the code - at compile time - and should not change during the runtime)
# 2. Initialize Project
## initialize npm
```bash
#Run in empty directory referred to as ./
mkdir typescript_intro
cd typescript_intro
npm init -y
```
## add typescript
```bash
#Run in ./typescript_intro
npm install typescript --save-dev
or
npm install typescript -g
```
If you are planning to use typescript on multiple projects, i recommend installing it globally.
## initialize typescript
```bash
#Run in ./typescript_intro
tsc --init
```
A new file got created: `tsconfig.json` More about this config file: https://aka.ms/tsconfig.json
### Notable config options:
- **compilerOptions.target**: Which Version of Javascript is created (ES5, ES6, ES2020 etc.)
- **compilerOptions.module**: Specify what kind of module is created (commonjs => require(), module.exports, ES6 => import ... from, export)
- **compilerOptions.outDir**: Directory to which Typescript will output the transpiled .js files, without setting it, the .js file is emitted right next to the .ts file
- **include**: takes an array of files or directories to include when transpiling or watching for code changes

## Some changes to tsconfig
```json
{
    "compilerOptions":{
        //...
        "outDir": "./dist",
        //...
    },
    "include": ["src/**/*"] //We only want to include the src directory
}
```

## Create folder and index.ts
```bash
#Run in ./typescript_intro
mkdir src
touch src/index.ts
```

# 3. Typescript hello world
- Inside the index.ts write some code that outputs hello world to the console.
- transpile it by executing in your terminal
```bash
#Run in ./typescript_intro
tsc
```
- tsc should have created a new directory `./dist` and a `index.js` in it.
- run it using node
```bash
#Run in ./typescript_intro
node ./dist/index.js
```

## Having to call tsc everytime after i make a change is inconvenient!
To the rescue comes:
```bash
#Run in ./typescript_intro
tsc --watch
```
Now everytime you make a change to a file inside src. tsc will run and transpile your code. To also immediately run the transpiled js code use nodemon. Inside a new terminal (tsc --watch will run in the one you just used):
``` bash
#Run in ./typescript_intro
npm i nodemon --save-dev
nodemon ./dist/index.js
```

## Still having to run two commands and having two open terminals sucks...
CTRL+C out of the running nodemon and tsc processes and install ts-node:
``` bash
#Run in ./typescript_intro
# -D === --save-dev
npm i ts-node -D 
```

# 3. The typescript transpiler - tsc

# 4. 