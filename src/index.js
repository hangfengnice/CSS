// import Vue from 'vue'
// import App from './app.vue'

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

// var obj = {
//   name: "藏三",
//   age: 26
// }
import '@babel/polyfill'
var vm = {};
var data = {
  name: "zhangsan",
  age: 20
};

var key;

// for (key in data) {
  
//   (function(key) {
//     Object.defineProperty(vm, key, {
//       get: function() {
//         return data[key];
//       },
//       set: function(newValue) {
//         data[key] = newValue;
//       }
//     });

//   })(key);
// }
