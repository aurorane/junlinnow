$(function () {
    $("#timeLine").timeLine({
        w: 900
    });

    var $slidepic = $('#slidepic');
    var aLi = $slidepic.find('li');
    var off = true;
    var pos = [
        {
            width:450,
            height:480,
            left:-173,
            top:42,
            opacity:0.5,
            z:3
        },
        {
            width:500,
            height:520,
            left:50,
            top:20,
            opacity:1,
            z:4
        },
        {
            width:450,
            height:480,
            left:325,
            top:42,
            opacity:0.5,
            z:3
        }
    ]
    fnMove()
    $slidepic.find('.prev').on('click',function(){
        if(off){
            off = false;
            fnMove(true)
        }
    })

    $slidepic.find('.next').on('click',function(){
        if(off){
            off = false;
            fnMove(false)
        }
    })

    function fnMove(b){
        if(typeof(b) != 'undefined'){
            if(b){
                pos.push(pos.shift())
            }else{
                pos.unshift(pos.pop())
            }
        }
        $.each(pos, function(i, val) {
            aLi.eq(i).css('zIndex',pos[i].z).stop().animate(pos[i],500,function(){
                off = true;
            });
        });
    }

    $slidepic.hover(function(){
        $(this).find('.toggle').fadeIn();
    },function(){
        $(this).find('.toggle').fadeOut();
    })


})


