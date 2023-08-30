module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const pairBrackets = {};  

  for (i = 0; i < bracketsConfig.length; i ++) {
    openBrackets.push(bracketsConfig[i][0])
    pairBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }
  let stack = [];
  for (let i = 0; i < str.length; i ++) {
    let currentSimbol = str[i];
      if (openBrackets.includes(currentSimbol)) {
        if (currentSimbol === stack[stack.length - 1] && stack[stack.length - 1] === '|') {
          stack.pop()
        } else if (currentSimbol === stack[stack.length - 1] && stack[stack.length - 1] === '7') {
          stack.pop()
        }
        else if (currentSimbol === stack[stack.length - 1] && stack[stack.length - 1] === '8') {
          stack.pop()
        }
        else stack.push(currentSimbol);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let lastElement = stack[stack.length - 1]; 
        if (pairBrackets[currentSimbol] === lastElement) {
          stack.pop();
        }
        else {
          return false;
        };
      }      
    }
    if (stack.length === 0) {
        return true;
      } else return false;
}
