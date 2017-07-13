# vue-simple-swipe
vue-simple-swipe is a simple vue touch slider

# Install 
```
$ npm install vue-simple-swipe
```

# Import 

Import using module
```
// load css
require('./node_modules/vue-simple-swipe/dist/swipe.css')

// load js in ES6
import { Swipe, SwipeItem } from 'vue-simple-swipe'

// load js in CommomJs
const { Swipe, SwipeItem } = require('vue-simple-swipe')
```

Import with script tag
```
<link rel="stylesheet" href="./node-modules/vue-simple-swipe/dist/swipe.css">
<script src="./node-modules/vue-simple-swipe/dist/swipe.js"></script>

const { Swipe, SwipeItem } = VueSwipe
```

# Usage

```
// html
<div id="root">
    <swipe style="width: 200px; height: 100px;" :auto="3000" :speed="300" :indicator="true">
        <swipe-item v-for="item in items" :key="item.id" :style="item.style">{{item.id}}</swipe-item>
    </swipe>
</div>

// js
const { swipe, swipeItem } = VueSwipe
let app = new Vue({
    el: '#root',
    data: {
        items: [
            {id: 0, style: {background: 'red'}},
            {id: 1, style: {background: 'yellow'}},
            {id: 2, style: {background: 'green'}}
        ]
    },
    components: {
        'swipe': swipe,
        'swipe-item': swipeItem
    }
})
```

# Options

list of prop on swipe component   

| Option | Description |
| ----- | ----- |
| speed | Number(default: 300) speed of animation. |
| auto | Number(default: 3000) delay of auto slide. |
| showIndicators | Boolean (default:true) - show indicators on slider bottom. |

# License
MIT

![image](https://github.com/zyl1314/vue-simple-swipe/blob/master/demo.gif)