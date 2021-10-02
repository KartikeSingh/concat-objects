/**
 * Merge two or more objects
 * @param  {...Objects} objects Give any number of objects 
 * @exports Object the merged object
 */
module.exports = function concatObjects(...objects) {
    objects.forEach((v, i) => {
        if (!v || typeof (v) !== "object" || Array.isArray(v)) throw new TypeError(`Parameters should be object but at index : ${i} we got ${JSON.stringify(v)}`)
    });

    let data = {};

    for (let i = 0; i < objects.length; i++) {
        const keys = Object.keys(objects[i]), values = Object.values(objects[i]);

        for (let j = 0; j < keys.length; j++) {
            data[keys[j]] = values[j];
        }
    }

    return data;
}