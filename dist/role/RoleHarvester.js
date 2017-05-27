var Role = require('Role');
var RoleType = require('RoleType');
var Priority = require('Priority');

var RoleHarvester = function(creep, basePriority)
{
  // Inherits all of Role's properties
  Role.call(this, creep, RoleType.HARVESTER);

  this.basePriority = basePriority;
};

// Inherits all of Role's prototype functions
RoleHarvester.prototype = Object.create(Role.prototype);
// Sets the prototype constructor to the function
RoleHarvester.prototype.constructor = RoleHarvester;

Role.prototype.resolvePriority = function()
{

};

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
