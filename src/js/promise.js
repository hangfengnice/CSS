function loadImg(src){
  var promise = new Promise(function(resolve, reject){
    var img = document.createElement('img')
    img.onload = function(){
      resolve(img)
    }
    img.onerror = function(){
      reject(img)
    }
    img.src = src
  })
  return promise
}

var src = 'https://cn.bing.com/sa/simg/SharedSpriteDesktop_2x_040919.png'
var result = loadImg(src)
var src1 = 'https://www.imooc.com/static/img/index/logo.png'
var result1 = loadImg(src1)

// result.then(function(img){
//   console.log(img.width)
//   return img
// })
// .then(function(img){
//   console.log(img.height)
// })

Promise.all([result,result1]).then(function(datas){
  console.log(datas[0])
  console.log(datas[1])

})
Promise.race([result,result1]).then(function(datas){
  console.log('race', datas)
  

})