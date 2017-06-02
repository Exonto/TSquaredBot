/**
 * An EnumCode represents multi-tier enumeration numbers and their
 *   relations to other enums. Using a version-like system (e.i. '1.4.2'),
 *   one can see that the enum with this EnumCode is a grandchild of 1,
 *   a child of 4, and the 2nd sibliing. Other types can also be used to
 *   represent relations such as String.
 *
 * @class      EnumCode
 *
 * @param      {Array}  code    The array holding the multi-tier enumeration
 *                              data
 */
var EnumCode = function(code)
{
  this.code = code;
};

/**
 * Returns if given EnumCode is equivalent to current EnumCodee
 *
 * @param      {EnumCode} other   The EnumCode to be compared
 * @param      {number}   level   The max level to be checked (optional)
 *
 * @return     {boolean}  False if any value within code and <= level is not
 *                          equivalent; true otherwise
 */
EnumCode.prototype.equals = function(other, level)
{
  if (level === undefined)  // aka not given
  {
    level = Math.min(this.code.length, other.code.length) - 1;
  }
  else if (other instanceof EnumCode === false)  // other is of wrong type
  {
    return false;
  }

  thisCode = this.code.slice(0, level + 1);
  otherCode = other.code.slice(0, level + 1);

  return codeMatch(thisCode, otherCode);
};

/**
 * Returns if two given codes match exactly
 *
 * @param      {array}  thisCode  The first code to be compared
 * @param      {array}  thatCode  The second code to be compared
 *
 * @return     {boolean}  False if not equal lengths or if any value
 *                          is not equivalent; true otherwise
 */
EnumCode.codeMatch = function(thisCode, thatCode)
{
  return thisCode.length == thatCode.length &&
         thisCode.every(function(value, index)
         {
           return value === thatCode[index];
         });
};

module.exports = EnumCode;
