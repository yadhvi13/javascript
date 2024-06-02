 // Immediately Invoked Function Expression

 (function chai(){
    // NAMED IIFE
    console.log(`DB Connected`);
 }());

// global scope ke pollution (declaration,variables etc) ko remove krne ke lie IIFE is used

( (name) => {
    //UNNAMED IIFE
    console.log(`dB Connected ${name}`);
})('oggy')
