# ld-app

👋 Hello and welcome to Tyn's Take Home Test for logDNA!

🚂 visit the app here.

### 🏃‍♀️ How to run the app locally:

1. Download or clone the ld-app to your local environment.
2. Open a terminal in the `ld-app/app` directory and run `npm start`

### 🎉 Highlights to check out:

1. 💌 First, send me a message.. the expected behaviour is to receive a pop-up note with your message. Errors will just be in a boring alert, but could refactor this later to be more consistent. _👉 Note that these are going to a DB and I am going to read them so be nice ❤️_
2. 🖱 Hover over the logo, the sidenav, and the articles list for some cool css fun (I know I wasn't supposed to do this but this girl's gotta have fun 🎉).
3. 🎨 Check out the CSS used to recolour the logdna logo to match the mockup (now I'm just flexing 💪).
4. I was trying to demonstrate use of a few different React concepts (normally I would just pick one pattern and stick to it, but I had )

### Thoughts and Assumptions

Without knowing explicitly how the app works, I made some assumptions around the architecture & behaviour:

1. The contents of the "main" section of the app is only fetched & set when we know which workspace (the things in the side nav) is selected --> this is why you do not see any sort of state (other than navItems) on the highest App level. _In another iteration of this, this is where Auth and user info could be fetched and stored maybe.._
2. The "articles" list is a set of articles, and posting a message on any of those is sending feedback to the author (why not?).
