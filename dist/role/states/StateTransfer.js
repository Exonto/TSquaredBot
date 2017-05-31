var State = require('State');
var StateType = require('StateType');
var Serializer = require('Serializer');

var StateTransfer = function(creep, role, target)
{
  State.call(this, creep, role, StateType.TRANSFERRING.GENERIC, 'Transferring');

  this.target = target;
};

StateTransfer.prototype = Object.create(State.prototype);
StateTransfer.prototype.constructor = StateTransfer;

StateTransfer.prototype.execute = function()
{
  if (this.target instanceof StructureSpawn)
  {
    return this.creep.transfer(this.target, RESOURCE_ENERGY);
  }
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

StateTransfer.prototype.serialize = function()
{
  var properties = State.prototype.serialize.call(this);
  var idx = properties.length;

  // Will always transfer something with an ID
  properties[idx++] = Serializer.serializeObjectWithID(this.target);

  return properties;
};

StateTransfer.prototype.deserialize = function(properties)
{
  var idx = State.prototype.deserialize.call(this, properties);

  var targetProperty = properties[idx++];
  this.target = Serializer.deserializeObjectWithID(targetProperty);
};

module.exports = StateTransfer;
