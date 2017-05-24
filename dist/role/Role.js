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

var Role = function(type = RoleType.UNDEFINED)
{
	this.type = type;
};

Role.prototype.execute = function(state) { };

module.exports = Role;
