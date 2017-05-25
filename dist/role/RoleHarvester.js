var Role = require('Role');
var RoleType = require('RoleType');

var RoleHarvester = function()
{
	// Inherits all of Role's properties
	Role.call(this, RoleType.HARVESTER);
};

// Inherits all of Role's prototype functions
RoleHarvester.prototype = Object.create(Role.prototype);
// Sets the prototype constructor to the function
RoleHarvester.prototype.constructor = RoleHarvester;

RoleHarvester.prototype.execute = function(state = undefined)
{
	if (state !== undefined)
	{
		this.activeState = state;
	}
	else
	{
		// Continue with same state
	}
};

module.exports = RoleHarvester;
