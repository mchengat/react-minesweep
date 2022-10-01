"use strict";

// type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;
var perms = ['admin', 'user'];
var user = {
  name: 'Nick',
  surname: 'Ovh',
  age: 30,
  isAdmin: true,
  account: 100,
  permissions: ['admin']
};
var DepsForPerms = {
  admin: {
    depName: 'security',
    level: 10
  },
  user: {
    depName: 'sales',
    level: 5
  },
  manager: {
    depName: 'sales',
    level: 10
  }
};

function getFirst(arr) {
  return arr[0];
}