const hash = (string = "") => {
    let split = string.split("");

    let ascii = split.map(char => {

        if (parseInt(char)) {
            return parseInt(char);
        } else {
            return char.charCodeAt(0);
        }

    });

    const arrayTo10Multiple = (array) => {
        //add ... to array
    }

    const check10Multiple = (array) => {
        const length = array.length;

        if ( length === 10 ) {

            return array

        } else if ( length > 10 ) {

            //split up

        } else {

            // fill up to 10

        }
        
    }
    

    console.log(ascii);
    // return
}

hash("text1")