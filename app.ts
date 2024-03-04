const person: {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string]
} = { 
   // const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.hobbies.map(hobby => hobby));

for ( const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}