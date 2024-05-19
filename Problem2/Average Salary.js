// Average Salary:

let averageSalary= (employees) => {
    let sm = 0;
    count = 0
    for (let employee of employees){
        let {salary} = employee
        sm += salary
        count += 1
    }
    return Math.floor(sm/count)
    
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(averageSalary(employees)); // Output: 60000
  