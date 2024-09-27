// Import & Export //////////
// import def from "./util.js";
// import { abc as content, apiKey } from "./util.js";
// import * as util from "./util.js";

// console.log(def);
// console.log(content);
// console.log(apiKey);
// console.log(util.default);
// Import & Export //////////

// Function /////////////
// function greetUser(userName, message = "Hello!!!!") {
//   // console.log(userName);
//   // console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// console.log(greetUser("Jose L Roman"));
// console.log(greetUser("Manuel", "What's up?"));

// export default (userName, message) => {
//   console.log(`User: ${userName} says: ${message}`);
// };

// import logMessage from "./util";
// logMessage("JohnDoe", "Hello, this is a test message!");
// Function /////////////

// Object /////////////
// const user = {
//   name: "Max",
//   age: 23,
//   greet() {
//     console.log("Username: " + this.name);
//     console.log("User age: " + this.age);
//     console.log("Greeting: Hello!!!");
//   },
// };

// console.log("Username: " + user.name);
// console.log("User age: " + user.age);
// console.log(user.greet());
// Object /////////////

// Class ////////////
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();
// Class ////////////

// Arrays and Methods /////////////
// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[2]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === "Working";
// });

// const index = hobbies.findIndex((item) => item === "Cooking");

// console.log(index);

// let editedHobbies = hobbies.map((item) => item + "!");
// let editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);
// Arrays and Methods /////////////

// Destructuring //////////
// const userNameData = ['Jose', 'Roman']
// const firstName = userNameData[0]
// const lastName = userNameData[1]

// const [firstName, lastName] = ["Jose", "Roman"];
// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };
// console.log(userName);
// console.log(age);
// Destructuring //////////

// Spread Operator /////////////
// const hobbies = ["Sports", "Cooking", "Reading"];
// const newHobbies = ["Working"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "Max",
//   age: 34,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };
// console.log(extendedUser);
// Spread Operator /////////////

// Control Structure: controls which code is executed ///////
// const password = prompt("Your Password");
// let password

// if (password === "Hello") {
//   console.log("Hello works!");
// }
// else if(password === "Something"){
//   console.log('Something works!')
//}
// const hobbies = ["Sports", "Cooking", "Reading"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }
// Control Structure: controls which code is executed ////////

// Functions as values ///////////
function handleTimeout() {
  console.log("Time out...1...!");
}

const handleTimeout2 = () => {
  console.log("Time out...2...!");
};
setTimeout(handleTimeout, 3000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("Time out...3...!");
}, 3000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => console.log("Hi Norman!!!"));
// Functions as values ///////////
