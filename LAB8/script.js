//1
// Node constructor
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList constructor
function LinkedList() {
    this.head = null;
    this.size = 0;
}

// Method to add elements to the LinkedList
LinkedList.prototype.add = function(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
};

// Method to remove an element from the LinkedList
LinkedList.prototype.remove = function(data) {
    let current = this.head;
    let prev = null;

    while (current) {
        if (current.data === data) {
            if (prev === null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return;
        }
        prev = current;
        current = current.next;
    }
};

// Method to print the LinkedList
LinkedList.prototype.print = function() {
    let current = this.head;
    let result = "LinkedList{";
    while (current) {
        result += current.data;
        if (current.next) {
            result += ",";
        }
        current = current.next;
    }
    result += "}";
    console.log(result);
};

// Example usage:
let linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);

linkedlist.print(); // Expected Result: LinkedList{1,2,3}

linkedlist.remove(2);

linkedlist.print(); // Expected Result: LinkedList{1,3}





//2***************************************************************
const student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
    },
    computeAverageGrade() {
    return this.grades.reduce((sum, current, index, array) => sum + current
   / array.length, 0);
    }
    }
    const stu1 = Object.create(student);
    stu1.firstName = 'John';
    stu1.lastName = 'Smith';
    stu1.inputNewGrade(88);
    stu1.inputNewGrade(98);
    stu1.inputNewGrade(86);
    stu1.inputNewGrade(80);
    const stu2 = Object.create(student);
    stu2.firstName = 'John2';
    stu2.lastName = 'Smith2';
    stu2.inputNewGrade(85);
    stu2.inputNewGrade(95);
    stu2.inputNewGrade(85);
    stu2.inputNewGrade(70);
    const students = [stu1, stu2];
    const result = students.reduce((average, stu, index, array) => average + stu.
    computeAverageGrade() / array.length, 0);
    console.log(result);
    