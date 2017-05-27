
/**
 * Priority levels are used as a multiplier for when roles attempt to resolvePriority
 * their priority level.
 * @type {Object}
 */
var Priority =
{
  CRITICAL: 21.0,
  SERIOUS: 18.0,
  PRIMARY: 15.0,
  SECONDARY: 12.0,
  TERTIARY: 9.0,
  LOW: 6.0,
  UNIMPORTANT: 3.0,
  BACKUP: 1.0,
  NONE: 0.0
};

module.exports = Priority;
