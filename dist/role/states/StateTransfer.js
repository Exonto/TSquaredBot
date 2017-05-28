var State = require('State');

var StateTransfer = function(creep, role, target)
{
  State.call(this, StateType.TRANSFERING, creep, role);

  this.target = target;
};

StateTransfer.prototype = Object.create(State.prototype);
StateTransfer.prototype.constructor = StateTransfer;

StateTransfer.prototype.execute = function()
{
  return this.creep.transfer(this.target);
};

/**
 * This state is considered complete once it has emptied its inventory.
 */
StateTransfer.prototype.isComplete = function()
{
  return this.getCarrySum() <= 0;
};

StateTransfer.prototype.resolveType = function()
{

};

module.exports = StateTransfer;