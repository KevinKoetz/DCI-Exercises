//const express = require("express")
import express from "express"; //Can be used with .mjs file extension
import { Buffer } from "buffer";
import { v4, validate } from "uuid";

const app = express();

//Typescript
interface User {
  id: string;
  username: string;
  password: string;
}

//: User[] is Typescript
let users: User[] = [{ id: v4(), username: "Kevin", password: "password" }];
let session: { secret: string; user: User }[] = [];

app.use(express.json());

//app.method[get,post,delete]("endpoint", (request, response) => {})
app.get("/api", (req, res) => {
  res.send({ text: "Hello World" });
});

//get all users
app.get("/api/users", (req, res) => {
  if (!isAuthorized(req.headers.authorization)) return res.sendStatus(401);
  res.send(users);
});

//create user
app.post("/api/users", (req, res) => {
  if (!isCreateUserBody(req.body)) return res.sendStatus(400);
  if (!isUniqueUsername(req.body.username)) {
    res.status(409);
    return res.send("Username already in use.");
  }

  const newUser = { id: v4(), ...req.body };
  users.push(newUser);
  res.status(201);
  return res.send(newUser);
});

function isUniqueUsername(username: string) {
  return users.find((user) => user.username === username) ? false : true;
}

function isCreateUserBody(unknown: unknown) {
  if (typeof unknown !== "object") return false;
  if (unknown === null) return false;
  if (Object.keys(unknown).length !== 2) return false;
  if (!("username" in unknown)) return false;
  if (!("password" in unknown)) return false;

  const c1 = unknown as { username: unknown; password: unknown };

  if (typeof c1.password !== "string") return false;
  if (typeof c1.username !== "string") return false;

  return true;
}

//delete user
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const newUsers = users.filter((user) => user.id !== id);
  if (newUsers.length === users.length) return res.sendStatus(410);
  users = newUsers;
  return res.sendStatus(200);
});

interface PatchUserBody {
  userId: string;
  payload: {
    username?: string;
    password?: string;
  };
}

//update username or password
app.patch("/api/users", (req, res) => {
  if (!isPatchUserBody(req.body)) return res.sendStatus(400);
  const user = users.find((user) => user.id === req.body.userId);
  if (!user) return res.sendStatus(410);
  Object.assign(user, req.body.payload);
  return res.sendStatus(200);
});

function isPatchUserBody(unknown: unknown): unknown is PatchUserBody {
  if (typeof unknown !== "object") return false;
  if (unknown === null) return false;
  if (Object.keys(unknown).length !== 2) return false;

  if (!("userId" in unknown)) return false;
  if (!("payload" in unknown)) return false;

  const c1 = unknown as { userId: unknown; payload: unknown };

  if (typeof c1.userId !== "string") return false;

  if (typeof c1.payload !== "object") return false;
  if (c1.payload === null) return false;
  if (Object.keys(c1.payload).length > 2) return false;

  for (const key in c1.payload) {
    if (key !== "username" && key !== "password") return false;
  }

  const c2 = c1 as {
    userId: string;
    payload: { username?: unknown; password?: unknown };
  };

  if ("password" in c2.payload && typeof c2.payload.password !== "string")
    return false;
  if ("username" in c2.payload && typeof c2.payload.username !== "string")
    return false;

  return true;
}

//Get User by ID
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  if (!validate(id)) return res.sendStatus(400);
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.send(user);
  } else {
    return res.status(410);
  }
});

app.get("/api/login", (req, res) => {
  if (!req.headers.authorization) return res.sendStatus(400);
  const buf = Buffer.from(req.headers.authorization.split(" ")[1], "base64");
  const [username, password] = buf.toString().split(":");
  const user = users.find((user) => user.username === username);
  if (!user || user.password !== password) return res.sendStatus(401);
  const secret = "Super Secret, please dont share. Code: " + v4();
  session.push({ user, secret });
  res.send(secret);
});

function isAuthorized(authHeader: string | undefined) {
  if (!authHeader) return false;
  const buf = Buffer.from(authHeader.split(" ")[1], "base64");
  const [username, password] = buf.toString().split(":");
  const user = users.find((user) => user.username === username);
  if (!user || user.password !== password) return false;
  return true;
}

app.listen(3005);
