# Alternative
```js
const a = {}, b = { name: "Shisui" }, c = { age: 69 }, d = { hobby: ["programming", "that's all"] };

Object.assign(a, b, c, d);

// now a is change to 
/*
{
    name: "Shisui",
    age: 69,
    hobby: ["programming", "that's all"]
}
*/
```

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
    {name:"Shisui"},
    {address:"Unknown"},
    {address:"India"},
    {age:69,weight:69},
);

console.log(mergedObject); // => { name: 'Shisui', address: 'India', age: 69, weight: 69 }
```

# Supports
For support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh).
