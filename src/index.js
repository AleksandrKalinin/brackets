module.exports = function check(str, bracketsConfig) {
		function getArrayDepth(value) {
		  return Array.isArray(value) ? 
		    1 + Math.max(...value.map(getArrayDepth)) :
		    0;
		}

		let depth = getArrayDepth(bracketsConfig);
		let brackets = bracketsConfig.flat(depth).join('');
		  let stack = []; 
		  for(let bracket of str) {
		    let bracketsIndex = brackets.indexOf(bracket)
		    //console.log("bracket ", bracket, " bracketsIndex ", bracketsIndex )
		    if(bracketsIndex % 2 === 0 && !(bracket == '|')) {
		      stack.push(bracketsIndex + 1)
		    } 
		    else if(bracket === '|' && (stack.indexOf(bracketsIndex) == -1) ) {
		    	stack.push(bracketsIndex)

		    }	
		    else {
		      if(stack.pop() !== bracketsIndex) {
		      	//console.log(false)
		        return false;
		      }
		    }
		    //console.log(stack);
		  }
		  //console.log(stack.length === 0);
		  return stack.length === 0
}
