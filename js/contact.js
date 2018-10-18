$(function () {
    //加入我们
    var falg = true;
    var falg2 = true;
    var falg3 = true;
    var falg4 = true;
    $('.tab-pane1 .posttit1').click(function () {
        if(falg){
            $(this).children('.post-des').show(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowup.png')
            falg = false
        }else {
            $(this).children('.post-des').hide(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowdown.png')
            falg = true
        }
    })
    $('.tab-pane1 .posttit2').click(function () {
        if(falg2){
            $(this).children('.post-des').show(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowup.png')
            falg2 = false
        }else {
            $(this).children('.post-des').hide(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowdown.png')
            falg2 = true
        }
    })
    $('.tab-pane1 .posttit3').click(function () {
        if(falg3){
            $(this).children('.post-des').show(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowup.png')
            falg3 = false
        }else {
            $(this).children('.post-des').hide(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowdown.png')
            falg3 = true
        }
    })
    $('.tab-pane1 .posttit4').click(function () {
        if(falg4){
            $(this).children('.post-des').show(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowup.png')
            falg4 = false
        }else {
            $(this).children('.post-des').hide(100)
            $(this).children('.post-title').children('i').children('img').attr('src','images/small/arrowdown.png')
            falg4 = true
        }
    })



    $('.footer .post-title').click(function () {
        if(falg){
            $(this).siblings().show(100)
            $(this).children('i').children('img').attr('src','images/small/arrowup1.png')
            falg = false
        }else {
            $(this).siblings().hide(100)
            $(this).children('i').children('img').attr('src','images/small/arrowdown1.png')
            falg = true
        }
    })


})
