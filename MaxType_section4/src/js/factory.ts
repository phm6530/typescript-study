// Factory Method
class User {
  constructor(public name: string, public role: string) {}

  static createAdmin(name: string) {
    return new User(name, "Admin");
  }
  static createGuest(name: string) {
    return new User(name, "Guest");
  }
}
const admin = User.createAdmin("test");
console.log(admin);

// Func Method
type UserObj = {
  name: string;
  role: string;
};

interface UserType {
  name?: string;
  role?: string;
  createAdmin: (name: string) => UserObj;
  createGuest: (name: string) => UserObj;
}

const UserFunc = (): UserType => {
  return {
    createAdmin: (name: string): UserObj => {
      return { name, role: "Admin" };
    },
    createGuest: (name: string): UserObj => {
      return { name, role: "Guest" };
    },
  };
};
