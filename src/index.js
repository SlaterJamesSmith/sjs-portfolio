import './sass/styles.scss';

$( document ).ready(function() {

  let clickDevDisabled = false;
  $(".dev").click(function() {
    if (clickDevDisabled) {
        return;
      }
    $('.transform').toggleClass('transform-active');
    $('.dev').toggleClass('dev-active');


    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');


    if($('.toggle-phone-view').is(':visible')){
       $('.proficiencies').toggle();
       $('.proficiencies-lag1').toggle();
       $('.proficiencies-lag2').toggle();
    }

    if ($('.toggle-phone-view').is(':hidden')) {
      if($('.proficiencies').is(':visible')){
         $('.proficiencies').fadeOut(1000);
         $('.proficiencies-lag1').fadeOut(400);
         $('.proficiencies-lag2').fadeOut(150);
      }
      else{
         $('.proficiencies').fadeIn(2000);
         setTimeout(function () { $('.proficiencies-lag1').fadeIn(700); }, 800);
         setTimeout(function () { $('.proficiencies-lag2').fadeIn(700); }, 900);
      }
    }

  if ($('.toggle-phone-view').is(':hidden')) {
    clickDevDisabled = true;
      setTimeout(function(){clickDevDisabled = false;}, 1500);
    }
  });




  let clickProdDisabled = false;
  $(".prod").click(function() {
    if (clickProdDisabled) {
        return;
      }




    $('.transform-prod').toggleClass('transform-active-prod');
    $('.prod').toggleClass('prod-active');

    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    if($('.graphics-content').is(':visible')){
       $('.graphics-content').fadeOut(1000);
       $('.graphics-content-img').fadeOut(150);
    }
    else{
      $('.graphics-content').fadeIn(1500);
      setTimeout(function () { $('.graphics-content-img').fadeIn(550); }, 950);
    }
    clickProdDisabled = true;
      setTimeout(function(){clickProdDisabled = false;}, 1500);
  });





  $(".vid").click(function() {


    $('.transform-vid').toggleClass('transform-active-vid');
    $('.vid').toggleClass('vid-active');
    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    if($('.toggle-phone-view').is(':visible')){
       $('.vid-content').toggle();
       $('.vid-content-lag1').toggle();
       $('.vid-content-lag2').toggle();
    }

    if ($('.toggle-phone-view').is(':hidden')) {
      if($('.vid-content').is(':visible')){
         $('.vid-content').fadeOut(1000);
         $('.vid-content-lag1').fadeOut(150);
         $('.vid-content-lag2').fadeOut(150);
      }
      else{
         $('.vid-content').fadeIn(2000);
         setTimeout(function () { $('.vid-content-lag1').fadeIn(700); }, 800);
         setTimeout(function () { $('.vid-content-lag2').fadeIn(700); }, 900);
      }
    }

    console.log("hello")
  });
});

$(".bio").click(function() {


  $('.transform-bio').toggleClass('transform-active-bio');
  $('.biog').toggleClass('bio-active');
  if($('body').hasClass('body-active')){
    $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
  }
  $('.body-trans').toggleClass('body-active');
  
  if ($('.toggle-phone-view').is(':hidden')) {
    if($('.bio-text').is(':visible')){
       $('.bio-text').fadeOut(1000);
       $('.bio-images').fadeOut(1000);
    }
    else{
       $('.bio-text').fadeIn(2000);
       $('.bio-images').fadeIn(2000);
    }
  }

  console.log("hello")
});
