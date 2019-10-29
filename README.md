# Firebase Email Function

Send Gmail with Firebase Functions and Nodemailer.

## Installation

* Install firebase-tools
```
$ npm install -g firebase-tools
```

* Login firebase
```
$ firebase login
```

* Initialize firebase functions (select 'TypeScript')
```
$ firebase init functions
```

* Replace functions directory
```
$ cd {project_dir}
$ rm -rf functions
$ git clone --depth 1 https://github.com/ShogoTakeuchi/firebase-email-function.git
& mv firebase-email-function functions
```

## Examples

* Setup "From" address

```
firebase functions:config:set gmail.email="***@gmail.com"
firebase functions:config:set gmail.password="***"
```

* Execute

```ts
const firebase = require("firebase");
const sendMail = firebase.functions.httpsCallable("sendMail");
sendMail({ destination: "***@outlook.com", subject: "Hello", body: "I love TypeScript" });
```

### License

Firebase Email Function is [MIT licensed](./LICENSE).
