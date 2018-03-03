$(function(){
    	$(document).ready(function() {

			$('.container').fullpage({
				'css3': true,	//使用 CSS3 transforms 滚动
				'loopHorizontal' : false,	//左右滑块循环滑动
				'verticalCentered' : false,	//内容是否垂直居中
				'slidesNavigation' : true, 	//显示左右滑块的项目导航
			});

			$.fn.fullpage.setAllowScrolling(false);
			//自适应，初始化敷彩页面的人载入的图片大小
			loadColorPerson();

			InitThis();
		});	
});

//滚轮事件
$('.container').bind('mousewheel', function(event, delta, deltaX, deltaY) {
    if (window.console && console.log) {
         // console.log(delta, deltaX, deltaY);
         if(delta<0){
         	$.fn.fullpage.moveSlideRight();
         }
         if(delta>0){
         	$.fn.fullpage.moveSlideLeft();
         }
    }
});
//-----------首页动画触发---------
//人物第二部分动画
	var bg_index_people = $("#bg-index .people");
	bg_index_people.bind("webkitAnimationEnd", function() {
	    bg_index_people.addClass("shockPeopleAnimation");
	});
//-----------首页动画结束---------

//-----------第一页触发---------
var selectAnimal = "cow";
$('#bg-page1 .clip').click(function() {
	selectAnimal = $(this).attr('data');
	$('#bg-page2 #step1 div').each(function() {
		if($(this).attr('data') == selectAnimal){
			$(this).css('opacity', '1');
			$(this).css('z-index', '9999');
			if($(this).attr('data') == "cow"){
				$('#bg-page1 #scene-cow').css('border', '3px solid #fff335');
				$('#bg-page1 #scene-sheep').css('border', '3px solid #1b1b1b');
				$('#bg-page1 #scene-pig').css('border', '3px solid #1b1b1b');
			}
			if($(this).attr('data') == "sheep"){
				$('#bg-page1 #scene-sheep').css('border', '3px solid #fff335');
				$('#bg-page1 #scene-cow').css('border', '3px solid #1b1b1b');
				$('#bg-page1 #scene-pig').css('border', '3px solid #1b1b1b');

			}
			if($(this).attr('data') == "pig"){
				$('#bg-page1 #scene-pig').css('border', '3px solid #fff335');
				$('#bg-page1 #scene-cow').css('border', '3px solid #1b1b1b');
				$('#bg-page1 #scene-sheep').css('border', '3px solid #1b1b1b');
			}
		}else{
			$(this).css('opacity', '0');
			$(this).css('z-index', '9998');

		}
	});
});

//-----------第一页结束---------

//-----------第二页触发---------

//洗皮
$('#bg-page2 #step1 .animation-cow').click(function() {
	//-2为洗皮加刮毛gif
	$(this).css('background', 'url(images/bg-page2/cow-2.gif) no-repeat');
	$(this).css({
			'-webkit-background-size': 'contain',
			'background-size': 'contain',
			'-moz-background-size': 'contain',
  			'-o-background-size': 'contain'
		});
	$(this).addClass('delayPic-cow');
	$('#bg-page2 .title li:nth-child(1)').addClass('guamaotitle1');
	$('#bg-page2 .title li:nth-child(2)').addClass('guamaotitle2');
});
$('#bg-page2 #step1 .animation-sheep').click(function() {
	
	$(this).css('background', 'url(images/bg-page2/sheep-2.gif) no-repeat');
	$(this).css({
			'-webkit-background-size': 'contain',
			'background-size': 'contain',
			'-moz-background-size': 'contain',
  			'-o-background-size': 'contain'
		});
	$(this).addClass('delayPic-sheep');
	$('#bg-page2 .title li:nth-child(1)').addClass('guamaotitle1');
	$('#bg-page2 .title li:nth-child(2)').addClass('guamaotitle2');

});
$('#bg-page2 #step1 .animation-pig').click(function() {
	
	$(this).css('background', 'url(images/bg-page2/pig-2.gif) no-repeat');
	$(this).css({
			'-webkit-background-size': 'contain',
			'background-size': 'contain',
			'-moz-background-size': 'contain',
  			'-o-background-size': 'contain'
		});
	$(this).addClass('delayPic-pig');
	$('#bg-page2 .title li:nth-child(1)').addClass('guamaotitle1');
	$('#bg-page2 .title li:nth-child(2)').addClass('guamaotitle2');

});

