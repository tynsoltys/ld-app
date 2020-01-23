# ld-app

### 👋 Hello and welcome to Tyn's Take Home Test!

The app is hosted [here](https://boiling-river-63434.herokuapp.com/).

#### 🏃‍♀️ How to run the app locally/dev environment:

1. Download or clone the ld-app to your local environment.
2. Open a terminal and navigate to the `ld-app/` directory.
3. Run `npm install` to install all server dependencies.
4. Run `npm run client-install` will install all React app dependencies.

All scripts (from base `ld-app/`):

- `npm install` to install all server dependencies
- `npm run client-install` will install all React app dependencies
- `npm start` will start the server and hot reload after detecting any change to the server file
- `npm run server` will start the server, listen for any changes in the code, and hot reload the page on browser to reflect the change.
- `npm run client` will run the React app with hot reload
- `npm run dev` will concurrently run the server and then run the client on your browser at localhost:3000 and hot reload _all the things_.
- `npm run build` will build the React app to client/build

#### Things to check out:

1. 💌 First, send me a message.. the expected behaviour is to receive a pop-up note with your message. _👉 Note that these are going to a DB and I am going to read them so be nice, but do feel free to provide live feedback! ❤️_
2. 🖱 Hover over the logo, the sidenav, and the articles list for some cool css fun (I know I wasn't supposed to do this but this girl's gotta have fun 🎉).
3. 🎨 Check out the CSS used to recolour the logdna logo to match the mockup (now I'm just flexing 💪).
4. I was trying to demonstrate use of a few different React concepts.

#### Thoughts and Assumptions

Without knowing explicitly how the app works, I made some assumptions around the architecture & behaviour:

1. The contents of the "main" section of the app is only fetched & set when we know which workspace (the things in the side nav) is selected --> this is why you do not see any sort of state (other than navItems) on the highest App level. _In another iteration of this, this is where Auth and user info could be fetched and stored maybe.._
2. The "articles" list is a set of articles, and posting a message on any of those is sending feedback to the author (why not?).
3. As far as styles go, I chose to go with a classic stylesheet approach compiled from Sass and structured by component. This is just one way of
