function curriedAdd(total) {
    if (total === undefined) return 0; // Return 0 if no arguments are passed
    return function next(num) {
        if (num === undefined) {
            return total; // Return total when no further arguments are passed
        }
        total += num;
        return next;
    };
}

module.exports = { curriedAdd };


// create function that either returns accumulated total when called without arguments
// Or continues accumulating the total when called with a number. 
// Function returns itself (next), so it can continue to be called multiple times in a chain.

