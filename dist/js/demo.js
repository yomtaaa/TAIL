
var oBtn = document.getElementById('o-btn');
var aLi = oBtn.getElementsByTagName('li');
var mySwiper = new Swiper('.swiper-container',{
	autoplay : 3000,
	speed:300,
})
for (var i = 0; i<aLi.length; i++) {
	aLi[i].className='btn'+(i+1);
	aLi[i].num=i;
	$('.btn'+(aLi[i].num+1)).mouseover(function(){
		var This = this;
		mySwiper.swipeTo(This.num, 1000, false);

		//切换到第一个slide，速度为1秒
	})
}