/**
 * Merge two or more objects
 * @param  {...Objects} objects Give any number of objects 
 * @exports Object the merged object
 */
module.exports = function concatObjects(...objects) {
    objects.forEach((v, i) => {
        if (!v || typeof (v) !== "object" || Array.isArray(v)) throw new TypeError(`Parameters should be object but at index : ${i} we got ${JSON.stringify(v)}`)
    });

    return Object.fromEntries(Array.of(...objects.flatMap(v => Object.entries(v))))
}