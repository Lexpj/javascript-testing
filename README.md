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

## Testing
Testing will happen automatically when pushed. If all tests pass, a green checkmark will show up.
If not, it will show a red cross and send an email stating that one or more tests failed.
The debugger already shows you if tests pass, but this automatic testing also shows for
watchers that all tests pass. 

## Cross platform testing
For platform specific items, like secure storage, platform specific tests can be used.
There is a way to detect what platform is used for testing. In the testing environment,
this must also be stated in said variable. When this is read properly, specific platform
unit-tests can be written.
More practical testing will be done manually. This means tests that cannot be stated in 
an unit-test. This probably page-switches in the app. 