//晾皮
function Page2ShowStep2(){
	$("#bg-page2 #step1").fadeTo('fast', 0);
	$("#bg-page2 #step2").fadeTo('fast', 1);

	$("#bg-page2 .title li:nth-child(1)").css({
		background: 'url(images/bg-page2/title5.png) no-repeat',
		'-moz-background-size':'contain',
  		'-o-background-size':'contain',
  		'-webkit-background-size':'contain',
  		'background-size':'contain',
	});
	$("#bg-page2 .title li:nth-child(2)").css({
		background: 'url(images/bg-page2/title6.png) no-repeat',
		'-moz-background-size':'contain',
  		'-o-background-size':'contain',
  		'-webkit-background-size':'contain',
  		'background-size':'contain',
	});

	
}

var animation_cow = $("#bg-page2 #step1 .animation-cow");
animation_cow.bind("webkitAnimationEnd", function() {
	Page2ShowStep2();
	
});
var animation_sheep = $("#bg-page2 #step1 .animation-sheep");
animation_sheep.bind("webkitAnimationEnd", function() {
	Page2ShowStep2();
	
});
var animation_pig = $("#bg-page2 #step1 .animation-pig");
animation_pig.bind("webkitAnimationEnd", function() {
	Page2ShowStep2();
	
});

//-----------第二页结束---------


//-----------第三页事件开始---------
//第三页的画板
var mousePressed = false;
var lastX, lastY;
var ctx;
ctx = document.getElementById('myCanvas').getContext("2d");
function InitThis() {
	var canvas = document.querySelector('#myCanvas');
	var offsetX = canvas.offsetLeft,
		offsetY = canvas.offsetTop;

	var imgsrc;
	var w = $(window).width();
	 if(w < 1000 && w > 500){
	 	imgsrc = "old-2";
	 	canvas.width = 192;
	 	canvas.height = 278;
	 }else if(w < 500){
	 	imgsrc = "old-3";
	 	canvas.width = 145;
	 	canvas.height = 214;
	 }else{
	 	imgsrc = "old-1";
	 	canvas.width = 432;
	 	canvas.height = 608;
	}

	var imageSource = 'images/bg-page5/' + imgsrc + '.png';

	canvas.style.backgroundImage='url('+ imageSource +')';

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });
    
    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });
	$('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    });
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
    
	function eventDown(e){
		e.preventDefault();
		mousePressed=true;
	}

	function eventUp(e){
		e.preventDefault();
		mousePressed=false;
	}

	function eventMove(e){
		e.preventDefault();
		if(mousePressed) {
			if(e.changedTouches){
				e=e.changedTouches[e.changedTouches.length-1];
			}
			var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
			y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
			with(ctx) {
				beginPath()
				strokeStyle = $('#selColor').val();
        		lineWidth = $('#selWidth').val();
				arc(x, y, lineWidth, 0, Math.PI * 2);
				fill();
			}
		}
	}
    
    canvas.addEventListener('touchstart', eventDown);
	canvas.addEventListener('touchend', eventUp);
	canvas.addEventListener('touchmove', eventMove);
	//canvas.addEventListener('mousedown', eventDown);
	//canvas.addEventListener('mouseup', eventUp);
	//canvas.addEventListener('mousemove', eventMove);
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);

        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}
    
function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//-----------第三页事件结束---------



//-----------第四页事件开始---------


var bg_page4_person_head = $("#bg-page4 .head");
bg_page4_person_head.click(function() {
	bg_page4_person_head.css('background-image', 'url(images/bg-page4/head-3.png)');
});
var bg_page4_person_body = $("#bg-page4 .body");
bg_page4_person_body.click(function() {
	bg_page4_person_body.css('background-image', 'url(images/bg-page4/body-3.png)');
});
var bg_page4_person_leftHand = $("#bg-page4 .leftHand");
bg_page4_person_leftHand.click(function() {
	bg_page4_person_leftHand.css('background-image', 'url(images/bg-page4/lefthand-3.png)');
});
var bg_page4_person_rightHand = $("#bg-page4 .rightHand");
bg_page4_person_rightHand.click(function() {
	bg_page4_person_rightHand.css('background-image', 'url(images/bg-page4/righthand-3.png)');
});
var bg_page4_person_leftfoot = $("#bg-page4 .leftFoot");
bg_page4_person_leftfoot.click(function() {
	bg_page4_person_leftfoot.css('background-image', 'url(images/bg-page4/leftfoot-3.png)');
});
var bg_page4_person_rightfoot = $("#bg-page4 .rightFoot");
bg_page4_person_rightfoot.click(function() {
	bg_page4_person_rightfoot.css('background-image', 'url(images/bg-page4/rightfoot-3.png)');
});


