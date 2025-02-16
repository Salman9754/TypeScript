interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User): User {
  console.log(user);
  return user;
}

const newUser: User = {
  id: 5,
  name: "Salman",
  email: "salman@email.com",
  isActive: true,
};
createUser(newUser);
