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
 * It should only be called once immediately after having been set to spawn.
 * @param  {Colony} colony         This defines the Colony or 'room' this creep currently belongs to
 * @param  {Role[]} availableRoles These are the all the different roles the creep may employ.
 */
Creep.prototype.initialize = function(colony, availableRoles)
{
	if (this._initialized) console.log('ERROR: Cannot initialize an already initialized creep.');

	this.colony = colony;
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

	this.activeRole = this.resolveDominantRole();
	this.activeRole.execute();

	return this.activeRole;
};

Creep.prototype.resolveDominantRole = function()
{
	return undefined;
};

Creep.prototype.toString = function()
{
	return '[Name: ' + this.name + ', ActiveRole: ' + this.activeRole + ']';
};
