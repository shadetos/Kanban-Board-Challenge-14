import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'WestWood', password: 'password' },
    { username: 'SunnySideUp', password: 'password' },
    { username: 'WhatWhat', password: 'password' },
  ], { individualHooks: true });
};
