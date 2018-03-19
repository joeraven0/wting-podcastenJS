$(document).ready(function() {


    //To generate fadeIn-effect later
    $('.application').fadeTo('fast', '0', );
    //Hide invisible content to avoid content-block
    $('.application').slideUp();
    //Display app-buttons if javascript is activated
    $('.smallapp').css('display', ' inline');
    $('#ratingBad').css('display', ' inline');
    $('#ratingGood').css('display', ' inline');
     $('#ratingEpisode').css('display', ' inline');


//Highlight when hovering a button
    $('#app1, #app2, #app3, #app4').mouseover(function() {      
     var elementId= $(this).attr('id'); 
        $hovering('#'+elementId,true);
    });
    $('#app1, #app2, #app3, #app4').mouseout(function() {
      var elementId= $(this).attr('id'); 
        $hovering('#'+elementId,false);
    });
    $hovering = function(hoverid,status) {   
      if (status==true) {
        $(hoverid).css('background-color', 'lightgrey');
      }
      else{
        $(hoverid).css('background-color', 'white');
      }
    }

//Remove elements
    $('#removeHeader').click(function() {
        $('header').toggle();
        if ($('header').is(':hidden')) {
            $('main').css('height', 'calc(100% - (2px + 90px + 40px))');
        } else {
            $('main').css('height', 'calc(100% - (2px + 20px + 190px + 90px + 40px))');
        }
    });

    $('#removeHeaderimg').click(function() {
        $('#header_img').css('background-image', 'none');
        $('#text').css('color', 'black');
    });

//Change
$('#opacityParagraphs').click(function(){
$changeOpacity('p', 0.2);
});
$('#opacityHeaders').click(function() {
    $changeOpacity('h1,h2,h3,h4', 0.4);
});
$changeOpacity = function(element, opacity){  
    $(element).fadeTo('slow', opacity);  
};



//HIDE AND SHOW APP HANDLER
//Open application(div) 1, 2 or 3
    $('#app1').click(function() {
        $openapp(1);
    });

    $('#app2').click(function() {
        $openapp(2);
    });
    $('#app3').click(function() {
        $openapp(3);
    });
    //Common function to open specific app
    $openapp = function(appnumber) {
        $('#application' + appnumber).slideDown();
        $('#application' + appnumber).animate({ left: '250px', top: '50px', opacity:'1'});
        if (appnumber != 1) {
            $closeapp('1');
        }
        if (appnumber != 2) {
            $closeapp('2');
        }
        if (appnumber != 3) {
            $closeapp('3');
        }
    }
    //Close button close all apps
    $('.closeBtn').click(function() {
        $closeapp('all');
    });
    //Common function to close one or all apps
    $closeapp = function(appnumber) {
        if (appnumber == 'all') {
            $('.application').animate({ left: '5px'});
            $('.application').slideUp();
            $('.application').fadeTo(200, '0', );
        } else {
            $('#application' + appnumber).animate({ left: '5px' });
            $('#application' + appnumber).slideUp();
            $('#application' + appnumber).fadeTo(200, '0', );
        }
    }
});