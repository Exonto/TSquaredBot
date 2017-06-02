var StateType =
{
  NONE   : EnumCode([0]),
  MOVING :
  {
    GENERIC   : EnumCode([1]),
    POSITION  : EnumCode([1, 1]),
    STRUCTURE :
    {
      GENERIC    : EnumCode([1, 2]),
      CONTAINER  : EnumCode([1, 2, 1]),
      CONTROLLER : Enumcode([1, 2, 2]),
      EXTENSION  : EnumCode([1, 2, 3]),
      EXTRACTOR  : EnumCode([1, 2, 4]),
      KEEPERLAIR : EnumCode([1, 2, 5]),
      SPAWN      : EnumCode([1, 2, 15])
    },
    RESOURCE :
    {
      GENERIC : EnumCode([1, 3]),
      ENERGY  : EnumCode([1, 3, 1]),
      POWER   : EnumCode([1, 3, 2]),
      MINERAL :
      {
        GENERIC  : EnumCode([1, 3, 3]),
        HYDROGEN : EnumCode([1, 3, 3, 1])
      }
    }
  },
  HARVESTING :
  {
    GENERIC  : EnumCode([2]),
    RESOURCE :
    {
      GENERIC : EnumCode([2, 1]),
      ENERGY  : EnumCode([2, 1, 1]),
      POWER   : EnumCode([2, 1, 2]),
      MINERAL :
      {
        GENERIC  : EnumCode([2, 1, 3]),
        HYDROGEN : EnumCode([2, 1, 3, 1])
      }
    }
  },
  TRANSFERRING :
  {
    GENERIC   : EnumCode([3]),
    CREEP     : EnumCode([3, 1]),
    STRUCTURE :
    {
      GENERIC    : EnumCode([3, 2]),
      CONTAINER  : EnumCode([3, 2, 1]),
      CONTROLLER : Enumcode([3, 2, 2]),
      EXTENSION  : EnumCode([3, 2, 3]),
      EXTRACTOR  : EnumCode([3, 2, 4]),
      KEEPERLAIR : EnumCode([3, 2, 5]),
      SPAWN      : EnumCode([3, 2, 15])
    },
  },
  BUILDING :
  {
    GENERIC   : EnumCode([4]),
    STRUCTURE :
    {
      GENERIC    : EnumCode([4, 1]),
      CONTAINER  : EnumCode([4, 1, 1]),
      CONTROLLER : Enumcode([4, 1, 2]),
      EXTENSION  : EnumCode([4, 1, 3]),
      EXTRACTOR  : EnumCode([4, 1, 4]),
      KEEPERLAIR : EnumCode([4, 1, 5]),
      SPAWN      : EnumCode([4, 1, 15])
    },
  },
  ATTACKING :
  {
    GENERIC : EnumCode([5]),
    CREEP   : EnumCode([5, 1]),
    STRUCTURE :
    {
      GENERIC    : EnumCode([5, 2]),
      CONTAINER  : EnumCode([5, 2, 1]),
      CONTROLLER : Enumcode([5, 2, 2]),
      EXTENSION  : EnumCode([5, 2, 3]),
      EXTRACTOR  : EnumCode([5, 2, 4]),
      KEEPERLAIR : EnumCode([5, 2, 5]),
      SPAWN      : EnumCode([5, 2, 15])
    },
  }
};

module.exports = StateType;
