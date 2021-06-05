# pets-app
Exploring GraphQL

# pets-app

## Purpose
Home assignment. Create an app using JS and GraphQL<br/>

## Instructions
In order to build it run:<br/>
cd server <br/>
npm install <br/> 
npm start<br/>
There could be some issues with **nodemon**, run  <br/>
npm install -g nodemon  <br/>
npm install --save-dev nodemon  <br/>

To navigate GraphQL playground: http://localhost:9005/graphql

## Usage
### Available APIs: 
#### Query:
* user - get user by dd
* users - get all users
* petOwners - get pet owners
#### Mutation:
* addUser - create new user, implemented bonus task - addition of pets
* updateUser - update existing user, all fields besides id could be updated, implemented bonus task - update of pets
* deleteUser - delete user by id, including pets

### Examples
addUser without a pet <br/>
![image](https://user-images.githubusercontent.com/45272594/120904731-5c1fb100-c656-11eb-900a-4b320226e2bf.png) <br/>
updateUser by adding a pet <br/>
![image](https://user-images.githubusercontent.com/45272594/120904844-0c8db500-c657-11eb-832e-47e00c048edb.png) <br/>
deleteUser by id <br/>
![image](https://user-images.githubusercontent.com/45272594/120904912-68f0d480-c657-11eb-95ec-11e39b9e8dce.png) <br/>



## Copyright
2021 Elena Root
