var Colony = function(empire, id, room, mites) =
{
  this.empire = empire
  this.id = id
  this.room = room
  this.controller = room.controller
  this.spawners = []
  this.mites = mites
};

Colony.prototype.update = function()
{
  // Spawn if you can (dumby action)
  for (var spawn in this.spawners)
  {
    // TODO: hard coded!
    if (spawn.canCreateCreep([WORK,CARRY,MOVE], this.id + "Harvester") == OK)
    {
      spawn.createCreep([WORK,CARRY,MOVE], this.id + "Harvester")
    }
  }
};

modules.exports = Colony;