define(['data'], function (data) {
    function randomNum (min, max) {
        if (max == null) {
              max = min;
              min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    /*function randomItem (array, number){
          var newarray = [];
          var copyarray = array.slice(0);;
          var length = copyarray.length;
          var n = number;
          if (n > length) throw new Error('require bigger than array');
          while(n){
             var rindex = randomNumber(0,length-1);
             
             newarray.push(copyarray[rindex]);
             copyarray.splice(rindex,1);
             
             n--;
             length--;
          }
          return newarray;    
    }*/
})