var RoleManager = require('RoleManager');

function Mite()
{
  this.roleManager = new RoleManager(this);
  this.availableRoles = [];
  this.activeRole = undefined;
}

module.exports = Mite;
