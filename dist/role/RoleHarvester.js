var Role = require('Role');
var RoleType = require('RoleType');
var StateType = require('StateType');
var Priority = require('Priority');

var RoleHarvester = function(creep, basePriority)
{
  // Inherits all of Role's properties
  Role.call(this, creep, RoleType.HARVESTER, []);

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

/**
 * Every role has different states it may be in. This will determine what state
 * the role should be in during this particular tick.
 * @return {State} The state which was chosen.
 */
RoleHarvester.prototype.resolveState = function()
{
  var resolvedState = this.activeState;
  if (this.activeState.isCompleted())
  {
    var stateType = this.activeState.type;
    if (stateType === StateType.MOVING.RESOURCE)
    {
      resolvedState = new StateHarvest(this.creep, this, this.activeState.source);
    }
    else if (stateType === StateType.BUILDING.STRUCTURE.SPAWN)
    {
      resolvedState = new StateTransfer(this.creep, this, this.activeState.spawn);
    }
    else if (stateType === StateType.HARVESTING)
    {
      var resolvedSpawn = this.resolveSpawn();
      resolvedState = new StateMove(this.creep, this, this.activeState, resolvedSpawn);
    }
    else if (stateType === StateType.TRANSFERRING || stateType === StateType.NONE)
    {
      var closestEnergySource = this.creep.room.find(FIND_SOURCES)[0];
      resolvedState = new StateMove(this.creep, this, closestEnergySource);
    }
  }

  return resolvedState;
};

RoleHarvester.prototype.resolveSpawn = function()
{
  var dominantSpawn;
  var dominantSpawnWeight;

  var creepRoom = this.creep.room;
  var weight;
  var spawn;
  for (var spawnName in creepRoom.spawns)
  {
    spawn = creepRoom.spawns[spawnName];
    var distance = this.creep.getRangeTo(spawn);

    weight = spawn.energy / (distance);

    if (weight > dominantSpawnWeight)
    {
      dominantSpawn = spawn;
      dominantSpawnWeight = weight;
    }
  }

  return spawn;
};

RoleHarvester.prototype.execute = function(state = undefined)
{
  this.activeState = (state !== undefined) ? (this.resolveState()) : (state);
  this.activeState.execute();
};

module.exports = RoleHarvester;
