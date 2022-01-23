import { v4 as createId } from "uuid";
//npm install uuid

/* const user = { 
    username: string, 
    email: string, id: 
    string, 
    password: string }; 
*/

const users = [
  {
    username: "Kevin",
    email: "kevin@example.com",
    id: createId(),
    password: "password",
  },
  {
    username: "Simona",
    email: "simona@example.com",
    id: createId(),
    password: "password",
  },
];

export const authenticateUser = (username, password) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

export const createUser = (username, password, email) => {
    if(users.find(user => user.username === username)) return null;
    const newUser = {username,password, email, id: createId()}
    users.push(newUser);
    return newUser
}
