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



    clickDevDisabled = true;
      setTimeout(function(){clickDevDisabled = false;}, 1500);
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

  console.log("hello")
});
