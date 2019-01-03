# PS
Pub Sub mini

use like

```js
var mySubscriber = function (message, data) {
    console.log(message, data.toUpperCase());
};

var token1 = PS.sub('SOME TOPIC', mySubscriber);

PS.pub('SOME TOPIC', 'hello world!');

//output: SOME TOPIC HELLO WORLD!
```
