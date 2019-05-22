var friendsArray = require('../data/friends.js');

module.exports = function (app){
    app.get('/api/friends', function(req, res){
        res.json(friendsArray);
    });

    app.post('/api/friends', function(req,res){

        //Contains the details from the new user (name, photo, and scores).
        var friend = req.body;
        var scores = req.body['scores[]'];
        console.log('req body is', scores)
        
        // console.log(Object.keys(req.body['scores[]']))
        console.log('firend is', scores)
        for (var i = 0; i < scores.length; i++){
            
            friend['scores[]'] = parseInt(friend['scores[]']);
        }

        //friendMatch is the index of the match. Defaults to 0 (first friend in the list if there is not a match)
        //result will be the friend with the lowest difference in scores.
        var friendMatch = 0;
        var minDifference = 30; 

        //First look goes through existing array and gives starting value of totalDif variable.
        for (var i = 0; i < friendsArray.length; i++){
            var totalDif = 0;

            //Nested loop compares the scores from the new user and the scores for existing friends in our array.
            //The difference is added to total difference giving us the value needed to find our match.
            for (var j = 0; j < friendsArray[i].scores.length; j++){
                var difference = Math.abs(friend['scores[]'][j] - friendsArray[i].scores[j]);
                totalDif += difference;
            }
        
            //This gives us the friend with the lowest difference in scores.
            if (totalDif < minDifference){
                friendMatch = i;
                minDifference = totalDifference;
            }
        }

        //Sends our new friend (user input) to the friendsArray.
        friendsArray.push(friend);

        //Sends the result to the browser.
        res.json(friendsArray[friendMatch]);
    });
};