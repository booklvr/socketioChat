<<<<<<< HEAD
import bcrypt from 'bcryptjs';
=======
import bcrypt from 'bcryptjs'
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
<<<<<<< HEAD
    password: bcryptSync('123456', 10),
=======
    password: bcrypt.hashSync('123456', 10),
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
    isAdmin: true,
  },
  {
    name: 'John Doe',
<<<<<<< HEAD
    email: 'jonh@example.com',
    password: bcryptSync('123456', 10),
=======
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
<<<<<<< HEAD
    password: bcryptSync('123456', 10),
  },
];

export default users;
=======
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
>>>>>>> 1f3e33b4c3938e50c0d1b156a88b0493dbbab811
