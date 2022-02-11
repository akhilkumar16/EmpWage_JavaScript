class EmployeePayroll
{
    //properties of class
    id;
    salary;
    //defining constructor of class using constructor keeyword
    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // getter and setter methods
    get name() { return this._name; }
    set name(name) { 
        console.log("Setting: " + name);  // To see the execution process
        this._name = name; 
    }
    //methid to return everything in string
    toString() {
        return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary;
    }
}
// Object for class using parameterized conbstructor
let empPayroll = new EmployeePayroll(1, "Mark", 30000);
console.log(empPayroll.toString());
// setting values to the properties of class
empPayroll.id=2;
empPayroll.name = "Virat";
empPayroll.salary = 50000;
console.log(empPayroll.toString());
//UC 13//
    class EmployeePayroll
    {
        //properties of class
        id;
        salary;
        gender;
        startDate;
        //defining constructor of class using constructor keeyword
        constructor(...params)
        {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
        // getter and setter methods
        get id() { return this._id; }
        set id(id){ this._id = id; }
        get name() { return this._name; }
        set name(name) { this._name = name; }
        get salary() { return this._salary; }
        set salary(salary) { this._salary = salary; 
        //methid to return everything in string
        toString() 
        {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = this.startDate === undefined ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary + ", " +
            "Gender = " + this.gender + ", StartDate = " + empDate;
        }
    }
}
    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    // setting values to the properties of class
    empPayroll.id=2;
    empPayroll.name = "Virat";
    console.log(empPayroll.toString());
    let newEmployeePayroll = new EmployeePayroll(1, "rohit", 40000, "M", new Date());
    console.log(newEmployeePayroll.toString());
    // UC 14//
console.log("\n*** UC14 ***");
{
    class EmployeePayroll
    {
        //properties of class
        id;
        salary;
        gender;
        startDate;
        //defining constructor of class using constructor keeyword
        constructor(...params)
        {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
        // getter and setter methods
        get id() { return this._id; }
        set id(id){ this._id = id; }

        get name() { return this._name; }
        set name(name) { 
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if (nameRegex.test(name))
                this._name = name;
            else throw 'Name is Incorrect!';
        }
        get salary() { return this._salary; }
        set salary(salary) { this._salary = salary; }
        //methid to return everything in string
        toString() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = !this.startDate ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary + ", " +
            "Gender = " + this.gender + ", StartDate = " + empDate;
        }
    }
    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    empPayroll.id=2;
    try {
        empPayroll.name = "Virat";
        console.log(empPayroll.toString());
    }
    catch (e) {
        console.error(e);
    }
    let newEmployeePayroll = new EmployeePayroll(1, "rohit", 40000, "M", new Date());
    console.log(newEmployeePayroll.toString());    
}