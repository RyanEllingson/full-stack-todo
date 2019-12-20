// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const db = require("./models/index.js");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// =============================================================

// Basic route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then(function(todos) {
        res.json(todos);
    });
});

app.post("/api/todos/", async function(req, res) {
    const todo = await db.Todo.create({task: req.body.task});
    res.json(todo);
});

// Starts the server to begin listening
// ========================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});