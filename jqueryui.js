$(document).ready(function() {
$('#ratingEpisode').delay(2000).animate({ left: '100px' })
$('#ratingEpisode').delay(1).animate({ left: '5px' })
$('#ratingEpisode').delay(1).animate({ left: '50px' })
$('#ratingEpisode').delay(1).animate({ left: '5px' })

    $( "#navbar" ).sortable();
    

    $(".application").draggable();

    $("#ratingEpisode").draggable();
    $("#ratingGood").droppable({
        drop: function(event, ui) {
            $('#ratingGood').animate({ left: '5px' })
                .find("h2")
                .html("Tack!")
            $('#ratingBad').remove()
            $('#ratingEpisode').remove();
        }
    });

    $("#ratingBad").droppable({
        drop: function(event, ui) {
            $('#ratingBad').animate({ left: '5px' })
                .find("h2")
                .html("Tack för ingenting...")
            $('#ratingGood').fadeOut()
            $('#ratingEpisode').remove()
            $("header").delay(300).fadeOut()
            $("nav").delay(700).fadeOut()
            $("main").delay(1300).fadeOut()
            $("#sidebar").delay(1800).fadeOut()
            $("footer").delay(2000).fadeOut()
            $("#angryVisitor").delay(100).fadeIn()
            $("#angryVisitor").delay(2200).animate({ top: '300px' })
            $(".ratingGoodagain").delay(2800).fadeIn()
            $(".ratinggoodbox").delay(2800).fadeIn();
        }
    });
});

$(function() {
    var greens = 0;
    $("#rating1").draggable();
    $("#rating2").draggable();
    $("#rating3").draggable();
    $("#rating4").draggable();
    $("#goodbox1").droppable({
        drop: function(event, ui) {
            $('#goodbox1').animate({ backgroundColor: 'green' })
            greens = greens + 1;
            if (greens == 4) {
                   resetPage();           
            };
        }
    });
    $("#goodbox2").droppable({
        drop: function(event, ui) {
            $('#goodbox2').animate({ backgroundColor: 'green' })
            greens = greens + 1;
            if (greens == 4) {
                   resetPage();           
            };
        }

    });
    $("#goodbox3").droppable({
        drop: function(event, ui) {
            $('#goodbox3').animate({ backgroundColor: 'green' })
            greens = greens + 1;
            if (greens == 4) {
                   resetPage();           
            };
        }

    });
    $("#goodbox4").droppable({
        drop: function(event, ui) {
            $('#goodbox4').animate({ backgroundColor: 'green' })
            greens = greens + 1
            if (greens == 4) {
                   resetPage();           
            };


        }

    });

function resetPage(){
  $('#ratingGood').delay(100).fadeIn()
                    .find("h2")
                    .html("Tack för att du gillade!");
                    $("#ratingGood").delay(0).animate({ top: '300px' });
                    $("#ratingGood").delay(0).animate({ left: '300px' });
                $("header").delay(500).fadeIn();
                $("nav").delay(1700).fadeIn();
                $("main").delay(2900).fadeIn();
                $("#sidebar").delay(3200).fadeIn();
                $("footer").delay(4500).fadeIn();
                $("#angryVisitor").delay(100).fadeOut();
                $("#angryVisitor").delay(300).animate({ top: '-300px' });
                $('#ratingBad').delay(100).fadeOut();
                $('.ratinggoodbox').delay(100).fadeOut();
                $('.ratingGoodagain').delay(100).fadeOut();
                $("#ratingGood").delay(3000).animate({ left: '5px' });
              };

});