	Nav('#nav');//导航
	snavWidth();//导航子菜单的宽
	ImgHeight()  //焦点图幻灯片切换高度
	//图片切换开始
	$(function () {
	    $("#slider").responsiveSlides({
	    auto: true,
		slide:1000,
	    pager: true,
	    timeout: 4000,
	    nav: true,
	    speed: 2500,
	    // 对应外层div的class : slide_container
	    namespace: "slide"
	    });
		//图片切换结束     
	
	var downBegan = 0;
	var downEnd = 0;
	var downStartFlag = true;
	var sWSon = document.documentElement.clientWidth ;
			if(sWSon>900){
				$(document).on("mousewheel DOMMouseScroll", function (e) {
					var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
								(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
					if (delta > 0) {
					 if($(document).scrollTop()==0){
								downStartFlag = true;
								$(".banner").slideDown(300);
								$('.content').css('margin-top','0');
								$('.header').removeClass('current')
								$('.header-logo').removeClass('current')
								$('.topWrap').show(10);
							}
					} else if (delta < 0) {
					  if($(".banner").css('display')=='block'&& downStartFlag){
								 downStartFlag = false;
								downBegan = Date.parse(new Date());
								$(".banner").slideUp(300);
								$('.content').css('margin-top','58px')
								$('.header').addClass('current')
								$('.header-logo').addClass('current')
								$('.topWrap').hide(0);
							 }
							 if(!downStartFlag){
								 downStartFlag = false;
								downEnd = Date.parse(new Date());
								
								if(downEnd - downBegan <=300){
									e = e || window.event;  
								if(e.preventDefault) {  
								// Firefox  
								  e.preventDefault();  
								  e.stopPropagation();  
								} else {  
								  // IE  
								  e.cancelBubble=true;  
								  e.returnValue = false;  
							  }  
							  return false;  
								}
							 }
					}
				});
			}else{
				$(window).unbind ('scroll');
				$('.topWrap').css({display:'none'});
				$('.header').removeClass('current');
			}
		var scrollTop = $(document).scrollTop();
		if(scrollTop <=200){
			$('.banner').css('display','block')
			}else{
			$('.banner').css('display','none')
			}
		});
		
		$('.sr').click(function(){
			$('.sr_box').fadeToggle();
		});
