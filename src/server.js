const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: "123 Main St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    address: "456 Maple St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar5.jpg",
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    age: 40,
    address: "789 Elm St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar5.jpg",
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    age: 35,
    address: "101 Pine St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar4.jpg",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Wilson",
    age: 50,
    address: "202 Oak St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
  {
    id: 6,
    firstName: "Sarah",
    lastName: "Miller",
    age: 28,
    address: "303 Birch St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar5.jpg",
  },
  {
    id: 7,
    firstName: "Chris",
    lastName: "Anderson",
    age: 32,
    address: "404 Cedar St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar3.jpg",
  },
  {
    id: 8,
    firstName: "Jessica",
    lastName: "Taylor",
    age: 27,
    address: "505 Walnut St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
  },
  {
    id: 9,
    firstName: "Matthew",
    lastName: "Thomas",
    age: 45,
    address: "606 Ash St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar1.jpg",
  },
  {
    id: 10,
    firstName: "Laura",
    lastName: "Brown",
    age: 29,
    address: "707 Spruce St, Anytown, USA",
    avatar: "https://cdn.quasar.dev/img/avatar6.jpg",
  },
];

app.get("/users", (req, res) => {
  res.json({ users });
});

app.listen(port, () => {
  console.log(`Fake API server is running at http://localhost:${port}`);
});
