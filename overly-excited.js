var sentence = ["The","walrus","danced","through","the","trees","in","the","light", "of", "the", "moon"];


// The addExcitement function should accept the array as the sole argument
// function addExcitement (sentence) {
//     var complete = "";
//     for (var i=0; i<sentence.length; i++) {
//         complete = complete + " " + sentence[i];
//         console.log(complete);
//     }
// };

// // Invoke the function and pass in the array
function addExcitement (sentence) {
    var complete = "";
    for (var i = 0; i<sentence.length; i+=1) {
        if ((i+1)%3 === 0) {
            complete += sentence[i] + "! ";
            console.log(complete);
        } else {
            complete += sentence[i] + " ";
            console.log(complete);
        } 
    }
};

