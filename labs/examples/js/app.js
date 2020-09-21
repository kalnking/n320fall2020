class Person {
  constructor(first, last, age, gender, grade) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.grade = grade;
  }
}

class Student extends Person {
  constructor(first, last, age, grade) {
    super(first, last, age, grade);
  }
}
