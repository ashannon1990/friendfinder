var friendsData = require("../data/friends")



module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData)
  })
  app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    res.json(true)

    var user = req.body;

    //  convert user input to integers
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i])
    }
    //  compare user input to people in the api, and find the total difference between answers
    var totalDifference = []
    var currentDifference
    for (var i = 0; i < friendsData[i].length; i++) {
      currentDifference = 0
      for (var j = 0; friendsData[i].scores.length; j++) {
        difference += (Math.abs(req.body.scores[j] - friendsData[i].scores[j]));
      }
      totalDifference.push(currentDifference);

    }
    // send back results to html page so they can be added to modal
    friendsData.push(req.body);
  });
}

