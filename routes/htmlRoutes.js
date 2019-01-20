

module.exports = function(app) {

  //When rendering the frontpage, get the top 5 leaders from the database and send the info to chart.js
  app.get("/", function(req, res) {
      res.render("index", {
      });
    });

  app.get("/game", function(req, res) {
    res.render("game", {  
    });
  });

  app.get("/newuser", function(req, res) {
    res.render("newuser", {  
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
