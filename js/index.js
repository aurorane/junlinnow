$(function () {
    //解决方案部分
    $('.choose').click(function () {
        $('.choose').addClass('active');
        $('.choose > .icon').addClass('active');
        $('.pay').removeClass('active');
        $('.wrap').removeClass('active');
        $('.ship').removeClass('active');
        $('.mobile').removeClass('active');
        $('.pay > .icon').removeClass('active');
        $('.wrap > .icon').removeClass('active');
        $('.ship > .icon').removeClass('active');
        $('.mobile > .icon').removeClass('active');
        $('#line').addClass('one');
        $('#line').removeClass('two');
        $('#line').removeClass('three');
        $('#line').removeClass('four');
        $('#line').removeClass('five');
    });
    $('.pay').click(function () {
        $('.pay').addClass('active');
        $('.pay > .icon').addClass('active');
        $('.choose').removeClass('active');
        $('.wrap').removeClass('active');
        $('.ship').removeClass('active');
        $('.mobile').removeClass('active');
        $('.choose > .icon').removeClass('active');
        $('.wrap > .icon').removeClass('active');
        $('.ship > .icon').removeClass('active');
        $('.mobile > .icon').removeClass('active');
        $('#line').addClass('two');
        $('#line').removeClass('one');
        $('#line').removeClass('three');
        $('#line').removeClass('four');
        $('#line').removeClass('five');
    });
    $('.wrap').click(function () {
        $('.wrap').addClass('active');
        $('.wrap > .icon').addClass('active');
        $('.pay').removeClass('active');
        $('.choose').removeClass('active');
        $('.ship').removeClass('active');
        $('.mobile').removeClass('active');
        $('.pay > .icon').removeClass('active');
        $('.choose > .icon').removeClass('active');
        $('.ship > .icon').removeClass('active');
        $('.mobile > .icon').removeClass('active');
        $('#line').addClass('three');
        $('#line').removeClass('two');
        $('#line').removeClass('one');
        $('#line').removeClass('four');
        $('#line').removeClass('five');
    });
    $('.ship').click(function () {
        $('.ship').addClass('active');
        $('.ship > .icon').addClass('active');
        $('.pay').removeClass('active');
        $('.wrap').removeClass('active');
        $('.choose').removeClass('active');
        $('.mobile').removeClass('active');
        $('.pay > .icon').removeClass('active');
        $('.wrap > .icon').removeClass('active');
        $('.choose > .icon').removeClass('active');
        $('.mobile > .icon').removeClass('active');
        $('#line').addClass('four');
        $('#line').removeClass('two');
        $('#line').removeClass('three');
        $('#line').removeClass('one');
        $('#line').removeClass('five');
    });
    $('.mobile').click(function () {
        $('.mobile').addClass('active');
        $('.mobile > .icon').addClass('active');
        $('.pay').removeClass('active');
        $('.wrap').removeClass('active');
        $('.choose').removeClass('active');
        $('.ship').removeClass('active');
        $('.pay > .icon').removeClass('active');
        $('.wrap > .icon').removeClass('active');
        $('.choose > .icon').removeClass('active');
        $('.ship > .icon').removeClass('active');
        $('#line').addClass('five');
        $('#line').removeClass('two');
        $('#line').removeClass('three');
        $('#line').removeClass('one');
        $('#line').removeClass('four');
    });
    $('.choose').click(function () {
        $('#first').addClass('active');
        $('#second').removeClass('active');
        $('#third').removeClass('active');
        $('#fourth').removeClass('active');
        $('#fifth').removeClass('active');
    });
    $('.pay').click(function () {
        $('#first').removeClass('active');
        $('#second').addClass('active');
        $('#third').removeClass('active');
        $('#fourth').removeClass('active');
        $('#fifth').removeClass('active');
    });
    $('.wrap').click(function () {
        $('#first').removeClass('active');
        $('#second').removeClass('active');
        $('#third').addClass('active');
        $('#fourth').removeClass('active');
        $('#fifth').removeClass('active');
    });
    $('.ship').click(function () {
        $('#first').removeClass('active');
        $('#second').removeClass('active');
        $('#third').removeClass('active');
        $('#fourth').addClass('active');
        $('#fifth').removeClass('active');
    });
    $('.mobile').click(function () {
        $('#first').removeClass('active');
        $('#second').removeClass('active');
        $('#third').removeClass('active');
        $('#fourth').removeClass('active');
        $('#fifth').addClass('active');
    });

    //关于我们
    $("#timeLine").timeLine({
        w: 900
    });


    //核心技术


    //首页banner内容
    var width = $('.move').width()
    var height = $('.move').height()

    moveTo(width,height)

    window.onresize=function () {
        var width = $('.move').width();
        var height = $('.move').height()
        moveTo(width, height)
    }

    $('.arrowToDown').click(function () {
        var  t = $(this).offset().top;
        $('body,html').animate({'scrollTop':t+60},1000)
    })

})


