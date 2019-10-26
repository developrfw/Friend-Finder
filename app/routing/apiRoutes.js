var friendData = require("../data/friends");

module.exports = function(app){

   
    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res){
        
        var friend = req.body;

        
        for(var i = 0; i < friend.scores.length; i++){
            friend.scores[i] = parseInt(friend.scores[i]);
        };

        var bffindex = 0;
        var minDifference = 50;

        for(var i = 0; i < friendData.length; i++){
            var totalDiff = 0;
            for(var j = 0; j < friendData[i].scores.length; j++){
                var difference = Math.abs(friend.scores[j] - friendData[i].scores[j]);
                totalDiff += difference;
            };
            if(totalDiff < minDifference){
                bffindex = i;
                minDifference = totalDiff;
            };
        };
        friendData.push(friend);

        res.json(friendData[bffindex]);
    });
};