var experience="10"
var threshold="15"
var reward="5"

function reachNextLevel(experience, threshold, reward) {
    if (experience + reward >= threshold) {
      return true;
    } else {
      return false;
    }
  }
  console.log(reachNextLevel(experience, threshold, reward));