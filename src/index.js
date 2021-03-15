module.exports = function check(str, bracketsConfig) {
		function getArrayDepth(value) {
		  return Array.isArray(value) ? 
		    1 + Math.max(...value.map(getArrayDepth)) :
		    0;
		}

		let depth = getArrayDepth(bracketsConfig);
		let brackets = bracketsConfig.flat(depth).join('');
		  let stack = []; 
		  for(let currentItem of str) {
		    let currentIndex = brackets.indexOf(currentItem)
		    if(currentIndex % 2 === 0 && !(currentItem == '|')) {
		      stack.push(currentIndex + 1)
		    } 
		    else if(currentItem === '|' && (stack.indexOf(currentIndex) == -1) ) {
		    	stack.push(currentIndex)

		    }	
		    else {
		      if(stack.pop() !== currentIndex) {
		        return false;
		      }
		    }
		  }
		  return stack.length === 0
}
