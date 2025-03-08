class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`나는 ${this.name}이고, ${this.age}살이야. 반가워`);
  }
}

const user1 = new Human("최동일", 30);
user1.introduce();
