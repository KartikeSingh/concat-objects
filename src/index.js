/**
 * Merge two or more objects
 * @param  {...Objects} objects Give any number of objects 
 * @exports Object the merged object
 */
module.exports = function concatObjects(...objects) {
    if (!objects.any(x => typeof x === "object"))
        throw new TypeError("Parameter must be an array of objects");
    
    return Object.fromEntries(objects.map(x => Object.entries(x)).reduce((a, b) => [...a, ...b]));
}
