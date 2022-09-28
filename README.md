# Installation

## Install Node.js
Testing via Javascript makes use of Node.js. 
Just add everything it asks you to. 
This must also be added to your PATH.

## Setup
If you installed Node.js, it also has installed npm.
npm will be used to test the code. This repository
contains the setup. Enter

```bash
npm install --save-dev jest
```
in the terminal. It should work just fine after that.

Package.json is responsible for assigning Jest as
test environment. 
Package-lock.json is responsible for telling which modules
are needed in this environment. Similarly, node_modules contains
all said modules.

If you run 
```bash
npm test
```
in the terminal, you should see that all 6 tests pass. 
