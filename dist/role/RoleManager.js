function RoleManager(mite)
{
  this.mite = mite;
}

RoleManager.prototype.evaluate = function()
{
  var roles = this.mite.availableRoles;
  return this.mite.activeRole;
};

module.exports = RoleManager;
