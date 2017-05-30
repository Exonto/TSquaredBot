var State = require('State');
var StateType = require('StateType');

var StateHarvest = function(creep, role, target)
{
  State.call(this, creep, role, StateType.HARVESTING, 'Harvesting');

  this.target = target;
};

StateHarvest.prototype = Object.create(State.prototype);
StateHarvest.prototype.constructor = StateHarvest;

StateHarvest.prototype.execute = function()
{
  return this.creep.harvest(this.target);
};

/**
 * This state is considered complete once its carry capacity has been maxed out.
 */
StateHarvest.prototype.isComplete = function()
{
  return this.creep.getCarrySum() >= this.creep.carryCapacity;
};

StateHarvest.prototype.resolveType = function()
{

};

StateHarvest.prototype.serialize = function()
{
  var properties = State.prototype.serialize.call(this);
  var idx = properties.length;

  return properties;
};

StateHarvest.prototype.deserialize = function(properties)
{
  var idx = Role.prototype.deserialize.call(this, properties);
};

module.exports = StateHarvest;
