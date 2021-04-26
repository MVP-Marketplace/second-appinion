# ![]()  #Second Appinion

## Intro

Get a dentist to review your X-Rays and diagnosis and give you a second opinion to avoid dental fraud.


## APIs & Frameworks

We integrated several APIs and frameworks into our site:

- [Fullcalendar](https://fullcalendar.io/) as our calendar framework.
- [Sendgrid](https://sendgrid.com/) for our email functionality.
- [MATERIAL-UI](https://material-ui.com/) for the front end components and design.
- [Cloudinary](https://cloudinary.com/) to upload and manage user images.

- To keep track of login information, we used JWT-based token authentication, bcrypt for password hashing, and Passport for user authentication.

<hr/>

## Status

Second Appinion MVP 1.0

## Installation

Application uses ports localhost 3000 and 8080.
- `git clone` this repo [git@github.com:wyncode/c39_bike_shop.git](https://github.com/wyncode/c39_bike_shop)
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

## Data

-We used the MERN stack for our app: MongoDB to store data, Express for our server, React for our front end and Node.js as our runtime.

- Used the MongoDB database to store our information. We have eight models/collections: users, cyclist, bikeshops, bicycles, orders, events, reviews, repairs. Users become cyclist when isAdmin is not in place. Cyclists can place order and leave reviews for bikeshops. Admins are bikeshops and have ability to create and edit their shops, repairs they offer, and update the progress of orders. We created our own event API to render local cycling events and group rides.

## Back End Usage

We have a seed file available in server/db/seeds/index.js for you to start up with faker-provided data.

<hr/>

## Dependencies

|        Client Side        |       Server Side       |   
| :-----------------------: | :---------------------: | 
| @material-ui/core         | @sendgrid/mail|
| @material-ui/icons        | axios|
| react                     | bcryptjs |
| react-dom                 | cloudinary |
| react-router-dom          | cloudinary-react
| |concurrently|
|| cookie-parser |
||express|
    

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

## Runs on Herkoku

https://thebikeshop305.herokuapp.com/
