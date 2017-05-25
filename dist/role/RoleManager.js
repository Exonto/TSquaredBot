var RoleType = require('RoleType');
var Role = require('Role');
var RoleHarvester = require('RoleHarvester');

var RoleManager = function(mite)
{
  this.mite = mite;
};

RoleManager.prototype.evaluate = function()
{
	var nextRole;
	var roles = this.mite.availableRoles;

	if (roles.length == 1)  // only choice
	{
		nextRole = roles[0]
	}
	else  // > or < 1
	{
		// TODO: Make smart decision
		// * look at mite's colony's priorities
		// * look at mite's situation
	}

  return nextRole;
};

module.exports = RoleManager;
