var MemoryManager = require('MemoryManager');

Room.prototype.analyse = function(phase)
{
  if (phase === 1)
  {
    var energySources = this.find(FIND_SOURCES);
    var mineralSources = this.find(FIND_MINERALS);

    var energySourceIds = [];
    for (var energySource in energySources)
    {
      energySourceIds.push(energySource.id);
    }

    var mineralSourceIds = [];
    for (var mineralSource in mineralSources)
    {
      mineralSourceIds.push(energySource.id);
    }

    MemoryManager.saveRoomSources(energySourceIds);
    MemoryManager.saveRoomMinerals(mineralSourceIds);
  } else if (phase === 2)
  {

  }
};
