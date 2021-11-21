# Installations
```
npm i concat-objects
```

# What ?
With this module you can simply join two or more objects, If objects have same property than last object with that property's value will be used

# How ?
```js
const concatObject = require('concat-objects');

const mergedObject = concatObject(
    { name: "Shisui" },
    { address: "Unknown" },
    { address: "India" },
    { age: 69, weight: 69 },
);

console.log(mergedObject); // => { name: 'Shisui', address: 'India', age: 69, weight: 69 }
```

# Alternative
```js
// I didn't knew about this alternative when I made this package xD
// just do this
const a = {
    name: "someName",
    last: "kek"
},
b = {
    age: 14
},
c = {
    hobby:["gaming]
}

const person = Object.assign(a, b, c);
```

# Supports
For support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh).
