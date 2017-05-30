var State = require('State');
var StateType = require('StateType');

var StateTransfer = function(creep, role, target)
{
  State.call(this, creep, role, StateType.TRANSFERRING, 'Transferring');

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
  return this.creep.getCarrySum() <= 0;
};

StateTransfer.prototype.resolveType = function()
{

};

module.exports = StateTransfer;
