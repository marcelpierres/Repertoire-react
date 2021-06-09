# Repertoire-React
## Legend
- [Repertoire-React](#repertoire-react)
  - [Legend](#legend)
      - [Testing](#testing)
      - [Deploying to Firebase](#deploying-to-firebase)
  - [react popups](#react-popups)
  - [Firebase Database](#firebase-database)

#### Testing
- Git Clone the repository
- cd to 'Repertoire-React' repository and run npm install
- run npm start

#### Deploying to Firebase
- cd to 'Repertoire-React' and run the following:
```
firebase init

```
## react popups
- ```npm install reactjs-popup --save``` (https://www.npmjs.com/package/reactjs-popup) (https://react-popup.elazizi.com/use-case---tooltip/)
- 
## Firebase Database
- checking if a value exists (https://stackoverflow.com/questions/37910008/check-if-value-exists-in-firebase-db)
44

The exists() method is part of the snapshot object which is returned by firebase queries. So keep in mind that you won't be able to avoid retrieving the data to verify if it exists or not.

ref.child("users").orderByChild("ID").equalTo("U1EL5623").once("value",snapshot => {
    if (snapshot.exists()){
      const userData = snapshot.val();
      console.log("exists!", userData);
    }
});
Observations:
In case you are in a different scenario which you have the exact ref path where the object might be, you wont need to add orderByChild and equalTo. In this case you can fetch directly the path to the object so it wont need any search processing from firebase. Also, if you know one of the properties which the object must have you can do as the snippet bellow and make it retrieve just this property and not the entire object. The result will be a much faster check.

//every user must have an email
firebase.database().ref(`users/${userId}/email`).once("value", snapshot => {
   if (snapshot.exists()){
      console.log("exists!");
      const email = snapshot.val();
    }
});