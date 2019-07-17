var snabbdom = require("snabbdom");
var patch = snabbdom.init([
  // Init patch function with chosen modules
  require("snabbdom/modules/class").default, // makes it easy to toggle classes
  require("snabbdom/modules/props").default, // for setting properties on DOM elements
  require("snabbdom/modules/style").default, // handles styling on elements with support for animations
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);
var h = require("snabbdom/h").default; // helper function for creating vnodes

var container = document.getElementById("container");

var vnode = h("ul#list", {}, [
  h("li.item", {}, "item1"),
  h("li.item", {}, "item2")
]);
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

document.getElementById("btn_change").addEventListener("click", function() {
  var newVnode = h("ul#list", {}, [
    h("li.item", {}, "item1"),
    h("li.item", {}, "itemw"),
    h("li.item", {}, "item3")
  ]);
  patch(vnode, newVnode);
});

// var newVnode = h('div#container.two.classes', {on: {click: anotherEventHandler}}, [
//   h('span', {style: {fontWeight: 'normal', fontStyle: 'italic'}}, 'This is now italic type'),
//   ' and this is still just normal text',
//   h('a', {props: {href: '/bar'}}, 'I\'ll take you places!')
// ]);
// // Second `patch` invocation
// patch(vnode, newVnode);
