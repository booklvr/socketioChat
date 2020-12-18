import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcryptSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jonh@example.com',
    password: bcryptSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcryptSync('123456', 10),
  },
];

export default users;
