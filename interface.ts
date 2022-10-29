interface User {
    name: string;
    id: number;
    age: number;
    email?: string;
}

let myUsers: Array<User> = new Array<User>();

// for (let i = 0; i < 10; i++) {
//     myUsers[i].name = "A";
//     myUsers[i].email = "A";
//     myUsers[i].id = 100 + i;
//     myUsers[i].age = 18 + Math.random() * 5;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`User n° ${i + 1} name: ${myUsers[i].name} id: ${myUsers[i].id} age: ${myUsers[i].age} and ${myUsers[i].email}`)
// }


// Object Destructuring
// It is about getting just the elements 
// that are actually needed and not all 
// the properties or the object itself
let { name: firName, age }: User = { name: "Aizen", id: 123, age: 21 };
console.log(firName, age);


// Array Destructuring
// It is basically the same thing
// but with arrays

let [user1, user2, ...restUsers]: User[] = [
    {
        name: "U1",
        id: 1,
        age: 10
    },
    {
        name: "U2",
        id: 2,
        age: 20
    },
    {
        name: "U3",
        id: 3,
        age: 21
    },
    {
        name: "U4",
        id: 4,
        age: 22
    }
]
console.log(user1);
console.log(user2);
console.log(restUsers);