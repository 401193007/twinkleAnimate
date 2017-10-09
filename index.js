/**
 * by John Tan --oct 9th
 * @bankerArr 抢庄人员数组
 * @banker 庄家
 */

function TwinkleAnimate(bankerArr,banker){

	var _this = this;
	if(!(_this instanceof TwinkleAnimate)) return new TwinkleAnimate(bankerArr,banker);

	var bankerArr = bankerArr; 
	var	banker = banker;
	var len = bankerArr.length;
	var randomNum = _this.getRandomNum(15,20);
	var time = _this.getTime(randomNum,3000);

	_this.timer = null;

	clearInterval(_this.timer);
	_this.timer = setInterval(function(){

		setTimeout(function(){
			_this.tabClass($(".user[data-id='"+ banker +"']"),"flashing");
			clearInterval(_this.timer);
		},3000)

		//打乱数组
		for(var i=0;i<bankerArr.length;i++){
			var j = _this.getRandomInt(0,i);

			var t = bankerArr[i];
			bankerArr[i] = bankerArr[j];
			bankerArr[j] = t;
		}		

		var x = 0;
		while(x < len){
			_this.tabClass($(".user[data-id='"+ bankerArr[x] +"']"),"flashing");
			x++;
		}

	},time)

}	

TwinkleAnimate.prototype.getTime = function(randomNum,animateTime){
	// return Math.ceil(animateTime / randomNum);
	return animateTime / randomNum;
}

TwinkleAnimate.prototype.getRandomNum = function(min, max){
	var range = max - min;
	var random = Math.random();  //获得随机数
	var num = min + Math.round(range * random); //Math.round(range * random)  范围值*随机数--取整
	return num;
}

TwinkleAnimate.prototype.getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

TwinkleAnimate.prototype.tabClass = function(obj,className){
	obj.addClass('flashing')
	   .siblings().removeClass('flashing')		
}

TwinkleAnimate(["1","2","3","7","8"],"8")