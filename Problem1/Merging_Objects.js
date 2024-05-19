// Merging Objects:

let mergingObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }
