$(function () {
    function normal() {
    $('.out-circle').animate({
        width:'153px',
        height:'153px',
    },800).queue(function () {
        $(this).animate({
            width:'143px',
            height:'143px'
        },800).dequeue();
    })
    $('.inner-circle').css({
        border:'15px solid #fff'
    }).delay(1600).animate({
        width:'78px',
        height:'78px',
    },1000).queue(function () {
        $(this).animate({
            width:'90px',
            height:'90px'
        },1000).dequeue();
    })
    }
    function speed() {
        $('.out-circle').animate({
            width:'153px',
            height:'153px',
        },400).queue(function () {
            $(this).animate({
                width:'143px',
                height:'143px'
            },400).dequeue();
        })
        $('.inner-circle').delay(800).css({
            border:'15px solid red'
        }).animate({
            width:'78px',
            height:'78px',
        },600).queue(function () {
            $(this).animate({
                width:'90px',
                height:'90px'
            },600).dequeue();
        })
    }
    function second() {
        $('.out-circle').animate({
            width:'153px',
            height:'153px',
        },400).queue(function () {
            $(this).animate({
                width:'143px',
                height:'143px'
            },400).dequeue();
        })
        $('.inner-circle').delay(800).css({
            border:'15px solid green'
        }).animate({
            width:'78px',
            height:'78px',
        },600).queue(function () {
            $(this).animate({
                width:'90px',
                height:'90px'
            },600).dequeue();
        })
    }
    function ciacle() {
        setTimeout(function () {
            $('.words span').text('HI!');
            normal();//2000
        },0);
        setTimeout(function () {
            $('.words span').text('我很生气');
            speed();//2000
        },3600);
        setTimeout(function () {
            $('.words span').text('我很高兴');
            second();//2000
        },5600);
    }
    ciacle();
    setInterval(ciacle,8600);
})