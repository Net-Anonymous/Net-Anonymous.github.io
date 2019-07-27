//搜索点击弹出效果
$('.search').click(function(){
	$('.sr_box').fadeToggle();
});	

//导航置顶
//$(function(){
	//navTop();
	$(window).resize(function(){
		//navTop();
	})
	//})
 
function navTop(){
	var sWSon = document.documentElement.clientWidth ;
		if(sWSon>900){
			$('.topWrap').css({display:'block'})
				$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 10){
				$('.header').addClass('current');
				//$('.ser').addClass('current');
				$('.current').find('.topWrap').css({display:'none'}).stop().animate({top:"-40px"},200);
				var liWidth = $("#nav li").width()
				$('.subNav').css('width',liWidth)
				}else{
				$('.header').removeClass('current');
	//			$('.ser').removeClass('current');
				$('.topWrap').css({display:'block'}).stop().animate({top:0},200);
				var liWidth = $("#nav li").width()
				$('.subNav').css('width',liWidth)
				}
			});
			
		}else{
			$ (window).unbind ('scroll');
			$('.topWrap').css({display:'none'});
			$('.header').removeClass('current');
		}
}


//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');
	
	aLi.hover(function (){
		$(this).find('.subNav').show()
        $(this).addClass('on');
		
	},function (){
		$(this).find('.subNav').hide()
        $(this).removeClass('on');
		
	})
	//置顶
		var iWSon = document.documentElement.clientWidth ;
	if(iWSon > 1240){
		var vNavWaitSlide,NavWaitSlide;
		  $('.goTops').hover(
			  function(){
				  var current_li=$(this),targ=$(current_li).find('.fLinks');
				  NavWaitSlide = setTimeout(function() { 
					  if(!$(targ).is(':visible'))
					  {
							$(targ).fadeIn(200);
					  }
				  },200)
			  },
			 function(){
				  clearTimeout(NavWaitSlide);
				  $(this).find('.fLinks').fadeOut(200);
			  }
			);
		
	}else{
		$('.goTops').unbind("mouseenter").unbind("mouseleave");
		$('.sideMenu1').bind("click");
		goTops();
		$('.fLinks').find('dl').each(function(){
		$(this).find('dd').eq(0).show().siblings().hide();
		$(this).find('dd').eq(0).click(function(){
			$(this).siblings().slideToggle(200);
			if($(this).find('h3').hasClass('open')){
				$(this).find('h3').removeClass('open');
			}else{
				$(this).find('h3').addClass('open');
				}
		})
	});
	}
	function goTops(){
	$('.sideMenu1').click(function(){
		  	$(this).next('.fLinks').slideToggle(200);
		  })
	}
	
};

//12.移动端顶部点击弹出下拉菜单
function Menu(menu,main){
    var onOff = true;
    $(menu).bind('click',function (){
        $(main).slideToggle();
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
			}
    })
    $(main).find('li >strong').bind('click',function (){
        if($(this).parent().hasClass('on')){
            $(this).parent().find('dl').slideUp();
            $(this).parent().removeClass('on');
            return false;
        };
		$(this).parent().addClass('on');
        $(this).parent().find('dl').slideDown();
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().find('dl').slideUp();
        
    })
	
};

