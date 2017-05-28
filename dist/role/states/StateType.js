var StateType =
{
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
  BUILDING : 
  {
    STRUCTURE : 
    {
      CONTAINER  : 3.0101,
      CONTROLLER : 3.0102,
      EXTENSION  : 3.0103,
      EXTRACTOR  : 3.0104,
      KEEPERLAIR : 3.0105,
      SPAWN      : 3.0115
    }
  },
  ATTACKING : 
  {
    CREEP : 4.01,
    STRUCTURE : {
      CONTAINER  : 4.0201,
      CONTROLLER : 4.0202,
      EXTENSION  : 4.0203,
      EXTRACTOR  : 4.0204,
      KEEPERLAIR : 4.0205,
      SPAWN      : 4.0215
    }
  }
};

module.exports = StateType;
