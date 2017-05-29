var RoleHarvester = require('RoleHarvester');

var RoleTypeBinding =
{
  1 : function(creep, basePriority)
  {
    return new RoleHarvester(creep, basePriority);
  }
};

module.exports = RoleTypeBinding;