$('#bg-page4 .toolbar li').click(function() {
	var index = $(this).index();
	$('#bg-page4 .toolbar li').each(function() {
		if($(this).index() == index){
			$(this).css('border', '2px solid #fff335');
		}else{
			$(this).css('border', 'none');
		}
	});
});

$('#page4mainContent1 button').click(function() {
	$("#page4mainContent1").fadeTo('fast', 0);
	$("#page4mainContent2").fadeTo('fast', 1);
});
//-----------第四页事件结束---------
//
//-----------第五页敷彩事件开始---------------

function loadColorPerson(){
	var w = $(window).width(), h = $(window).height();
	 if(w < 1000 && w > 500){
	 	$('#lamp').attr('src', "images/bg-page5/old-2.png");
	 	$('.colorButtonList button').each(function() {
	 		var o = $(this).attr('data');
	 		o = o + "2";
	 		$(this).attr('data',o);
	 		changeColor("old-2");
	 	});
	 }else if(w < 500){
	 	$('#lamp').attr('src', "images/bg-page5/old-3.png");
	 	$('.colorButtonList button').each(function() {
	 		o = $(this).attr('data');
	 		o = o + "3";
	 		$(this).attr('data',o);
	 		changeColor("old-3");
	 	});
	 }else{
	 	$('#lamp').attr('src', "images/bg-page5/old-1.png");
	 	$('.colorButtonList button').each(function() {
	 		o = $(this).attr('data');
	 		o = o + "1";
	 		$(this).attr('data',o);
	 		changeColor("old-1");
	 	});
	 }

}

function changeColor(imgsrc){


	var img = new Image();

	var imageSource = 'images/bg-page5/' + imgsrc + '.png';
	
	var canvas = document.querySelector('#bg-page5 canvas');
	canvas.style.backgroundColor='transparent';
	canvas.style.position = 'absolute';

	img.addEventListener('load', function(e) {
		var ctx;
		var w = img.width, h = img.height;
		var offsetX = canvas.offsetLeft,
		offsetY = canvas.offsetTop;
		var mousedown = false;

		function layer(ctx) {            
		
			clea();
			var img=document.getElementById("lamp");
			var pat=ctx.createPattern(img,"no-repeat");                
			
			ctx.fillStyle = pat;
			ctx.fillRect(0, 0, w, h);
		}
		function clea(){
		    ctx.beginPath();
		    ctx.clearRect(0,0,canvas.width,canvas.height);
		}
		function eventDown(e){
			e.preventDefault();
			mousedown=true;
		}

		function eventUp(e){
			e.preventDefault();
			mousedown=false;
		}

		function eventMove(e){
			e.preventDefault();
			if(mousedown) {
				if(e.changedTouches){
					e=e.changedTouches[e.changedTouches.length-1];
				}
				var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
				y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
				with(ctx) {
					beginPath()
					arc(x, y, 20, 0, Math.PI * 2);
					fill();
				}
			}
		}

		canvas.width=w;
		canvas.height=h;

		canvas.style.backgroundImage='url('+ imageSource +')';
		ctx=canvas.getContext('2d');
		ctx.fillStyle='transparent';
		ctx.fillRect(0, 0, w, h);
		layer(ctx);
	
		ctx.globalCompositeOperation = 'destination-out';

		canvas.addEventListener('touchstart', eventDown);
		canvas.addEventListener('touchend', eventUp);
		canvas.addEventListener('touchmove', eventMove);
		canvas.addEventListener('mousedown', eventDown);
		canvas.addEventListener('mouseup', eventUp);
		canvas.addEventListener('mousemove', eventMove);
	
	});
	img.src = imageSource;
}


$('.colorButtonList button').click(function() {
	var currentData = $(this).attr('data');
	changeColor(currentData);
	$(this).css('text-decoration', 'underline');
	$('.colorButtonList button').each(function() {
 		if($(this).attr('data')!=currentData){
 			$(this).css('text-decoration', 'none');
 		}
	 });
});
//-----------第五页敷彩事件结束---------------
//

