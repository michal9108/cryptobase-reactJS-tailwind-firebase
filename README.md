# Crypto Base - ReactJS + Tailwind + Firebase + Firestore 

<img src="https://github.com/michal9108/cryptobase-reactJS-tailwind-firebase/blob/416a827f80714a7b5664b9aa8a494944cad49850/cryptobase.jpg" width="100%" height="100%"/> 
</a>

## Link

[Cryptobase website](https://cryptozakladna.firebaseapp.com/)

## Requirements

Before using this project, you will need to have installed [Node.js](https://nodejs.org/en/), [git](https://git-scm.com/), [redux](https://redux.js.org/), [tailwind](https://tailwindcss.com/), [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/),


## Coin Gecko API Key


## Development Setup

**Front-End**

```
$ git clone https://github.com/michal9108/cryptobase-reactJS-tailwind-firebase.git
$ cd cryptobase-reactJS-tailwind-firebase.git
$ npm install or yarn install
$ npm i qrcode or yarn add qrcode
```

The application will be listening on port 3000. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Back-End**

**Firebase Setup**

1. Create or Sign-In to [Firebase Account](https://firebase.google.com/).
2. Get started > Create New project > add Project > Give a name, Google Analitics are not mandatory
3. Create firebase `.js` file
4. Add  firebase to your Web App - On Firebase choose `Web app`.
5. REgister App under nickname
6. Add Firebase SDK
7. Install Firebase:
```
$ npm install firebase or yarn add firebase
```
8. From Firebase - Copy Firebase configuration - paste `Firebase SDK's` to your newly created `.js` file.
9. Make sure your API informations stays private - Create `.env` file and paste there values of your`Firebase SDK's` 
10. Restart your local server

**Firebase Authentication**

1. Email/Password  - Enable
2. Add the Firebase Authentication JS SDK to your firebase .js file :
```
import { getAuth } from "firebase-auth";
```
and 
```
export const auth = getAuth(app); //needed to be used in the context file, modify context file accordingly
```
3 Create Authentication context .js file within new project folder - context.


**Firestore Database - cloud for storage**

1. Add the Firestore JS SDK to your firebase .js file :
```
import { getFirestore } from "firebase/firestore";
```
and 
```
export const db = getFirestore(app); //needed to be used in the context file, modify context file accordingly
```

## Deploy Setup

1. Login to firebase on your CLI:
```
$ firebase login
```
2.Choose your google account

3.Go to Firebase Hosting

4.Continue > Hosting > Get started
	
5. Install Firebase on your CLI
```
$ Install firebase CLI npm install -g firebase-tools
```

6. Start build process
```
$ yarn run build 
```
or
```
$ npm run build 
```

7. Initiate your project :
```
$ firebase init
```

8. CLI - Choose `Hosting` Configure files for Firebase Hosting and (optionally) set up Github Action deploys

9. Use existing project <name of this project>

10. What do you want to use as your public directory?  `build`

11. Configure as a single-page app (rewrite all urls to /index.html)? `No`
 
12. Set up automatic builds and deploys with GitHub? (y/N) `y`

13. For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)

14.what script shoud run before every deploy? `npm ci && npm run build`

15.Set up automatic deployment to your site's live channel when a PR is merged `y`

16. What is the name of the GitHub branch associated with your site's live channel?  - `main`

17. Start Deploy process:
```
$firebase deploy
```

# Special Directories

**Dir src contains**

1.components - ReactJS components

2.context - Context needed for Firebase Authorisation

3.page - Different pages of the application 

For detailed explanation on how things work, check out the [react.js](https://reactjs.org/), and [Firebase](https://firebase.google.com/docs?authuser=0&hl=en) documentation.

