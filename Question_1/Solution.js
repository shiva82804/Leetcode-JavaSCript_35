/**
 * @return {Function}
 */
var createHelloWorld = function() {
    //Approach 1
    return function(){
        return "Hello World"
    };
    //Approach 2
    // return () => "Hello World";
    //Approach 3
    // return new Function("return 'Hello World'");
    //Approach 4
    // return () => { return "Hello World"; };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */