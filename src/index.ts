import app from "./app";
const dotenv = require("dotenv").config(); // required for process.env

const port = process.env.PORT || 8081;
app.listen(port, () => {
	console.log("App is running at port " + port);
});