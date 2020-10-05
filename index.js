const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { success, error } = require("consola");
const { connect } = require("mongoose");

// Getting routes
const roleRoute = require("./routes/roles_router");
const userRoute = require("./routes/users_router");

// getting  config content
const { DB, PORT } = require("./config");

// Initializing app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes field
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/api/roles", roleRoute);
app.use("/api/users", userRoute);

// Function for connection and starting server
const startApp = async () => {
    try {
        await connect(DB, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        success({
            message: `Successfully connected with the Database \n ${DB}`,
            badge: true,
        });

        app.listen(PORT, () =>
            success({
                message: `Server started on port http://localhost:${PORT}`,
                badge: true,
            })
        );
    } catch (err) {
        error({
            message: `Unable to connect Database \n ${err}`,
            badge: true,
        });
        startApp();
    }
};

startApp();
