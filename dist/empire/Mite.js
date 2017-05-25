var RoleManager = require('RoleManager');

var Mite = function(colony, creep, availableRoles)
{
  this.colony = colony
	this.creep = creep;
  this.availableRoles = availableRoles;
  this.activeRole = undefined;
  this.roleManager = new RoleManager(this);
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
