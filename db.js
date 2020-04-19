var User = function(id, name, email, roleId) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.roleId = roleId;
}

var Role = function(id, roleName) {
  this.id = id;
  this.roleName = roleName;
}

var users = [
  new User(1, 'user1', 'user1@gmail.com', 1),
  new User(2, 'user2', 'user2@gmail.com', 2),
  new User(3, 'user3', 'user3@gmail.com', 3),
  new User(4, 'user4', 'user4@gmail.com', 4)
]

var roles = [
  new Role(1, 'role1'),
  new Role(2, 'role2'),
  new Role(3, 'role3'),
  new Role(4, 'role4'),
]

module.exports = {
  users, roles
};