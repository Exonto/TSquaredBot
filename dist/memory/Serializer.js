
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

Serializer.serializeRoomPos = function(pos)
{
  return pos.x + ' ' + pos.y ;
};

Serializer.serializeRoomPositions = function(positions)
{
  var posSerializedArr = [];

  for (var posIdx in positions)
  {
    posSerializedArr.push(Serializer.serializeRoomPos(positions[posIdx]));
  }

  return posSerializedArr;
};

module.exports = Serializer;
