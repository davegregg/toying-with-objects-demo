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

let petsAsObject