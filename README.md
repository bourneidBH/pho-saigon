# Pho Saigon

This full stack React app is a website for a local restaurant. It includes a database of menu items. Customers can add items to an order, modify their order, and submit. There are also forms for the site administrator to add, edit, or delete menu items.

**Deployed App:** http://phosaigon-mke.com/

## Getting started: 
This full-stack React app has two package.json files, one in the root directory and one in the client folder. To start a development server, clone the repo and then run npm install from both the root and client. Then start up MongoDB by running the command mongod in a new terminal window. Run npm start to start the development server.

### Prerequisites:
* Install MongoDB: https://www.mongodb.com/download-center#community and configure according to the directions for your operating system.
* Set up a project in Google developers console and add OAuth 2.0 credentials: https://console.developers.google.com/
* Configure project for https://mail.google.com at https://developers.google.com/oauthplayground

## Technologies used:
* MonogDB/Mongoose
* Express
* React/React Router
* Node.JS
* Nodemailer
* Bootstrap

## How it works:
* Customers can create and edit orders using the online order form on the Menu page. Submitting the order sends an email with order details.
* Customers can also use the contact form to send an email for general requests/inquiries.
* Changing pages is handled with react-router-dom switch.
* Admin forms allow the site administrator to add, edit or delete items from the menu MongoDB database. These forms are not viewable from the customer-facing pages of the site.

## Deployment
* Run npm run build.
* To deploy on Heroku run heroku create.
* On your Heroku account dashboard, find the app and add-on mLab Mongo.
* In the mLab dashboard add a database user.
* In your terminal run git push heroku master.