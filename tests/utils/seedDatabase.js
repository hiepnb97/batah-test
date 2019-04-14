import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User'
// import models

const user1 = {
    input: {
      email: 'test@gmail.com',
    firstName: 'Ba',
    lastName: 'Tah',
    password: bcrypt.hashSync('123456'),
    avatar: `http://gravatar.com/avatar/testma@gmail.com?d=identicon`
    },
    user: undefined,
    jwt: undefined
}

module.exports = { user1};
