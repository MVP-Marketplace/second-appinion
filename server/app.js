require("./db/config");
const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  cookieParser = require("cookie-parser"),
  openRoutes = require("./routes/open/index"),
  path = require("path");

app.use(express.json());
app.use(morgan("dev"));

// Unauthenticated routes
app.use("/api/users", openRoutes);

app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}

// We'll add more stuff in between in a little bit.

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

module.exports = app;
