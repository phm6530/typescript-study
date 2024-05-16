interface greetable {
  name: string;
  method: () => void;
}

const obj: greetable = {
  name: "hhh",
  method: function () {
    console.log(this.name);
  },
};

obj.method();
