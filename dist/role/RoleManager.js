var RoleType = require('RoleType');
var Role = require('Role');
var RoleHarvester = require('RoleHarvester');

function RoleManager(mite)
{
  this.mite = mite;
}

RoleManager.prototype.evaluate = function()
{
	var totalRoles = this.mite.availableRoles.length;

	var activeRole = this.mite.activeRole;
	var nextRole;
	if (totalRoles === 1)
	{
		nextRole = this.mite.availableRoles[0];
	}
	else if (this.mite.availableRoles.length > 1)
	{
		var roles = this.mite.availableRoles;
	}

  return nextRole;
};

module.exports = RoleManager;
