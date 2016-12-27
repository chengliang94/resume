var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/touch');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

// edit index
$("#swiper1").show();
$("#mainContainer").hide();

$('.my_li').hide();
$('.my_li').eq(0).show();
var arrtitle=['我的技能','我的经历','我的项目','关于我']
$('.listall').on('tap',function(){
	var $num=$(this).index();
	$(this).css({'background':'white','color':'black'}).siblings().css({'background':'#6495ed','color':'white'});
	$('.my_li').eq($num).show().siblings('li').hide();
	$('#header').html(arrtitle[$num]);
})

var swiper = new Swiper('.swiper-container',{
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAni.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});

$("#page_four .detail_p").on('tap',function(){
	localStorage.resume="resume";
	$("#swiper1").hide();
	$("#mainContainer").show();
		var myScroll;
		myScroll = new IScroll('#wrapper', { mouseWheel: true });
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})

$.post('http://localhost:8000/skill',function(data){
	var html="";
	for(var i=0;i<data.length;i++){
		html+="<div class='my_skill' style='letter-spacing:1px;'><img src='./images/get.svg'>"+data[i].category+"</div>"
	}
	$("#my_li_one").html(html);
})

$.post('http://localhost:8000/skill',function(data){
	var html="";
	for(var i=0;i<data.length-2;i++){
		html+="<div class='my_skill'><img src='./images/experience.svg'>"+data[i].experience+"</div>"
	}
	$("#my_li_two").html(html);
})
$.post('http://localhost:8000/skill',function(data){
	var html="";
	for(var i=0;i<data.length-4;i++){
		html+="<div class='my_skill' style='font-size:12px;'><img src='./images/project1.svg'>"+data[i].project+"</div>"
	}
	$("#my_li_three").html(html);
})



window.onload = function(){
			localStorage.clear();
			if(localStorage.getItem('resume')){
				$("#swiper1").hide();
				$("#mainContainer").show();
			}else{
				$("#swiper1").show();
				$("#mainContainer").hide();
			}
            var flag = true;
            var media = document.getElementById('media');
            var music1 = document.getElementsByClassName('music')[0];
            var music2 = document.getElementsByClassName('music')[1];
            music1.onclick = function(){
                if( flag==true ){
                    media.pause();
                    flag = false;
                    music1.style.webkitAnimationPlayState = "paused";
                    music2.style.webkitAnimationPlayState = "paused";
                }else{
                    media.play();
                    flag = true;
                    music1.style.webkitAnimationPlayState = "running";
                    music2.style.webkitAnimationPlayState = "running";
                }
            }
            music2.onclick = function(){
                if( flag==true ){
                    media.pause();
                    flag = false;
                    music2.style.webkitAnimationPlayState = "paused";
                    music1.style.webkitAnimationPlayState = "paused";
                }else{
                    media.play();
                    flag = true;
                    music2.style.webkitAnimationPlayState = "running";
                    music1.style.webkitAnimationPlayState = "running";
                }
            }
        }