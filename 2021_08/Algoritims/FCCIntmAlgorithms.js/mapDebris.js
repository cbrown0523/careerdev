function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
   
    for(var i=0; i<arr.length; i++){
      arr[i].orbitalPeriod = findOrbPeriod(arr[i].avgAlt);
      delete arr[i].avgAlt;
    }
    
    function findOrbPeriod(alt){
      var axis = alt + earthRadius;
      var orbPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(axis, 3)/GM));
      return orbPeriod;
    }
    
    return arr;
  }