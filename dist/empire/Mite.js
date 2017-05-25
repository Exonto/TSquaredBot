var RoleManager = require('RoleManager');

var Mite = function(creep, availableRoles)
{
	this.creep = creep;
  this.roleManager = new RoleManager(this);
  this.availableRoles = availableRoles;
  this.activeRole = undefined;
};

Mite.prototype.update = function()
{
	this.activeRole = this.roleManager.evaluate();

	this.activeRole.execute();
};

Mite.prototype.toString = function()
{
	return '[Name: ' + this.creep.name + ', ActiveRole: ' + this.activeRole + ']';
};

module.exports = Mite;
