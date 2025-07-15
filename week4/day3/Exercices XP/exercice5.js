class Dog {
  constructor(name) {
    this.name = name;
  }
};

 // 1 :  Incorrect – You must call super() before using this. This will throw a ReferenceError
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};


  // 2 : Correct – super(name) correctly calls the parent constructor before using this.
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

 // 3 :  Incorrect – name is not defined in the parameters. This causes an undefined error.
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

  // 4 : Incorrect – Again, using this before calling super() causes a ReferenceError.
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};