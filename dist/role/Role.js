var RoleType = require('RoleType');
var RoleState = require('RoleState');

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

var Role = function(type = RoleType.UNDEFINED, states = [], activeState = undefined)
{
	this.type = type;
	this.states = states;
	this.activeState = activeState;
};

Role.prototype.toString = function()
{
	return '[RoleType:' + this.type + ', ActiveState:' + this.activeState + ']';
};

Role.prototype.execute = function(state = undefined) { console.log('ERROR: The base class \'Role\' should not be executing.') };

module.exports = Role;
