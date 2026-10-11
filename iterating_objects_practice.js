const student = {
    name: "Anu",
    age: 20,
    city: "Chennai",
};
const keys = Object.keys(student);
console.log(Object.entries(student)[2]);

console.log(keys);
const rectangle = {
    width: 100,
    height: 50,
    color: "red",
};
console.log(Object.keys(rectangle)[0]);
console.log(Object.values(rectangle)[2]);

const numbers = [10, 20, 30];

for (const n of numbers) {
    console.log(n);
}

const word = "hello";

for (const character of word) {
    console.log(character);
}
const s = ["apple", "orange"];
for (const i in s) {
    console.log(i);
}
