/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};
var isValid = function(s) {

    let strick = [];

    for(let cher of s){

        if (cher === '(') strick.push (')');
        else if (cher === '{') strick.push ('}');
        else if (cher === '[') strick.push (']');
        else if ( cher !== strick.pop()) return false;

    };

    return strick.length === 0;
    
};