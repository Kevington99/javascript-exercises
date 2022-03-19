const repeatString = function(string,num) {

    let longWord = '';

    if (num < 0) return 'ERROR';

    for (let i = 0; i < num; i++){
        longWord += string;
    }  
    return longWord;
};

// Do not edit below this line
module.exports = repeatString;
