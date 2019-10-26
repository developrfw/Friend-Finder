var friends = require("../data/friends");

module.exports = function(app){

   
    app.get('/api/friends', function(req, res){
        res.json(userData );
        console.log(userData );
    });

    app.post('/api/friends', function(req, res){
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
          };
      
        
          var userData = req.body;
          var userScores = userData.scores;
          console.log("UserData", userData )
    
          var totalDifference;
      
          
          for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
      
            console.log(currentFriend.name);
      
            
            for (var j = 0; j < currentFriend.scores.length; j++) {
              var currentFriendScore = currentFriend.scores[j];
              var currentUserScore = userScores[j];
              console.log("currentUserScore", currentUserScore)
      
              
              totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
              console.log(totalDifference, "=======================================")
            }
      
            
            if (totalDifference <= bestMatch.friendDifference) {
              console.log(totalDifference, "++++++++++++++++++++++++++++++++++++++++++++")
      
             
              bestMatch.name = currentFriend.name;
              bestMatch.photo = currentFriend.photo;
              bestMatch.friendDifference = totalDifference;
            }
          }
      
         
          friends.push(userData);
      
         
          res.json(bestMatch);
        });
      };
      