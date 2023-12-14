$(function(){


    $('body').mousemove(function(e){
       console.log('x:'+e.clientX);
        console.log('y:'+e.clientY);

        gsap.to('.cursor',{
            x:e.clientX,
            y:e.clientY,
            stagger:0.02,
        })
    })


    //intro
    //     new TypeIt(".title-text em", {
    //         strings: ["Positive", "Earnest", "Challenging"],
    //         speed: 100,
    //         breakLines: false,
    //         startDelay: 300,
    //     }).go();

    // const intro = gsap.timeline({})
    
    // intro
    // .addLabel('b')
    // .to('.sc-headline .bg',{ delay:9, opacity:0, zIndex: -1,
    //     onComplete:function(){
    //         $('body').removeClass('hidden');
    //     }
    // },'b')


    //프리뷰
    var now_img, next_img;

setInterval(function fade_change(){
        now_img = $(".sc-preview .img-container img:eq(0)");
        next_img = $(".sc-preview .img-container img:eq(1)");
        next_img.addClass("active").css("opacity",0).animate({"opacity":1},500, function(){
            $(".sc-preview .img-container").append(now_img);
            now_img.removeClass("active");
        })
    },3000);

    // work 스크롤이벤트
    $('.sc-work .pf').each(function(index,element){
        xVal=$(this).data('x');
        const pf = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"0% 60%", 
            end:"100% 0%",
        },
        })
        .from( $(this).find('.img-container') ,{opacity:0,yPercent:10})
        .from( $(this).find('.textbox .keyword'),{opacity:0,yPercent:60})
        .from( $(this).find('.textbox .pf-title'),{opacity:0,yPercent:60})
    
    })

    //  메일주소복사
    var clipboard = new ClipboardJS('.address');
      
    clipboard.on('success', function(e) {
        alert('복사 완료!');
    });
  
    clipboard.on('error', function(e) {
    });

    
})