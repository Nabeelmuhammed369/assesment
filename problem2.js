var sequence=[1,8,2,1]
function almostIncreasingSequence(sequence) {
    var found = 0;
    for (var i=0;i<sequence.length;i++) {
    
      if(sequence[i] <= sequence[i-1]) {
        found++;
        // check if more than one nonincreasing found
        if(found > 1) return false; 
        
        // check if second previous number is equal to / bigger than current number
        // and previous number is equalto / bigger than next number
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false; 
      }
      
    } 
    return true;

}
console.log(almostIncreasingSequence(sequence[1,8,2,1]));
