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

RoleHarvester.prototype.resolvePriority = function()
{
  var spawn = Game.spawns['Spawn1'];
  var source = this.creep.room.find(FIND_SOURCES)[0];
  var distance = source.pos.getRangeTo(this.creep.pos);

  return (1/distance) * this.basePriority;
};

RoleHarvester.prototype.resolveState = function()
{
  
};

RoleHarvester.prototype.execute = function(state = undefined)
{

  var spawn = Game.spawns['Spawn1'];
  var source = this.creep.room.find(FIND_SOURCES)[0];
  if (_.sum(this.creep.carry) < this.creep.carryCapacity)
	{
		if (this.creep.harvest(source) == ERR_NOT_IN_RANGE)
		{
			this.creep.moveTo(source);
		}
	}
	else
	{
		if (this.creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
		{
			this.creep.moveTo(spawn);
		}
	}
};

module.exports = RoleHarvester;
