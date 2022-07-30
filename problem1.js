// var statues=[6,2,3,8]

function makeArrayConsecutive2(statues) {
    const nums = [];
  
    for (let i = Math.min(...statues); i <= Math.max(...statues); i++) {
      if (!statues.includes(i)) {
        nums.push(i);
      }
    }
  
    return nums.length;
  }
  
  console.log(makeArrayConsecutive2([6, 2, 3, 8]))