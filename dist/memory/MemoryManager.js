var RoleTypeBinding = require('RoleTypeBinding');
var RoleHarvester = require('RoleHarvester');
var Priority = require('Priority');

var MemoryManager = function() { };

/**
 * Serializes and saves a creep into memory.
 * @param  {Creep} creep The creep being saved
 */
MemoryManager.saveCreep = function(creep)
{
  creep.memory.ActiveRole =
  {
    'Properties' : creep.activeRole.serialize()
  };

  creep.memory.AvailableRoles = _serializeAvailableRoles();
};

/**
 * A creep must be initialized every tick in order to retrieve information
 * about itself from memory.
 * @param  {Creep} creep The creep being initialized
 */
MemoryManager.initializeCreep = function(creep)
{
  var properties = MemoryManager.getActiveRoleProperties(creep);
  var roleType = properties[0];
  var role = RoleTypeBinding[roleType](creep);
  role.deserialize(properties);

  var availableRoles = MemoryManager._deserializeAvailableRoles(creep);

  creep.initialize(undefined, availableRoles, role);
};

MemoryManager._deserializeAvailableRoles = function(creep)
{
  // Stores a JSON list of role type numbers and properties
  var availableRoles = creep.memory.AvailableRoles;

  // Will contain every role which has been deserialized
  var deserialized = [];

  // The true number of roles that have been processed
  var count = 0;

  // Loops through every role type in availableRoles JSON
  for (var roleTypeIdx in availableRoles)
  {
    // The numerical role type retrieved by reading the role type property
    var roleType = availableRoles[roleTypeIdx][0];
    var properties = MemoryManager.getAvailableRoleProperties(creep, roleType);

    // Create the role corresponding to the role type and then deserialize that
    // role's properties
    var role = RoleTypeBinding[roleType](creep);
    role.deserialize(properties);

    deserialized[count++] = role;
  }

  return deserialized;
};

MemoryManager._serializeAvailableRoles = function(creep)
{
  var rolesJson = {};
  // Serializes every role individually
  for (var roleIdx in creep.availableRoles)
  {
    var role = creep.availableRoles[roleIdx];

    rolesJson[role.type] = role.serialize();
  }

  return rolesJson;
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