var moveTo = function (width,height) {
    var timm = 0;
    var n = 0
    timm = setInterval(function () {
        var arr  = ["12px","15px","20px","22px","24px","26px","24px","22px","20px","15px","12px"];
        var fontOpacity = ['.3','.5','.6','.7','.8','1','.8','.7','.6','.5','.3']
        var arr1  = ["24px","22px","21px","20px","15px","12px","15px","20x","21px","22px",'24px'];
        var fontOpacity1 = ['1','.8','.6','.5','.4','.3','.4','.5','.6','.8','1']
        var arr2  = ["14px","16px","22px","23px","24px","23px","22px","18px","16x","14px"];
        var fontOpacity2 = ['.3','.4','.6','.8','1','.8','.7','.5','.4','.3']
        var arr3  = ["22px","21px","20px","18px","16px",'14px','12px','14px','16px','18px','20px','21px','22px'];
        var fontOpacity3 = ['1','.8','.7','.6','.5','.4','.3','.4','.5','.6','.7','.8','1']
        var random1 = (Math.random()*width) + 'px';
        var random3 = (Math.random()*width) + 'px';
        var random5 = (Math.random()*width) + 'px';
        var random2 = (Math.random()*height) + 'px';
        var random4 = (Math.random()*height) + 'px';
        var random6 = (Math.random()*height) + 'px';
        $('.one').animate({
            'top':random2 ,
            'left':random1,
            'fontSize':arr[n%arr.length],
            'opacity':fontOpacity[n%fontOpacity.length]
        },10000)
        $('.one1').animate({
            'top':random4,
            'left':random3,
            'fontSize':arr3[n%arr.length],
            'opacity':fontOpacity3[n%fontOpacity3.length]
        },8500)
        $('.one2').animate({
            'top':random2,
            'left':random2,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },9000)
        $('.one3').animate({
            'top':random3,
            'left':random3,
            'fontSize':arr3[n%arr.length]
        },8800)
        $('.two').animate({
            'top':random6,
            'left':random5,
            'fontSize':arr1[n%arr.length],
            'opacity':fontOpacity1[n%fontOpacity1.length]
        },9200)
        $('.two1').animate({
            'top':random4 ,
            'left':random1,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },9400)
        $('.two2').animate({
            'top':random6,
            'left':random1,
            'fontSize':arr1[n%arr.length],
            'opacity':fontOpacity1[n%fontOpacity1.length]
        },9600)
        $('.two3').animate({
            'top':random4,
            'left':random5,
            'fontSize':arr3[n%arr.length],
            'opacity':fontOpacity3[n%fontOpacity3.length]
        },9500)
        $('.three').animate({
            'top':random2 ,
            'left':random5,
            'fontSize':arr[n%arr.length],
            'opacity':fontOpacity[n%fontOpacity.length]
        },8700)
        $('.three1').animate({
            'top':random4 ,
            'left':random5,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },8900)
        $('.three3').animate({
            'top':random6 ,
            'left':random1,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },8600)
        $('.three2').animate({
            'top':random2 ,
            'left':random6,
            'fontSize':arr3[n%arr.length],
            'opacity':fontOpacity3[n%fontOpacity3.length]
        },9100)
        $('.four').animate({
            'top':random2 ,
            'left':random3,
            'fontSize':arr2[n%arr.length],
            'opacity':fontOpacity2[n%fontOpacity2.length]
        },9300)
        $('.four2').animate({
            'top':random1 ,
            'left':random4,
            'fontSize':arr[n%arr.length],
            'opacity':fontOpacity[n%fontOpacity.length]
        },9700)
        n++;
    },1000)
}
