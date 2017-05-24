var Role = require('Role');
var RoleType = require('RoleType');

var RoleHarvester = function(state)
{
	// Inherits all of Role's properties
	Role.call(this, RoleType.HARVESTER);

	this.state = state;
};

console.log(Role.prototype);

// Inherits all of Role's prototype functions
RoleHarvester.prototype = Object.create(Role.prototype);

// Sets the prototype constructor to the function
RoleHarvester.prototype.constructor = RoleHarvester;
