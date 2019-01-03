# PS
Pub Sub mini

use like

```js
var mySubscriber = function (message, data) {
    console.log(message, data);
};

var token1 = PS.sub('SOME TOPIC', mySubscriber);

PS.pub('SOME TOPIC', 'hello world!');
//output: SOME TOPIC hello world!
```
