var RoleType = require('RoleType');
var Role = require('Role');
var RoleHarvester = require('RoleHarvester');
var CreepExtension = require('CreepExtension');
var Priority = require('Priority');
var MemoryManager = require('MemoryManager');

if (Game.creeps.length === 0)
{
  Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], 'Bug');
}
module.exports.loop = function()
{
  for (var name in Game.creeps)
  {
    var creep = Game.creeps[name];
    if (creep.spawning === false)
    {
      if (MemoryManager.creepExists(creep))
      {
        MemoryManager.initializeCreep(creep);
      }
      else
      {
        creep.initialize(undefined, [new RoleHarvester(creep, Priority.PRIMARY)]);
      }

      creep.update();

      MemoryManager.saveCreep(creep);
    }
  }
};
