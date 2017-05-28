
/**
 * A state represents a game object's state of being.
 *
 * Creeps will always be in exactly one state at a time even if that state is
 * 'doing nothing'. States define, specifically, what a creep or other game
 * object is doing during any given tick. They are used by roles to form an
 * intelligent organization of actions by chaining them together and switching
 * between various states. This allows roles to act as the brain of a creep or
 * other game object which then dictate the creep's current state.
 * @param  {StateType} type  A state type is a simple way to identify one state
 *                           from another.
 * @param  {Creep} creep The creep to which this state belongs.
 * @param  {Role} role  The role to which this state belongs.
 */
var State = function(type, creep, role)
{
  this.type = type;
  this.creep = creep;
  this.role = role;
};

State.prototype.execute = function() { };

State.prototype.isComplete = function() { };

/**
 * While every state is assigned a default state type, the state's type can
 * potentially be made more specific that its default value. By making a
 * state's type more specific, it gives more information about itself which
 * can easily be checked against.
 * @return {Type} Either its default type or a more specific version of its
 *                its default type
 */
State.prototype.resolveType = function() { };

module.exports = State;
