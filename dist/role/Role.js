var RoleType = require('RoleType');
var Priority = require('Priority');
var StateType = require('StateType');
var StateNone = require('StateNone');

/**
 * A role defines a set list of actions (aka RoleStates) which a mite may perform.
 *
 * Mites who are given a role must set that role's priority in order to rank
 * that role against that mite's other assigned roles.
 *
 * RoleStates are the actions available to a role which allow it to achieve
 * its ultimate goal, whatever that may be.
 * @param {RoleType} [type=RoleType.UNDEFINED] The role's unique ID
 */
var Role = function(creep, type = RoleType.UNDEFINED, states = [])
{
  this.creep = creep;
  this.type = type;
  this.states = states;
  this.activeState = new StateNone(this.creep, this);

  // Each creep assigns its roles a base priority level which is used to
  // differentiate one role from another in terms of their importance.
  this.basePriority = Priority.NONE;
};

/**
 * This determines how important this role thinks it is given its creep's
 * current context.
 *
 * This priority level is represented by a floating point value betwen negative
 * and positive infinity. Whichever role resolves itself as having the highest
 * priority will be chosen as the creep's active role.
 * @return number The floating point value representing the role's current priority level
 */
Role.prototype.resolvePriority = function() { };

Role.prototype.execute = function(state = undefined) { };

Role.prototype.serialize = function()
{
  var properties = [];
  var idx = 0;

  properties[idx++] = this.type;
  properties[idx++] = this.basePriority;

  return properties;
};

Role.prototype.deserialize = function(properties)
{
  var idx = 0;

  this.type = properties[idx++];
  this.basePriority = properties[idx++];

  return idx;
};

Role.prototype.toString = function()
{
  return '[RoleType: ' + Object.keys(RoleType)[this.type] + ', BasePriority: ' + this.basePriority + ', ActiveState: ' + this.activeState + ']';
};

module.exports = Role;
