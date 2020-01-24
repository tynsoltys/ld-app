# ld-app

### 👋 Hello and welcome to Tyn's Take Home Test!

The app is hosted [here](https://boiling-river-63434.herokuapp.com/).

#### 🏃‍♀️ How to run the app locally/dev environment:

1. Download or clone the ld-app to your local environment.
2. Open a terminal and navigate to the `ld-app/` directory.
3. Run `npm install` to install all server dependencies.
4. Run `npm run client-install` will install all React app dependencies.
5. Run `npm run dev` to start concurrent servers.
6. Go to `http://localhost:3000`.

All useful scripts (from directory `ld-app/`):

- `npm install` to install all server dependencies.
- `npm run client-install` will install all React app dependencies.
- `npm start` will start the server and hot reload after detecting any change to the server file.
- `npm run server` will start the server, listen for any changes in the code, and hot reload the page on browser to reflect the change.
- `npm run client` will run the React app with hot reload.
- `npm run dev` will concurrently run the server and then run the client on your browser at localhost:3000 and hot reload _all the things_.
- `npm run build --prefix client` will build the React app to client/build.

#### Things to check out:

1. 💌 First, send me a message.. the expected behaviour is to receive a pop-up note with your message. _👉 Note that these are going to a DB and I am going to read them so be nice, but do feel free to provide live feedback! ❤️_
2. 🖱 Hover over various things for some cool microinteractions (I know I wasn't supposed to do this but this girl's gotta have fun 🎉).
3. 🎨 Check out the CSS used to recolour the logdna logo to match the mockup (now I'm just flexing 💪).

#### Thoughts and Assumptions

Without knowing explicitly how the app works, I made some assumptions around the architecture & behaviour:

1. The contents of the "main" section of the app is only fetched & set when we know which workspace (the things in the side nav) is selected --> this is why you do not see any sort of state pertaining to the messages (other than navItems) on the highest App level. _In another iteration of this, this is where Auth and user info could be fetched and stored maybe.._
2. The message sends a note to the author of the article (a.k.a. me 🤗).
3. As far as styles go, I chose to go with a classic cascading stylesheet approach compiled from Sass and structured by component. This is just one way of approaching styling in React apps, and a conversion to a CSS-in-JS or CSS modules system is a few simple copypastas away.
