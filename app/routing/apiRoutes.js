var friendsData = require("../data/friends");
var currentDifference;


module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {

    var totalDifference = [];
    for (var i = 0; i < friendsData.length; i++) {

      currentDifference = 0;

      for (var j = 0; j < friendsData[i].scores.length; j++) {
        currentDifference += (Math.abs(req.body.scores[j] - friendsData[i].scores[j]));
      };

      console.log("Difference from " + friendsData[i].name + ": " + currentDifference);

      totalDifference.push(currentDifference);

    };
    var leastDifference = totalDifference.sort(function (a, b) { return a - b })[0];


    for (var i = 0; i < friendsData.length; i++) {
      currentDifference = 0;
      for (var j = 0; j < friendsData[i].scores.length; j++) {
        currentDifference += (Math.abs(req.body.scores[j] - friendsData[i].scores[j]));
      };
      if (currentDifference === leastDifference) {
        console.log("Friend found: " + friendsData[i].photo);
        var friendFound = friendsData[i].name;
        var friendPhoto = friendsData[i].photo;
        res.json(friendsData[i]);

      };
    }
// pushing to api on local, but not on deployed
    friendsData.push(req.body);



  });
};