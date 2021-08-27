"Objects contain key-value pairs of information."
"Objects contain properties."

"A 'key' is used to access 'value'."
"Another term for 'key' is 'property name'."
"Another term for 'value' is 'property value'."

"Plain Old JavaScript Object, also known as a 'POJO'."
let userCeleste = {
    id: 123213,
    username: "celeste57",
    email: "celeste@kenzie.academy",
    phone: "1-888-888-8888",
    birthDate: "1998-04-12",
    isActive: true,
    "eye color": null,
    pets: [
        "Hamster",
        "Donkey",
        "Marmoset",
    ],
    sayHi: function sayHi (name) {
        console.log(`Hello there, ${name}!`)
    },
}

console.log(userCeleste)

let petsAsArray = [
    "Parakeet", // 0
    "Chihuahua", // 1
]

let petsAsObject = {
    "0": "Parakeet",
    "1": "Chihuahua",
    "length": 2,
}


let programmingAuthors = [
  {
    name: "Eric A. Meyer",
    careerStateDate: 1993,
    expertSubjects: ['HTML', 'CSS', 'Web Standards'],
    books: [
      "Design For Real Life",
      "Cascading Style Sheets: The Definitive Guide",
      "Smashing CSS",
      "Eric Meyer on CSS and More Eric Meyer on CSS",
      "CSS2.0 Programmer's Reference",
      "CSS Web Site Design",
    ],
  },
  {
    name: "Kyle Simpson (a.k.a. Getify)",
    careerStateDate: null,
    expertSubjects: ["JavaScript", "CSS", "HTML", "React.js", "Node.js"],
    books: ["You Don't Know JS", "You Don't Know JS Yet", "You Don't Know Closures"],
  }
]


function getMovement (direction) {
  const directions = {
    right: [+1, 0],
    left:  [-1, 0],
    down:  [0, +1],
    up:    [0, -1],
  }
  
  return directions[direction]
}

getMovement("left")