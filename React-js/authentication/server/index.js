// import express from "express";
// import cookieParser from "cookie-parser";

// // const app = express();
// // app.use(cookieParser());

// // app.get("/set", (req, res) => {
// //   res.cookie("name", "sella");
// //   res.send("Cookie set");
// // });

// // app.get("/get", (req, res) => {
// //   res.send(req.cookies);
// // });

// // app.listen(3000, () => {
// //   console.log(`server running for http://localhost:3000`);
// // });

// // const express = require("express");
// // const cookieParser = require("cookie-parser");

// const app = express();

// // secret used to sign cookies
// app.use(cookieParser("sella@1905"));

// /*
// -----------------------------------
// SET COOKIE (secret + expiry)
// -----------------------------------
// */
// app.get("/set", (req, res) => {
//   res.cookie("token", "abc123xyz", {
//     httpOnly: true, // JS cannot access (secure)
//     signed: true, // encrypted/signature added
//     maxAge: 60 * 1000, // 1 minute (in ms)
//   });

//   res.send("Secure cookie set");
// });

// /*
// -----------------------------------
// GET COOKIE
// -----------------------------------
// */
// app.get("/get", (req, res) => {
//   res.send(req.signedCookies);
// });

// /*
// -----------------------------------
// CLEAR COOKIE
// -----------------------------------
// */
// app.get("/clear", (req, res) => {
//   res.clearCookie("token");
//   res.send("Cookie cleared");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 3000");
// });

// const express = require("express");
// const session = require("express-session");
// import express from "express";
// import session from "express-session";

// const app = express();

// // SESSION MIDDLEWARE
// app.use(
//   session({
//     secret: "MY_SESSION_SECRET", // used to sign session ID
//     resave: false, // don't save again if unchanged
//     saveUninitialized: true, // create session even if empty
//     cookie: {
//       maxAge: 60 * 1000, // 1 minute expiry
//       httpOnly: true, // secure (JS can't access)
//     },
//   })
// );

// /*
// -----------------------------------
// SET SESSION
// -----------------------------------
// */
// app.get("/login", (req, res) => {
//   req.session.user = {
//     name: "Sella",
//     role: "admin",
//   };

//   res.send("Session created (logged in)");
// });

// /*
// -----------------------------------
// GET SESSION
// -----------------------------------
// */
// app.get("/profile", (req, res) => {
//   if (!req.session.user) {
//     return res.send("No session found. Please login.");
//   }

//   res.send(req.session.user);
// });

// /*
// -----------------------------------
// DESTROY SESSION
// -----------------------------------
// */
// app.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.send("Session destroyed (logged out)");
//   });
// });

// /*
// -----------------------------------
// START SERVER
// -----------------------------------
// */
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const express = require("express");
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// import express from "express";
// import session from "express-session";
// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";

// const app = express();

// // fake user (DB simulation)
// const USER = {
//   id: 1,
//   username: "sella",
//   password: "1234",
// };

// // body parser
// app.use(express.urlencoded({ extended: false }));

// // session setup
// app.use(
//   session({
//     secret: "romba-secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // passport init
// app.use(passport.initialize());
// app.use(passport.session());

// /*
// --------------------------------
// PASSPORT STRATEGY (LOGIN LOGIC)
// --------------------------------
// */
// passport.use(
//   new LocalStrategy((username, password, done) => {
//     if (username !== USER.username) {
//       return done(null, false, { message: "Invalid user name" });
//     }

//     if (password !== USER.password) {
//       return done(null, false, { message: "Wrong password" });
//     }

//     return done(null, USER);
//   })
// );

// /*
// --------------------------------
// SESSION STORE
// --------------------------------
// */
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   done(null, USER || false);
// });

// /*
// --------------------------------
// ROUTES
// --------------------------------
// */

// // home
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// // login
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/profile",
//     failureRedirect: "/login-fail",
//   })
// );

// // protected route
// app.get("/profile", (req, res) => {
//   if (!req.isAuthenticated()) {
//     return res.send("Not authenticated");
//   }

//   res.send(`Welcome ${req.user.username}`);
// });

// // logout
// app.get("/logout", (req, res) => {
//   req.logout(() => {
//     res.send("Logged out");
//   });
// });

// app.get("/login-fail", (req, res) => {
//   res.send("Login failed");
// });

// // start server
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/auth");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server conninting http://localhost:${PORT}`);
});
