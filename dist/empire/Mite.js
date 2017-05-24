var RoleManager = require('RoleManager');

function Mite() = 
{
  this.availableRoles = [];
  this.activeRole;
  this.roleManager = new RoleManager(this);
}

module.exports = Mite;