$(function () {
    var currentIndex = parseInt(window.location.hash.split('#')[1])

    $('.aco_nav li').eq(currentIndex).addClass('active').siblings().removeClass('active')
    $('.aco_cont li').eq(currentIndex).addClass('active').siblings().removeClass('active')

    $('.foot_hexin a').click(function () {
        var currPageNum = parseInt($(this).attr('href').split('#')[1])
        $('.aco_nav li').eq(currPageNum).addClass('active').siblings().removeClass('active')
        $('.aco_cont li').eq(currPageNum).addClass('active').siblings().removeClass('active')
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
    })

    $('.aco_nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        var clickNum = $(this).index();
        $('.aco_cont li').eq(clickNum).addClass('active').siblings().removeClass('active')
    })


    $(window).scroll(function () {
        if($(this).scrollTop()>500){
            $('.aco_nav').css({
                "position":'fixed',
                "top":'64px',
                "width":'100%',
                "left":'0'
            })
            $('.aco_nav li').click(function () {
                document.documentElement.scrollTop = 480
                document.body.scrollTop = 480
            })
        }else{
            $('.aco_nav').css({
                "position":'relative',
                "top":'0px',
                "width":'92%',
                "left":'0'
            })
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            $('.aco_nav li').click(function () {
                document.documentElement.scrollTop = scrollTop
                document.body.scrollTop = scrollTop
            })
        }
    })


})
