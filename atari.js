/**Functions:
 * add(list of numbers to add) > returns sum of the given numbers
 * 
 * TODO:
 * 
 * 
 * Errors and Bugs:
 *  
 */

function add(...a) {
    let result = 0;
    for (let i of a) {
        result += i;
    }
    
    return result
}

module.exports = add;