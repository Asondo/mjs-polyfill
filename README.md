# mjs-polyfill
_Mongoose OS example project with standardization polyfill_

### Usage:
At top of init.js add:
```
load('polyfill.js');
```

### Implements:
#### _setTimeout/setInterval_
```
let intervalId = setInterval(function() {
    // Will repeate every 1000 ms (1 sec)
}, 1000);
```

#### _clearTimeout/clearInterval_
```
clearTimeout(intervalId);
```

#### _NodeJS-like exporting system_
moduleName.js:
```
module.exports = {
    name: 'moduleName.js',
};
```

#### _NodeJS-like importing system_
init.js:
```
let someModule = require('moduleName.js');
```

#### _console_
```
console.log('Required moduleName:', someModule.name);
```

###### _ESP8266 tested_