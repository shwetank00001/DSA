const a = {
    name: "shwe",
    age: 32
}

Object.freeze(a)
a.name = "shwetank";
a.age = 26
console.log(a)