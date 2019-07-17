var snabbdom = require("snabbdom");
var patch = snabbdom.init([
  // Init patch function with chosen modules
  require("snabbdom/modules/class").default, // makes it easy to toggle classes
  require("snabbdom/modules/props").default, // for setting properties on DOM elements
  require("snabbdom/modules/style").default, // handles styling on elements with support for animations
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);
var h = require("snabbdom/h").default; // helper function for creating vnodes

var data = [
  {
    name: "hangfeng",
    age: 20,
    address: "金华"
  },
  {
    name: "yingying",
    age: 20,
    address: "金华"
  },
  {
    name: "jiaying",
    age: 20,
    address: "金华"
  }
];

data.unshift({
  name: "姓名",
  age: "年龄",
  address: "地址"
});

var container = document.getElementById("container");

// render
var vnode;
function render(data) {
  var newVnode = h(
    "table",
    {},
    data.map(function(item) {
      var tds = [];
      var i;
      for (i in item) {
        if (item.hasOwnProperty(i)) {
          tds.push(h("td", {}, item[i] + ""));
        }
      }
      return h("tr", {}, tds);
    })
  );

  if (vnode) {
    patch(vnode, newVnode);
  } else {
    patch(container, newVnode);
  }
  vnode = newVnode
}

render(data);

// var vnode = h("ul#list", {}, [
//   h("li.item", {}, "item1"),
//   h("li.item", {}, "item2")
// ]);
// Patch into empty DOM element – this modifies the DOM as a side effect

document.getElementById("btn_change").addEventListener("click", function() {
  data[1].age = 30;
  data[2].address = "深圳";
  render(data);
});

// var newVnode = h('div#container.two.classes', {on: {click: anotherEventHandler}}, [
//   h('span', {style: {fontWeight: 'normal', fontStyle: 'italic'}}, 'This is now italic type'),
//   ' and this is still just normal text',
//   h('a', {props: {href: '/bar'}}, 'I\'ll take you places!')
// ]);
// // Second `patch` invocation
// patch(vnode, newVnode);
