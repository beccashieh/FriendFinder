# FriendFinder

## Live Link
[Heroku Live Link]( https://quiet-anchorage-71842.herokuapp.com/)

## Usage
![homeScreen](https://user-images.githubusercontent.com/47259793/58347323-94ffdb00-7e2b-11e9-8fd8-2ef3d6c8fa71.PNG)
![surveyScreen](https://user-images.githubusercontent.com/47259793/58347335-9c26e900-7e2b-11e9-88e8-2ee091683a30.PNG)

This user-friendly app allows a user to take part in our 10 question survey to be matched with a new friend. The answers the user gives are compared to the users in our database. Once a close match is found, a modal pops up for the user displaying the name and photo of their new friend match. 

## Requirements

This app requires an npm install of the following packages:
```
npm install express
npm install body parser
npm install path

```
## File Setup Breakdown
* There is a public folder which contains the client facing materials as well as our css:
```
home.html
survey.html

```

* The friend match logic is contained on the ``apiRoutes.js`` file.
* The paths are contained on the ``htmlRoutes.js`` file. 
* The ``server.js`` file contains the npm packages needed to run our app and setup our server.
* The ``friends.js`` file contains our array with existing friend array.

## Technologies Used
* JavaScript
* jQuery
* node.js
* Express.js
* HTML
* Bootstrap
