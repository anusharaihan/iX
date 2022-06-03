
class Person{
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getFullName(middleName){
        return this.firstName + " " + middleName + " " + this.lastName;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, dob, phone, membership){
        // when we instantiate a customer we want to call the person constructor through super()
        super(firstName, lastName, dob);
 
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
 }

//const james = new Person('James', 'Doe');
//console.log(james.getFullName());

 const john = new Customer('John', 'Doe', '23/11/1993', '011 425 6536', 'Premium');
 john.firstName = "Mike";
 console.log(john.getFullName("Turner"));

 //console.log(john);
 console.log(Customer.getMembershipCost());

