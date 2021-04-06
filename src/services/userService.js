export const userService = {
  getUserById,
};

const gUsers = [
  {
    _id: 'u101',
    name: 'Chen Sella',
    coins: 100,
    moves: [],
  },
];

function getUserById(id) {
  return new Promise((resolve, reject) => {
    const user = gUsers.find((user) => user._id === id);
    user ? resolve(user) : reject(`User id ${id} not found!`);
  });
}
