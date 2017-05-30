var State = require('State');
var StateType = require('StateType');
var Serializer = require('Serializer');

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

  // Will always harvest something with an ID
  properties[idx++] = Serializer.serializeObjectWithID(this.target);

  return properties;
};

StateHarvest.prototype.deserialize = function(properties)
{
  var idx = State.prototype.deserialize.call(this, properties);

  var targetProperty = properties[idx++];
  this.target = Serializer.deserializeObjectWithID(targetProperty);
};

module.exports = StateHarvest;
