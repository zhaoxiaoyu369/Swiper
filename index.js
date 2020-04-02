function Swiper(){
    var sign={
        timer:2000,
        container:'#box',
        imgSrc:['img/b1.png','img/b2.png','img/b3.png','img/b4.png','img/b5.png']
    },
    index=1,
    timer,
    $navbar;
    $slider=$('<div class="slider" id="slider"></div>'),
    $left=$('<span id="left"><</span>'),
    $right=$('<span id="right">></span>'),
    $navs=$('<ul class="nav" id="navs"></ul>'),
   
    this.init=function(conf){
        $(sign.container).append($slider);
        $(sign.container).append($left);
        $(sign.container).append($right);
        $(sign.container).append($navs);
        

        for(var i=0;i<sign.imgSrc.length;i++){
            var $slide=$('<div class="slide"><img src="'+sign.imgSrc[i]+'" alt=""></div>');
            var $li=$('<li>'+(i+1)+'</li>');
            $slider.append($slide);
            $navs.append($li);
        }
        var $slide=$('<div class="slide"><img src="'+sign.imgSrc[sign.imgSrc.length-1]+'" alt=""></div>')
        $slider.append($slide);
       
        $slide=$('<div class="slide"><img src="'+sign.imgSrc[0]+'" alt=""></div>');
        $slider.append($slide);
        $navbar=$navs.children();
        
        function navclick(){
        
            $navbar.siblings().removeClass('active');  
            $navbar.eq(index-1).addClass('active');
        }
        navclick();
        
        $navbar.each(function(i){
            $($navbar[i]).click(function(){
                index=$(this).index()+1;
                $slider.stop().animate({left:index*-1200},300);
                navclick()
            })
        })

        timer=setInterval(next,sign.timer);
        
        $(sign.container).mouseover(function(){
            $left.css("opacity",0.5);
            $right.css("opacity",0.5);
            clearInterval(timer);
            })
            
            $(sign.container).mouseout(function(){
            $left.css("opacity",0);
            $right.css("opacity",0);
            timer=setInterval(next,sign.timer);
        })

        function prev(){
            index--;
            if(index===0){
                $slider.css("left",sign.imgSrc.length*-1200+'px');
                index=sign.imgSrc.length;
            }else{
                $slider.stop().animate({left:index*-1200},300);
            }
            navclick();
        }
        function next(){
        index++;
        if(index===(sign.imgSrc.length+1)){
            $slider.css("left","-1200px");
            index=1;
        }else{
            $slider.stop().animate({left:index*-1200},300);
        }
            navclick();
        }         
        $left.click(prev);     
        $right.click(next);       
    }
}