var StateType =
{
  NONE : 0,
  MOVING : 1,
  HARVESTING : 2,
  TRANSFERRING : 3,
  BUILDING :
  {
    CONTAINER  : 4.01,
    CONTROLLER : 4.02,
    EXTENSION  : 4.03,
    EXTRACTOR  : 4.04,
    KEEPERLAIR : 4.05,
    SPAWN      : 4.15
  },
  ATTACKING :
  {
    CREEP : 5.01,
    STRUCTURE : {
      CONTAINER  : 5.0201,
      CONTROLLER : 5.0202,
      EXTENSION  : 5.0203,
      EXTRACTOR  : 5.0204,
      KEEPERLAIR : 5.0205,
      SPAWN      : 5.0215
    }
  }
};

module.exports = StateType;
