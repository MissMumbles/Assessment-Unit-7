const perf = require('execution-time')();


function addToZero(array,target){
  for(let i=0;i<array.length;i++){
    for(let j= i+1;j<array.length;j++){
      if (array[i]+array[j]===target){
        return true
      }

  }
}
return false;
}

const nums=[4,2,-9,6,7,-4,8,-1]
const nums1=[4,2,-9,6,7,-22,8,-1]
// console.log(addToZero(nums,0))
// console.log(addToZero(nums1,0))
// not good runtime I think. 


function allUnique(str){
  var hashtable = {};
  for(var i=0,len=str.length;i<len;i++){
      if (hashtable[str[i]] != null){
          hashtable[str[i]] = 1;
          return false;
      }else{
          hashtable[str[i]] = 0;
      }
  }
  return true;
}
const str1='Bang'
const str2='Grandma'
// console.log(allUnique(str1))
// console.log(allUnique(str2))



function checkPangram(string){
  let strArr = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if(strArr.indexOf(alphabet[i]) < 0){
      return false;
    }
  }
  return true;
}

// console.log(checkPangram('Sphinx of Black Quartz, Judge My Vow'))
// console.log(checkPangram('This is not a pangram'))
let pangram= 'Sphinx of Black Quartz, Judge My Vow'


function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
// console.log(findLongestWord('I am not sure Kamie Sammie dearest'))
// console.log(findLongestWord("Remember! Reality is an illusion, the universe is a hologram, buy gold bye!"));
let sentence="Remember! Reality is an illusion, the universe is a hologram, buy gold bye!"


perf.start();
addToZero(nums);
let resultZero = perf.stop();

perf.start();
allUnique(str1);
let resultUnique = perf.stop();

perf.start();
checkPangram(pangram);
let resultPangram = perf.stop();

perf.start();
findLongestWord(sentence);
let resultLongest = perf.stop();

console.log('Results for ');
console.log("addToZero", resultZero.preciseWords);
console.log("allUnique", resultUnique.preciseWords);
console.log("checkPangram", resultPangram.preciseWords);
console.log("checkLongest", resultLongest.preciseWords);

// Results for
// addToZero 133.4 μs
// allUnique 34.2 μs
// checkPangram 36.9 μs
// checkLongest 33.5 μs

// I read that nested for loops are terrible for runtime, so it makes sense my Sum Zero is the slowest.