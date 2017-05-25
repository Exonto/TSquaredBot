
/**
 * Room manager constructor.
 */
var RoomManage = function()
{
	this.allRooms = [];
	this.ownedRooms = [];
	this.unownedRooms = [];
}

/**
 * Resets all previous data being stored.
 */
RoomManager.prototype._reset = function()
{
	this.allRooms.length = 0;
	this.ownedRooms.length = 0;
	this.unownedRooms.length = 0;
};

/**
 * This will update all room data and cache it.
 * @param  {object<string,Rooms>} rooms The rooms to be considered in the update.
 */
RoomManager.prototype.update = function(rooms)
{
	// Reset all previous data now being updated
	this._reset();

	// Loops through every room name hash key
	for (var roomName in rooms)
	{
		var room = rooms[roomName];
		this.allRooms.push(room);

		if (room.controller.my)
		{
			this.ownedRooms.push(room);
		}
		else
		{
			this.unownedRooms.push(room);
		}
	}
};

module.exports = RoomManager;
