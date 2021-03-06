# node-express-mongodb-vue-auth-crud-app 

## server side
- mongo db database !! you need mongodb installed on your device
- express / node.js backend with 2 POST routes for the authentification and 2 routes (get/post) for user profile data
- the jwt token will be stored in the localstorage, it will be renewed every 24 hours

## client side
- vue 3 app (the composition api is not used, but should be in some places)
- vuex store keeps the authentification stuff
- basic frontend with bootstrap 5
- end to end testing with cypress.io (just the login / registration parts, could've done more extensive)


## how to install
- be sure to have mongodb and node running on your computer https://docs.mongodb.com/manual/installation/ and https://nodejs.org/en/download/

- the server should be running on port 8080 and the client on port 8081

- [server-side]: cd into the server folder and npm i


```
cd server
npm i
npm start
```

- [client-side]: cd into the client folder and yarn
  
```
cd client
yarn
yarn serve
```

- [testing]: cd into client folder and yarn cypress:test
```
cd client
yarn cypress:open
```


## done / todos / nice to haves / ideas

#### server-side
- [x] authentification jwt 
- [x] create and update user data
- [x] refactor backend code 
- [x] testing the api manually 
#### client-side
- [x] build service for api consumption
- [x] routing / protected routes
- [x] vuex store
- [x] build views
- [x] build generic component for the form
- [x] testing the login and registration with cypress e2e test



### in progress

- [ ] typescriptify backend / frontend
- [ ] loading api status on frontend
- [ ] testing the api too
- [ ] delete the data with api call (not just update to '')
- [ ] add client-side / server side form / validation
- [ ] use composition api for reusable code in vue components