import './sass/styles.scss';

$( document ).ready(function() {
  $(".dev").click(function() {
    $('.transform').toggleClass('transform-active');
    $('.dev').toggleClass('dev-active');


    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    if($('.proficiencies').is(':visible')){
       $('.proficiencies').fadeOut(1000);
    }
    else{
       $('.proficiencies').fadeIn(2000);
    }
    console.log("hello")
  });





  $(".prod").click(function() {




    $('.transform-prod').toggleClass('transform-active-prod');
    $('.prod').toggleClass('prod-active');

    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    console.log("hello")
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
