# LAB - 08

## Project Name
Mongoose is Fun

### Author: Student/Group Name
John Nelson

### Links and Resources
* [submission PR](https://github.com/johnnelson-401-advanced-javascript/mongoose-is-fun/pull/3)
* [travis](https://travis-ci.com/johnnelson-401-advanced-javascript/mongoose-is-fun/builds/129196001)


#### Documentation
* [api docs](http://xyz.com) (API servers)


### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - mongodb://heroku_4rfjczz1:ped1fdk3mt2njmhgcka7pofvn1@ds147902.mlab.com:47902/heroku_4rfjczz1

**or, include an `.env.example`**

#### Running the app

**Describe what npm scripts do**
 lint
    eslint .
  jest
    jest
  test:watch
    npm run jest -- --watchAll
  test:verbose
    npm run test -- --verbose
  start:watch
    nodemon server.js
  
#### Tests
* dog.test.js  
  Tests the Dog model
* app.test  
  Tests the app.js API functionality
* dogs-api.test  
  Tests the API routes and CRUD functionality of Dogs.

#### UML
Link to an image of the UML for your application and response to events

