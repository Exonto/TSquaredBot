var RoomManager = require('RoomManager');
var RoleType = require('RoleType');
var Role = require('Role');
var RoleHarvester = require('RoleHarvester');
var Mite = require('Mite');

var roomManager = new RoomManager();

module.exports.loop = function()
{
	roomManager.update(Game.rooms);

	var spawns = Game.spawns;
	var creeps = Game.creeps;

	var totalCreeps = 0;
	for (var name in creeps)
	{
		++totalCreeps;

		var creep = creeps[name];
		var spawn = spawns['Spawn1'];
		var source = creep.room.find(FIND_SOURCES)[Math.floor(totalCreeps / 4)];

		if (_.sum(creep.carry) < creep.carryCapacity)
		{
			if (creep.harvest(source) == ERR_NOT_IN_RANGE)
			{
				creep.moveTo(source);
			}
		}
		else
		{
			if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
			{
				creep.moveTo(spawn);
			}
		}
	}

	for (var spawnName in spawns)
	{
		var spawner = spawns[spawnName];

		// The spawn will create new creeps if its energy exceeds 75% of its
		// max carryCapacity
		if (spawner.energy >= spawner.energyCapacity * .80)
		{
			spawner.createCreep([WORK,CARRY,MOVE,MOVE], 'Harvester' + totalCreeps);
		}
	}
};
