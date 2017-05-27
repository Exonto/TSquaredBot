
var State = function(type, creep, role)
{
  this.type = type;
  this.creep = creep;
  this.role = role;
};

State.prototype.execute = function() { };

State.prototype.isComplete = function() { };
