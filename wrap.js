const wrap = (string, num) => {
    let currentLine = 1;
    let finalString = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " "){
            let nextWordLen = string.indexOf(" ", i+1) - i + 1;
            if (nextWordLen + currentLine > num){
                currentLine = 1;
                finalString += "\n";
            } else {
                finalString += string[i];
            }
        } else {
            currentLine++;
            finalString += string[i];
        }
    }
    return finalString;
}

/* Solution Code To Cross Check Tests */

// function wrap(line, maxLen) {
//     if (line.length <= maxLen) {
//         return line;
//     }

//     const indexOfBlank = line.lastIndexOf(' ', maxLen);
//     let split;
//     let offset;
//     if(indexOfBlank > -1) {
//         split = indexOfBlank;
//         offset = 1;
//     } else {
//         split = maxLen;
//         offset = 0;
//     }

//     return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);
// }

module.exports = wrap 