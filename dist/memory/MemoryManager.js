var RoleTypeBinding = require('RoleTypeBinding');
var RoleHarvester = require('RoleHarvester');
var Priority = require('Priority');

var MemoryManager = function() { };

MemoryManager.saveCreep = function(creep)
{
  creep.memory.ActiveRole =
  {
    'Properties' : creep.activeRole.serialize()
  };

  var rolesJson = {};
  // Serializes every role individually
  for (var roleIdx in creep.availableRoles)
  {
    var role = creep.availableRoles[roleIdx];

    rolesJson[role.type] = role.serialize();
  }
  creep.memory.AvailableRoles = rolesJson;
};

MemoryManager.initializeCreep = function(creep)
{
  var properties = MemoryManager.getActiveRoleProperties(creep);
  var roleType = properties[0];
  var role = RoleTypeBinding[roleType](creep);
  role.deserialize(properties);

  var availableRoles = MemoryManager._deserializeAvailableRoles(creep);

  for (var roleTypeIdx in availableRoles)
  {
    var r = availableRoles[roleTypeIdx];
  }

  creep.initialize(undefined, availableRoles, role);
};

MemoryManager._deserializeAvailableRoles = function(creep)
{
  var availableRoles = creep.memory.AvailableRoles;
  var deserialized = [];
  var count = 0; // The true number of roles that have been processed
  for (var roleTypeIdx in availableRoles)
  {
    var roleType = availableRoles[roleTypeIdx][0];
    var properties = MemoryManager.getAvailableRoleProperties(creep, roleType);
    var role = RoleTypeBinding[roleType](creep);
    role.deserialize(properties);

    deserialized[count++] = role;
  }

  return deserialized;
};

MemoryManager.creepExists = function(creep)
{
  return Memory.creeps[creep.name] !== undefined;
};

MemoryManager.getActiveRoleProperties = function(creep)
{
  return Memory.creeps[creep.name].ActiveRole.Properties;
};

MemoryManager.getAvailableRoleProperties = function(creep, roleType)
{
  return Memory.creeps[creep.name].AvailableRoles[roleType];
};

module.exports = MemoryManager;
