$(document).ready(function(){
    $('#CecutientWrapper').css("visibility","hidden");
    if ($.cookie("CecutientCookie")=="on"){
        CecutientOn();
        if ($.cookie("fonts")=="small"){SmallFonts();}
        if ($.cookie("fonts")=="medium"){MediumFonts();}
        if ($.cookie("fonts")=="big"){BigFonts();}
        if ($.cookie("image")=="on"){ImageOn();}
        if ($.cookie("image")=="off"){ImageOff();}
        if ($.cookie("style")=="white"){WhiteStyle();}
        if ($.cookie("style")=="black"){BlackStyle();}
        if ($.cookie("style")=="blue"){BlueStyle();}
        if ($.cookie("style")=="green"){GreenStyle();}
    }
   
    /*Включение стилей для слабовидящих*/
    $('#CecutientOn').click(function(){CecutientOn();});
       
    /*Включение выключение изображений*/
    $('#ImageOn').click(function(){ImageOn();});
    $('#ImageOff').click(function(){ImageOff();});
   
    /*Размер шрифта*/
    $('#SmallFonts').click(function(){SmallFonts();});
    $('#MediumFonts').click(function(){MediumFonts();});
    $('#BigFonts').click(function(){BigFonts();});
   
    /*Цветовая схема*/
    $('#WhiteStyle').click(function(){WhiteStyle();});
    $('#BlackStyle').click(function(){BlackStyle();});
    $('#BlueStyle').click(function(){BlueStyle();});
    $('#GreenStyle').click(function(){GreenStyle();});
   
    /*Функция обработчик включения стилей*/
    function CecutientOn(){
        $('#CecutientOn').css("display","none");
        $('#CecutientOff').css("display","inline-block");
        $('#CecutientTop, .TopMenu').css("display","block");
        $('body, html').css("background","#fff");            
        $('#wrapper *').css({"background":"#fff","color":"#000"});
        $('#CecutientBtn').css({"background":"#fff", "background-image":"url('blind.png')"});
        $('#BlackStyle').css({"background":"#000","color":"#fff"});
        $('#BlueStyle').css({"background":"#9DD1FF","color":"#000"});
        $('#GreenStyle').css({"background":"#A9E44D","color":"#000"});
        $.cookie("CecutientCookie", "on", {
            expires: 365,
            path: '/'
        });
        return false;
    }
   
    /*Функции изменения размера шрифта*/
    function SmallFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrapper').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
            $.cookie("fonts", "small", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function MediumFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrapper').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
            $('#block-block-15').removeClass("text_links1").addClass("SmallFonts");
            $.cookie("fonts", "medium", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function BigFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrapper').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
            $('#block-block-15').removeClass("text_links1").addClass("SmallFonts");
            $.cookie("fonts", "big", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
   
    /*Функции обработчик отображения изображений*/
    function ImageOn(){
        if ($.cookie("CecutientCookie")=="on"){
            $('img').css("display","inline-block");
            $('#ImageOff').css("display","inline-block");
            $('#ImageOn').css("display","none");
            $.cookie("image", "on", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function ImageOff(){
        if ($.cookie("CecutientCookie")=="on"){
            $('img').css("display","none");
            $('#ImageOff').css("display","none");
            $('#ImageOn').css("display","inline-block");
            $('#CecutientBtn img').css("display","inline-block");
            $.cookie("image", "off", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
   
    /*Функции изменения цветовой схема*/
    function WhiteStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            $('body, html').css("background","#fff");            
            $('#wrapper *').css({"background":"#fff","color":"#000"});
            $('#CecutientWrapper').css({"background":"#fff","color":"#000"});
            $('#CecutientBlock').css({"background":"#fff","color":"#000"});
            $('#CecutientOn').css({"background":"#fff","color":"#000"});
            $('#CecutientOff').css({"background":"#fff","color":"#000"});
            $('#ImageOn').css({"background":"#fff","color":"#000"});
            $('#ImageOff').css({"background":"#fff","color":"#000"});
            $('#SmallFonts').css({"background":"#fff","color":"#000"});
            $('#MediumFonts').css({"background":"#fff","color":"#000"});
            $('#BigFonts').css({"background":"#fff","color":"#000"});
            $('#WhiteStyle').css({"background":"#fff","color":"#000"});
            $('#BlackStyle').css({"background":"#000","color":"#fff"});
            $('#BlueStyle').css({"background":"#9DD1FF","color":"#000"});
            $('#GreenStyle').css({"background":"#A9E44D","color":"#000"});
            $('#CecutientBtn').css({"background":"#fff", "background-image":"url('blind.png')"});
            $.cookie("style", "white", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function BlackStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            $('body, html').css("background","#000");
            $('#wrapper *').css({"background":"#000","color":"#fff"});
            $('#CecutientWrapper').css({"background":"#fff","color":"#000"});
            $('#CecutientBlock').css({"background":"#fff","color":"#000"});
            $('#CecutientOn').css({"background":"#fff","color":"#000"});
            $('#CecutientOff').css({"background":"#fff","color":"#000"});
            $('#ImageOn').css({"background":"#fff","color":"#000"});
            $('#ImageOff').css({"background":"#fff","color":"#000"});
            $('#SmallFonts').css({"background":"#fff","color":"#000"});
            $('#MediumFonts').css({"background":"#fff","color":"#000"});
            $('#BigFonts').css({"background":"#fff","color":"#000"});
            $('#WhiteStyle').css({"background":"#fff","color":"#000"});
            $('#BlackStyle').css({"background":"#000","color":"#fff"});
            $('#BlueStyle').css({"background":"#9DD1FF","color":"#000"});
            $('#GreenStyle').css({"background":"#A9E44D","color":"#000"});
            $('#CecutientBtn').css({"background":"#fff", "background-image":"url('blind.png')"});
            $.cookie("style", "black", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function BlueStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            $('body, html').css("background","#9DD1FF");           
            $('#wrapper *').css({"background":"#9DD1FF","color":"#063462"});
            $('#CecutientWrapper').css({"background":"#fff","color":"#000"});
            $('#CecutientBlock').css({"background":"#fff","color":"#000"});
            $('#CecutientOn').css({"background":"#fff","color":"#000"});
            $('#CecutientOff').css({"background":"#fff","color":"#000"});
            $('#ImageOn').css({"background":"#fff","color":"#000"});
            $('#ImageOff').css({"background":"#fff","color":"#000"});
            $('#SmallFonts').css({"background":"#fff","color":"#000"});
            $('#MediumFonts').css({"background":"#fff","color":"#000"});
            $('#BigFonts').css({"background":"#fff","color":"#000"});
            $('#WhiteStyle').css({"background":"#fff","color":"#000"});
            $('#BlackStyle').css({"background":"#000","color":"#fff"});
            $('#BlueStyle').css({"background":"#9DD1FF","color":"#000"});
            $('#GreenStyle').css({"background":"#A9E44D","color":"#000"});
            $('#CecutientBtn').css({"background":"#fff", "background-image":"url('blind.png')"});
            $.cookie("style", "blue", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
    function GreenStyle(){
        if ($.cookie("CecutientCookie")=="on"){
            $('body, html').css("background","#3B2716"); 
            $('#wrapper *').css({"background":"#3B2716","color":"#A9E44D"});
            $('#CecutientWrapper').css({"background":"#fff","color":"#000"});
            $('#CecutientBlock').css({"background":"#fff","color":"#000"});
            $('#CecutientOn').css({"background":"#fff","color":"#000"});
            $('#CecutientOff').css({"background":"#fff","color":"#000"});
            $('#ImageOn').css({"background":"#fff","color":"#000"});
            $('#ImageOff').css({"background":"#fff","color":"#000"});
            $('#SmallFonts').css({"background":"#fff","color":"#000"});
            $('#MediumFonts').css({"background":"#fff","color":"#000"});
            $('#BigFonts').css({"background":"#fff","color":"#000"});
            $('#WhiteStyle').css({"background":"#fff","color":"#000"});
            $('#BlackStyle').css({"background":"#000","color":"#fff"});
            $('#BlueStyle').css({"background":"#9DD1FF","color":"#000"});
            $('#GreenStyle').css({"background":"#A9E44D","color":"#000"});
            $('#CecutientBtn').css({"background":"#fff", "background-image":"url('blind.png')"});
            $.cookie("style", "green", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    }
   
    /*Отключение версии для слабовидящих*/
    $('#CecutientOff').click(function(){
        $.cookie("CecutientCookie", null);
        $.cookie("style", null);
        $.cookie("image", null);
        $.cookie("fonts", null);
        window.location.reload();
        return false;
    });
});

