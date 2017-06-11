var EventEmitter =require('events').EventEmitter

var life=new EventEmitter()

//addEventListener

life.on('put',function(who){
	console.log('给'+who+'倒茶')
})

life.emit('put','我')

life.setMaxListeners(11)


//查看事件监听
var hasConforListener = life.emit('溺爱','妹子')
console.log(hasConforListener)

//查询监听数量
console.log(life.listeners('溺爱').length)
