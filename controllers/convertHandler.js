/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var units = new Map ([
    ['L', {name: 'liters', convertValue: 3.78541}],
    ['kg', {name: 'kilograms', convertValue: 0.453592}],
    ['km', {name: 'kilometers', convertValue: 1.60934}],
    ['gal', {name: 'gallons', convertValue: 0.26417}],
    ['lbs', {name: 'pounds', convertValue: 2.20462}],
    ['mi', {name: 'miles', convertValue: 0.62137}]
  ]);
  
  var unitsAndReturn = new Map([
    ['L', {symbol: 'gal', convertValue: 0.26417}],
    ['kg', {symbol: 'lbs', convertValue: 2.20462}],
    ['km', {symbol: 'mi', convertValue: 0.62137}],
    ['gal', {symbol: 'L', convertValue: 3.78541}],
    ['lbs', {symbol: 'kg', convertValue: 0.453592}],
    ['mi', {symbol: 'km', convertValue: 1.60934}]
  ]);
  
  this.getNum = function(input) {
    var result;
    var num = input.match(/(^(\.?\d+\.?\d*)(\/?)(\.?\d+\.?\d*)?)/)
    var slash = input.split(/(\/)/)
    
    if(slash!=null && slash.length>1){ 
      var count = 0;
      for(var i=0;i<slash.length;i++){
        if(slash[i] == '/'){
          count++;
        }
      }
      if(count>1)
        return NaN
    }
    
    if(!num || num == null){return 1}
    console.log(num)
    console.log(num[0] != num.input)
    if (!num || (num[4] && num[3] !== '/')) 
        return NaN
    if ((num[0] == num.input))
        return NaN
    
    
    if (num[4]) {
      return Number(num[2]) / Number(num[4]);
    }

    
    if (num[2]) {
      return Number(num[2]);
    }

    if(units.get(num[5].toLowerCase()))
         result = 1
    else 
      result = NaN
    
    console.log('getNum ' + result)
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var letr=  input.match(/[a-zA-Z]+/g)
     
    if(input){
      var unit = letr[0].replace(/\s/g, '')
        .toLowerCase()
      console.log('units - unit '+ unit);
      if(unit == 'l') 
        unit = unit.toUpperCase();
      
      result = units.get(unit)
      console.log('getUnit ' + result)
 
      return result && unit;
    } 
    return undefined
    
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    if(initUnit){
    result = unitsAndReturn.get(initUnit).symbol
    console.log('Return Unit ' + result)
    return result.replace(/\s/g, '');
    }
    return undefined
  };

  this.spellOutUnit = function(unit) {
    var result;
    if(unit){
    result = units.get(unit);
    console.log(result.name)
    return result.name
    }else return undefined
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    var returnUnit = unitsAndReturn.get(initUnit)
    console.log(returnUnit)
    console.log(initNum)
    result = returnUnit 
      ? parseFloat((initNum * returnUnit.convertValue).toFixed(5))
      : undefined; 
        console.log('Convert ' + result)
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    //console.log(returnUnit.name)
if(initNum && initUnit && returnNum && returnUnit){
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result; 
}
    return undefined
  };
  
}

module.exports = ConvertHandler;