//banner视频大图切换高度问题
function ImgHeight_video(){
	// var oSlider = document.getElementById('slider');
	// var aLiSlider = oSlider.getElementsByTagName('img');
	//var iWSon = document.documentElement.clientWidth ;
	var oBanner = document.getElementById('banner02')
	var iWSon = document.documentElement.clientWidth ;
		 if(iWSon>=1920){
			 
			 oBanner = 780+'px';
			$('#banner02').css('height',oBanner);
    		}else if(iWSon<1920){
				//alert(iWSon)
				 oBanner = iWSon * (780/1920)+'px';
			$('#banner02').css('height',oBanner);
			//$('.video1').css('height',oBanner)
			}
	$(window).resize(function(){
		var iWSon = document.documentElement.clientWidth ;
		 if(iWSon>=1920){
			 
			 oBanner = 780+'px';
			 //alert(iWSon+'d'+oBanner)
			 //alert(oBanner);
			$('#banner02').css('height',oBanner);
			//$('.video1').css('height',oBanner)
    		}else if(iWSon<1920){
				//alert(iWSon)
				 oBanner = iWSon * (780/1920)+'px';
			$('#banner02').css('height',oBanner);
			//$('.video1').css('height',oBanner)
				
		window.onscroll = window.onresize = function (){
			var iWSon = document.documentElement.clientWidth ;
			if(iWSon>=1920){
			 oBanner = 780+'px';
			$('.banner02').css('height',oBanner);
			//$('.video1').css('height',oBanner)
    		}else if(iWSon<1920){
				oBanner = iWSon * (780/1920)+'px';
			$('.banner02').css('height',oBanner);
			//$('.video1').css('height',oBanner)
				}
				
		}
     }
	 })
}
//焦点图幻灯片大图切换高度问题
function ImgHeight(){
	var oBanner = document.getElementById('banner');
	var iWSon = document.documentElement.clientWidth ;
	if(iWSon>=1920){
			 
			 oBanner = 780+'px';
			 //alert(iWSon+'d'+oBanner)
			 //alert(oBanner);
			$('#banner,.slide_container,.rslides,.caption,.wz_caption').css('height',oBanner);
    		}else if(iWSon<1920){
				//alert(iWSon)
				 oBanner = iWSon * (780/1920)+'px';
			$('#banner,.slide_container,.rslides,.caption,.wz_caption').css('height',oBanner);}
	
		 
	$(window).resize(function(){
		var iWSon = document.documentElement.clientWidth ;
		 if(iWSon>=1920){
			 
			 oBanner = 780+'px';
			 //alert(iWSon+'d'+oBanner)
			 //alert(oBanner);
			$('#banner,.slide_container,.rslides,.caption,.wz_caption').css('height',oBanner);
    		}else if(iWSon<1920){
				//alert(iWSon)
				 oBanner = iWSon * (780/1920)+'px';
			$('#banner,.slide_container,.rslides,.caption,.wz_caption').css('height',oBanner);
				
		window.onscroll = window.onresize = function (){
			var iWSon = document.documentElement.clientWidth ;
			if(iWSon>=1920){
			 oBanner = 780+'px';
			$('#banner,.slide_container,.rslides,.caption,.wz_caption').css('height',oBanner);
    		}else if(iWSon<1920){
				oBanner = iWSon * (780/1920)+'px';
			$('#banner,.slide_container,.rslides,.caption,.wz_caption').css('height',oBanner);
				}
				
		}
     }
	 })
}

function tab(id){
	var oTab = $(id);
	var oLi = oTab.find('ul').eq(0).find('li');
	var oDd = oTab.find('dd')
	 oLi.hover(function(e) {
		 var thisLi =$(this);
            //$(this).addClass('active').sibling('li').removeClass('active');
           //setTimeout(function(){
			   thisLi.siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
				thisLi.addClass('active');                            // 添加当前元素的样式
				oDd.css('display','none');
				oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
			   }
			   //,100)
        //}
		);
	}

function pass(){
	$('.pass_title').click(function(){
		$(this).parent('li').children('.passToggle').slideToggle(300);
		$(this).parent('li').toggleClass('current')
		})
	}

//判断子菜单的宽度
function snavWidth(){
	var liWidth = $("#nav li").width()
	$('.subNav').css('width',liWidth)
	$(window).resize(function(){
		var liWidth = $("#nav li").width()
		$('.subNav').css('width',liWidth)
		})
	
	}



 //根据参数名获得该参数  pname等于想要的参数名      
     function getParam(pname) {                    
      var params = location.search.substr(1); //  获取参数 平且去掉？   
      //alert(params);   
         
      var ArrParam = params.split('&');            if (ArrParam.length == 1) {          
      //只有一个参数的情况               
      return params.split('=')[1];            }           
      else {                //多个参数参数的情况              
       for (var i = 0; i < ArrParam.length; i++) {                  
        if (ArrParam[i].split('=')[0] == pname) {                                        
          return ArrParam[i].split('=')[1];                    }                }            }                }
    
     $(function() {           
	 var mao = $("#" + getParam("s")); //获得锚点          
     if (mao.length > 0) {//判断对象是否存在              
     var pos = mao.offset().top;              
     var poshigh = mao.height(); 
	 var headerHeight = $('.header').height();
	 // alert(pos)  
	 // alert(poshigh)
	 // alert(headerHeight)      
      $("html,body").animate({ scrollTop: pos-180}, 1000);           }       }); 