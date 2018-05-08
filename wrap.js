const wrap = (string, num) => {
    let currentLine = 1;
    let finalString = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " "){
            let nextWordLen = string.indexOf(" ", i+1) - i + 1;
            if (nextWordLen + currentLine > num){
                currentLine = 1;
                finalString += "\n ";
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

module.exports = wrap 