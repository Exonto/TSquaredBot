var State = require('State');

var StateHarvest = function(creep, role, target)
{
  State.call(this, StateType.HARVEST, creep, role);

  this.target = target;
};

StateHarvest.prototype = Object.create(State.prototype);
StateHarvest.prototype.constructor = StateHarvest;

StateHarvest.prototype.execute = function()
{
  var exitCode = this.creep.harvest(this.source);

  return exitCode;
};

/**
 * This state is considered complete once its carry capacity has been maxed out.
 */
StateHarvest.prototype.isComplete = function()
{
  return this.getCarrySum() >= this.carryCapacity;
};

StateHarvest.prototype.resolveType = function()
{

};

module.exports = StateHarvest;
