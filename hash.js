hash = (string = "") => {
    let split = string.split("");

    let ascii = split.map(char => {

        if (parseInt(char)) {
            return parseInt(char);
        } else {
            return char.charCodeAt(0);
        }

    });

    console.log(ascii);
    // return
}

hash("text1")