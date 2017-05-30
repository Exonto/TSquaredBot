
var Serializer = function() { };

Serializer.serializeObjectWithID = function(target)
{
  return { 'id' : target.id };
};

Serializer.deserializeObjectWithID = function(keyPair)
{
  return Game.getObjectById(keyPair.id);
};

Serializer.hasID = function(target)
{
  return (target instanceof Source ||
          target instanceof Mineral ||
          target instanceof Structure);
};

Serializer.isID = function(keyPair)
{
  return Object.keys(keyPair)[0] === 'id';
};

module.exports = Serializer;
