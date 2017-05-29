var RoleTypeBinding = require('RoleTypeBinding');
var RoleHarvester = require('RoleHarvester');
var Priority = require('Priority');

var MemoryManager = function() { };

MemoryManager.saveCreep = function(creep)
{
  Memory.creeps[creep.name].ActiveRole =
  {
    'Properties' : creep.activeRole.serialize()
  };
};

MemoryManager.initializeCreep = function(creep)
{
  var properties = creep.memory.ActiveRole.Properties;
  var roleType = properties[0];
  var role = RoleTypeBinding[roleType]();
  role.deserialize(properties);

  creep.initialize(undefined, role, [new RoleHarvester(creep, Priority.PRIMARY)]);
};

module.exports = MemoryManager;
