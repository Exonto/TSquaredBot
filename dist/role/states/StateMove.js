var State = require('State');

var StateMove = function(creep, role, target)
{
  State.call(this, StateType.MOVING, creep, role);

  this.target = target;
};

StateMove.prototype = Object.create(State.prototype);
StateMove.prototype.constructor = StateMove;

StateMove.prototype.execute = function()
{
  return this.creep.moveTo(this.target);
};

/**
 * This state is considered complete once the creep has reached its target
 * destination. To reach a room position, the creep must be on the specified
 * tile. To reach any room object, the creep must be adjacent to it.
 */
StateMove.prototype.isComplete = function()
{
  if (this.target instanceof RoomPosition)
  {
    return this.creep.pos.x === this.target.x &&
           this.creep.pos.y === this.target.y;
  }
  else
  {
    return this.creep.pos.isNearTo(this.target.pos);
  }
};

StateMove.prototype.resolveType = function()
{

};

module.exports = StateMove;
