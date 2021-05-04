// (function() { console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4); })();

// Output: 1432

// Required Output : 1234

let TestFunction = async () => {
    console.log(1);
    await function_1(1000)
    await function_2(0)
    console.log(4);
}

function function_1(ms) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(console.log(2))
        }, ms)
    });
}

function function_2(ms) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(console.log(3))
        }, ms)
    });
}

TestFunction()
