var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// var devouredArray = [];
// var menuArray = [];

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.get("/burgers/all", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.json(hbsObject);
    })
  });

  /* router.get("/burgers/devoured", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers:data
      };

      for (var i = 0; i < hbsObject.length; i++) {
        var consumed;
        if (hbsObject[i].devoured === 1) {
          consumed += hbsObject[i];
        }
        return res.json(consumed);
      }
    })
  }); */

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log(req.body);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;