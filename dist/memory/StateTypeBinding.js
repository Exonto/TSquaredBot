var StateNone = require('StateNone');
var StateMove = require('StateMove');
var StateHarvest = require('StateHarvest');
var StateTransfer = require('StateTransfer');

var StateTypeBinding =
{
  0 : function(creep, role)
  {
    return new StateNone(creep, role);
  },
  1 : function(creep, role, target)
  {
    return new StateMove(creep, role, target);
  },
  2: function(creep, role, target)
  {
    return new StateHarvest(creep, role, target);
  },
  3: function(creep, role, target)
  {
    return new StateTransfer(creep, role, target);
  }
};

module.exports = StateTypeBinding;
