# ld-app with mongoDB database

---

### 👋 Hello and welcome to Tyn's Take Home Test!

The app is hosted [here](https://boiling-river-63434.herokuapp.com/). I've included some additional notes on features and assumptions below.

This setup requires a mongoDB database to be set up.

---

#### 🏃‍♀️ How to run the app locally/dev environment:

1. Download or clone the ld-app to your local environment.
2. Open a terminal and navigate to the `/ld-app` directory.
3. Create a basic mongodb database at [mongoDB Atlas](https://cloud.mongodb.com/).
4. Create a `.env` file in the `/ld-app` directory and set a `MONGODB_URI=<yourconnectionstring>` without any of the extra params.
5. Run `npm install` to install all server dependencies.
6. Run `npm run client-install` will install all React app dependencies
7. Run `npm run dev` to start concurrent run of server & client
8. Go to `http://localhost:3000`.

---

#### ⌨️ Some other commands that might be useful?:

| Command                         | What it does                                                       |
| ------------------------------- | ------------------------------------------------------------------ |
| `npm install`                   | install all server dependencies                                    |
| `npm run client-install`        | install all React app dependencies.                                |
| `npm start`                     | start the api server                                               |
| `npm run server`                | start the server with hot reload (localhost:9000)                  |
| `npm run client`                | start the React app with hot reload (localhost:3000)               |
| `npm run dev`                   | concurrently run server and client and hot reload _all the things_ |
| `npm run build --prefix client` | build React app in /client/build.                                  |

###### _To preview the react build with the test server, build React app, start server, and go to localhost:9000_

---

#### Things to check out:

1. 💌 First, send me a message.. the expected behaviour is to receive a pop-up note with your message. 👉 _These will get stored in your DB_
2. 🖱 Added a couple of lil microinteractions (I know I wasn't supposed to do this but this girl's gotta have fun 🎉).
3. 🎨 Check out the CSS used to recolour the logdna logo to match the mockup (now I'm just flexing 💪).

---

#### Thoughts and Assumptions

Without knowing explicitly how the app works, I made some assumptions around the architecture & behaviour:

1. The contents of the articles and main section of the app is only fetched & set when we know which workspace (the things in the side nav) is selected --> this is why you do not see any sort of state pertaining to the messages (other than navItems) on the highest App level. _In another iteration of this, this is where Auth and user info could be fetched and stored maybe.._
2. The message sends a note to the author of the article (a.k.a. me 🤗) and returns a quick little pop up message with a success message or error.
3. As far as styles go, I chose to go with a classic cascading stylesheet approach compiled from Sass and structured by component. This is just one way of approaching styling in React apps, and a conversion to a CSS-in-JS or CSS modules system is a few simple copy-pastes away.

---

🍦 **Cool! That's all for now!** For the record, had a blast building this and figuring out how to do servers/apis n stuff (especially how to deploy them alongside the frontend 🤔🥴🤬🤪🙃💁‍♀️), but this really affirmed to me that there's nothing that googling and tenacity can't solve! Thanks again for this opportunity - I learned a ton and had fun, too.

_Please do get in touch with any questions or curiosities!_
