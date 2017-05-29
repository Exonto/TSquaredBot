/**
 * This is an extension of the native {Creep} prototype provided by the screeps
 * API.
 */

Creep.prototype._initialized = false;

Creep.prototype.colony = undefined;
Creep.prototype.availableRoles = undefined;
Creep.prototype.activeRole = undefined;

/**
 * This will initialize any added properties which should be defined.
 * It should only be called once per tick by the MemoryManager.
 * @param  {Colony} colony         This defines the Colony or 'room' this creep currently belongs to
 * @param  {Role} activeRole       This defines the creep's current role
 * @param  {Role[]} availableRoles These are the all the different roles the creep may employ.
 */
Creep.prototype.initialize = function(colony, availableRoles, activeRole = undefined)
{
  if (this._initialized) console.log('ERROR: Cannot initialize an already initialized creep.');

  this.colony = colony;
  this.activeRole = activeRole;
  this.availableRoles = availableRoles;

  this._initialized = true;
};

/**
 * This will update both the creep's logical state of being as well as perform
 * its designated actions for this tick.
 * @return {Role} Returns the role this creep chose as its active.
 */
Creep.prototype.update = function()
{
  // Do nothing if still spawning
  if (this.spawning) return;
  if (this.availableRoles === undefined || this.availableRoles.length === 0)
  {
    console.log('ERROR: This creep has no available roles to choose from. Creep: ' + this.creep);
    return;
  }

  this.activeRole = this.resolveDominantRole();
  this.activeRole.basePriority--;
  //this.activeRole.execute(this.activeRole.resolveState());

  return this.activeRole;
};

Creep.prototype.resolveDominantRole = function()
{
  var dominantRole;
  for (var roleIdx in this.availableRoles)
  {
    var role = this.availableRoles[roleIdx];
    var priority = role.resolvePriority();
    if (dominantRole === undefined || priority > dominantRole)
    {
      dominantRole = role;
    }
  }

  return dominantRole;
};

Creep.prototype.getCarrySum = function()
{
  return _.sum(this.carry);
};

Creep.prototype.toString = function()
{
  return '[Name: ' + this.name + ', ActiveRole: ' + this.activeRole + ']';
};
