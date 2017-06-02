var MemoryManager = require('MemoryManager');

Room.prototype.analyse = function(phase)
{
  if (phase === 1)
  {
    var energySources = this.find(FIND_SOURCES);
    var mineralSources = this.find(FIND_MINERALS);

    var energySourceIds = [];
    for (let energySource in energySources)
    {
      energySourceIds.push(energySource.id);
    }

    var mineralSourceIds = [];
    for (let mineralSource in mineralSources)
    {
      mineralSourceIds.push(mineralSource.id);
    }

    MemoryManager.saveRoomSources(energySourceIds);
    MemoryManager.saveRoomMinerals(mineralSourceIds);
  }
  else if (phase === 2)
  {
    let energySources = this.find(FIND_SOURCES);
    let mineralSources = this.find(FIND_MINERALS);

    for (let energySourceIdx in energySources)
    {
      var energySource = energySources[energySourceIdx];
      MemoryManager.saveRoomSourceFaces(this, energySource.id, this.getOpenFaces(energySource.pos));
    }

    for (let mineralSourceIdx in mineralSources)
    {
      var mineralSource = mineralSources[mineralSourceIdx];
      MemoryManager.saveRoomMineralFaces(this, mineralSource.id, this.getOpenFaces(mineralSource.pos));
    }
  }
};

Room.prototype.getOpenFaces = function(pos)
{
  var openFaces = [];

  var adjacents = [];
  adjacents[0] = new RoomPosition(pos.x - 1, pos.y + 1, this.name);
  adjacents[1] = new RoomPosition(pos.x, pos.y + 1, this.name);
  adjacents[2] = new RoomPosition(pos.x + 1, pos.y + 1, this.name);
  adjacents[3] = new RoomPosition(pos.x + 1, pos.y, this.name);
  adjacents[4] = new RoomPosition(pos.x + 1, pos.y - 1, this.name);
  adjacents[5] = new RoomPosition(pos.x, pos.y - 1, this.name);
  adjacents[6] = new RoomPosition(pos.x - 1, pos.y - 1, this.name);
  adjacents[7] = new RoomPosition(pos.x - 1, pos.y, this.name);

  for (var adjacentIdx in adjacents)
  {
    var adjacent = adjacents[adjacentIdx];
    if (Game.map.getTerrainAt(adjacents[adjacent]) === 'plain')
    {
      openFaces.push(adjacent);
    }
  }

  return openFaces;
};

Room.prototype.toString = function()
{
  return "erm";
};
