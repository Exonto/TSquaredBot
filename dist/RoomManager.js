var MemoryManager = require('MemoryManager');

var RoomManager = function() { };

RoomManager.analyse = function(room, phase)
{
  if (phase === 1)
  {
    var energySources = room.find(FIND_SOURCES);
    var mineralSources = room.find(FIND_MINERALS);

    var energySourceIds = [];
    for (let energySourceIdx in energySources)
    {
      energySourceIds.push(energySources[energySourceIdx].id);
    }

    var mineralSourceIds = [];
    for (let mineralSourceIdx in mineralSources)
    {
      mineralSourceIds.push(mineralSources[mineralSourceIdx].id);
    }

    MemoryManager.saveRoomSources(room, energySourceIds);
    MemoryManager.saveRoomMinerals(room, mineralSourceIds);
  }
  else if (phase === 2)
  {
    let energySources = room.find(FIND_SOURCES);
    let mineralSources = room.find(FIND_MINERALS);

    for (let energySourceIdx in energySources)
    {
      var energySource = energySources[energySourceIdx];
      MemoryManager.saveRoomSourceFaces(room, energySource.id, RoomManager.getOpenFaces(room, energySource.pos));
    }

    for (let mineralSourceIdx in mineralSources)
    {
      var mineralSource = mineralSources[mineralSourceIdx];
      MemoryManager.saveRoomMineralFaces(room, mineralSource.id, RoomManager.getOpenFaces(room, mineralSource.pos));
    }
  }
};

RoomManager.getOpenFaces = function(room, pos)
{
  var openFaces = [];

  var adjacents = [];
  adjacents[0] = new RoomPosition(pos.x - 1, pos.y + 1, room.name);
  adjacents[1] = new RoomPosition(pos.x, pos.y + 1, room.name);
  adjacents[2] = new RoomPosition(pos.x + 1, pos.y + 1, room.name);
  adjacents[3] = new RoomPosition(pos.x + 1, pos.y, room.name);
  adjacents[4] = new RoomPosition(pos.x + 1, pos.y - 1, room.name);
  adjacents[5] = new RoomPosition(pos.x, pos.y - 1, room.name);
  adjacents[6] = new RoomPosition(pos.x - 1, pos.y - 1, room.name);
  adjacents[7] = new RoomPosition(pos.x - 1, pos.y, room.name);

  for (var adjacentIdx in adjacents)
  {
    var adjacent = adjacents[adjacentIdx];
    var terrainAt = Game.map.getTerrainAt(adjacent);
    if (terrainAt === 'plain' || terrainAt === 'swamp')
    {
      openFaces.push(adjacent);
    }
  }

  console.log(openFaces.length);

  return openFaces;
};

module.exports = RoomManager;
