var State = require('State');
var StateType = require('StateType');

var StateNone = function(creep, role)
{
  State.call(this, creep, role, StateType.NONE, 'None');
};

StateNone.prototype = Object.create(State.prototype);
StateNone.prototype.constructor = StateNone;

StateNone.prototype.execute = function() { };

/**
 * Because this state's goal is to do nothing, it is considered to always be
 * complete.
 */
StateNone.prototype.isComplete = function()
{
  return true;
};

module.exports = StateNone;
