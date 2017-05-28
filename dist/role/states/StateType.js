var StateType =
{
  NONE : 0,
  MOVING : 
  {
    ROOM_POSITION : 1.01,
    STRUCTURE : 
    {
      CONTAINER  : 1.0201,
      CONTROLLER : 1.0202,
      EXTENSION  : 1.0203,
      EXTRACTOR  : 1.0204,
      KEEPERLAIR : 1.0205,
      SPAWN      : 1.0215
    },
    RESOURCE : 
    {
      ENERGY  : 1.0301,
      POWER   : 1.0302,
      MINERAL : 
      {
        HYDROGEN : 1.030301
      }
    }
  },
  HARVESTING : 
  {
    RESOURCE : 
    {
      ENERGY  : 2.0101,
      POWER   : 2.0102,
      MINERAL : 
      {
        HYDROGEN : 2.010301
      }
    }
  },
  TRANSFERRING :
  {
    CREEP : 3.01,
    STRUCTURE : 
    {
      CONTAINER  : 3.0201,
      CONTROLLER : 3.0202,
      EXTENSION  : 3.0203,
      EXTRACTOR  : 3.0204,
      KEEPERLAIR : 3.0205,
      SPAWN      : 3.0215
    }
  },
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
