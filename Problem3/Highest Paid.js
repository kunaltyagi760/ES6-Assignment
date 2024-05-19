// Highest Paid:

let highestPaid = (employees) => {
    let mx = 0
    let obj = {}

    for (let employee of employees){
        let {salary} = employee
        if (salary > mx){
            mx = salary
            obj = employee
        }
    }
    return obj
}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
