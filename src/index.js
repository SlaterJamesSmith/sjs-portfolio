import './sass/styles.scss';

document.documentElement.className = 'no-fouc';

$( document ).ready(function() {

  $("body").show();

// web development animations
  let clickDevDisabled = false;
  $(".dev").click(function() {
    if ($('.toggle-phone-view').is(':hidden')) {
      if (subBioDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
          return;
      }
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
      setTimeout(function () { $('.contact-info').fadeIn(700); }, 800);
      $('.contact-info').removeClass( "contact-info-purple" ).removeClass( "contact-info-red" ).removeClass( "contact-info-yellow" ).addClass( "contact-info-blue" );
      if($('.proficiencies').is(':visible')){
         $('.proficiencies').fadeOut(1000);
         $('.proficiencies-lag1').fadeOut(400);
         $('.proficiencies-lag2').fadeOut(150);
         $('.contact-info').removeClass( "contact-info-blue" );
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



//comms + design animations
  let clickProdDisabled = false;
  $(".prod").click(function() {
    if ($('.toggle-phone-view').is(':hidden')) {
      if (subBioDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
          return;
      }
    }

    $('.transform-prod').toggleClass('transform-active-prod');
    $('.prod').toggleClass('prod-active');

    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    if ($('.toggle-phone-view').is(':visible')) {
      if($('.graphics-content-img').is(':visible') && $('.graphics-content').is(':hidden')){
        $('.graphics-content-img').hide();
        $('.graphics-content-img').toggle();
        $('.graphics-content').toggle();
      } else {
        $('.graphics-content-img').toggle();
        $('.graphics-content').toggle();
      }
    }


    if ($('.toggle-phone-view').is(':hidden')) {
      setTimeout(function () { $('.contact-info').fadeIn(700); }, 800);
      $('.contact-info').addClass( "contact-info-purple" ).removeClass( "contact-info-red" ).removeClass( "contact-info-yellow" ).removeClass( "contact-info-blue" );
      if($('.graphics-content').is(':visible')){
         $('.graphics-content').fadeOut(1000);
         $('.graphics-content-img').fadeOut(150);
         $('.contact-info').removeClass( "contact-info-purple" );
      }
      else{
        $('.graphics-content').fadeIn(1500);
        setTimeout(function () { $('.graphics-content-img').fadeIn(550); }, 950);
      }
    }
    clickProdDisabled = true;
      setTimeout(function(){clickProdDisabled = false;}, 1500);
  });



// production section animations
  let clickVidDisabled = false;
  $(".vid").click(function() {
    if ($('.toggle-phone-view').is(':hidden')) {
      if (clickVidDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
          return;
      }
    }


    $('.transform-vid').toggleClass('transform-active-vid');
    $('.vid').toggleClass('vid-active');

    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    if($('.toggle-phone-view').is(':visible')){
       $('.vid-content').toggle();
    }

    if ($('.toggle-phone-view').is(':hidden')) {
      setTimeout(function () { $('.contact-info').fadeIn(700); }, 800);
      $('.contact-info').removeClass( "contact-info-purple" ).addClass( "contact-info-red" ).removeClass( "contact-info-yellow" ).removeClass( "contact-info-blue" );
      if($('.vid-content').is(':visible')){
         $('.vid-content').fadeOut(1000);
         $('.vid-content-lag1').fadeOut(150);
         $('.vid-content-lag2').fadeOut(150);
         $('.contact-info').removeClass( "contact-info-red" )
      }
      else{
         $('.vid-content').fadeIn(2000);
         setTimeout(function () { $('.vid-content-lag1').fadeIn(700); }, 800);
         setTimeout(function () { $('.vid-content-lag2').fadeIn(700); }, 900);
      }
    }

    console.log("hello")
    clickVidDisabled = true;
      setTimeout(function(){clickVidDisabled = false;}, 1500);
  });


  // about me animations
  let clickBioDisabled = false;
  $(".bio").click(function() {
    if ($('.toggle-phone-view').is(':hidden')) {
      if (subBioDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
          return;
      }
    }

    $('.transform-bio').toggleClass('transform-active-bio');
    $('.biog').toggleClass('bio-active');

    if($('body').hasClass('body-active')){
      $( 'body' ).removeClass( "body-trans" ).addClass( "body-active" );
    }
    $('.body-trans').toggleClass('body-active');

    if($('.toggle-phone-view').is(':visible')){
      $('.bio-text').toggle();
      $('.bio-images').toggle();
    }

    if ($('.toggle-phone-view').is(':hidden')) {
      setTimeout(function () { $('.contact-info').fadeIn(700); }, 800);
      $('.contact-info').removeClass( "contact-info-purple" ).removeClass( "contact-info-red" ).addClass( "contact-info-yellow" ).removeClass( "contact-info-blue" );
      if($('.bio-text').is(':visible')){
        $('.bio-text').fadeOut(100);
        $('.bio-images').fadeOut(300);
        $('.contact-info').removeClass( "contact-info-yellow" )
      }
      else{
        setTimeout(function () { $('.bio-images').fadeIn(700); }, 800);
        setTimeout(function () { $('.bio-text').fadeIn(700); }, 1000);
      }
    }

    console.log("hello")
    clickBioDisabled = true;
      setTimeout(function(){clickBioDisabled = false;}, 1500);
  });


// sub menu buttons

// web dev sub button
  let subDevDisabled = false;
  $(".dev-sub-btn").click(function() {
    if (subBioDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
        return;
    }

    $('.contact-info').removeClass( "contact-info-purple" ).removeClass( "contact-info-red" ).removeClass( "contact-info-yellow" ).addClass( "contact-info-blue" );

    if($('.proficiencies').is(':hidden')){
      $('.transform').toggleClass('transform-active');
      $('.dev').toggleClass('dev-active');
      $('.proficiencies').fadeIn(2000);
      setTimeout(function () { $('.proficiencies-lag1').fadeIn(700); }, 800);
      setTimeout(function () { $('.proficiencies-lag2').fadeIn(700); }, 900);
    }
    if($('.graphics-content').is(':visible')){
      $('.transform-prod').removeClass('transform-active-prod');
      $('.prod').removeClass('prod-active');
       $('.graphics-content').fadeOut(1000);
       $('.graphics-content-img').fadeOut(150);
    }
    if($('.vid-content').is(':visible')){
      $('.transform-vid').removeClass('transform-active-vid');
      $('.vid').removeClass('vid-active');
       $('.vid-content').fadeOut(1000);
       $('.vid-content-lag1').fadeOut(150);
       $('.vid-content-lag2').fadeOut(150);
    }
    if($('.bio-text').is(':visible')){
      $('.transform-bio').removeClass('transform-active-bio');
      $('.biog').removeClass('bio-active');
      $('.bio-text').fadeOut(100);
      $('.bio-images').fadeOut(300);
    }

    clickBioDisabled = true;
    clickDevDisabled = true;
    clickProdDisabled = true;
    subCommsDisabled = true;
    subDevDisabled = true;
    setTimeout(function(){clickProdDisabled = false;}, 1500);
    setTimeout(function(){clickBioDisabled = false;}, 1500);
    setTimeout(function(){clickDevDisabled = false;}, 1500);
    setTimeout(function(){subCommsDisabled = false;}, 1500);
    setTimeout(function(){subDevDisabled = false;}, 1500);
  });

// comms + design button
  let subCommsDisabled = false;
  $(".comms-btn").click(function() {
    if (subBioDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
        return;
    }

    $('.contact-info').addClass( "contact-info-purple" ).removeClass( "contact-info-red" ).removeClass( "contact-info-yellow" ).removeClass( "contact-info-blue" );

    if($('.graphics-content-img').is(':hidden')){
      $('.transform-prod').toggleClass('transform-active-prod');
      $('.prod').toggleClass('prod-active');
      $('.graphics-content').fadeIn(1500);
      setTimeout(function () { $('.graphics-content-img').fadeIn(550); }, 950);
    }

    if($('.proficiencies').is(':visible')){
      $('.transform').removeClass('transform-active');
      $('.dev').removeClass('dev-active');
      $('.proficiencies').fadeOut(1000);
      $('.proficiencies-lag1').fadeOut(400);
      $('.proficiencies-lag2').fadeOut(150);
    }
    if($('.vid-content').is(':visible')){
      $('.transform-vid').removeClass('transform-active-vid');
      $('.vid').removeClass('vid-active');
       $('.vid-content').fadeOut(1000);
       $('.vid-content-lag1').fadeOut(150);
       $('.vid-content-lag2').fadeOut(150);
    }
    if($('.bio-text').is(':visible')){
      $('.transform-bio').removeClass('transform-active-bio');
      $('.biog').removeClass('bio-active');
      $('.bio-text').fadeOut(100);
      $('.bio-images').fadeOut(300);
    }

    clickBioDisabled = true;
    clickDevDisabled = true;
    clickProdDisabled = true;
    subCommsDisabled = true;
    setTimeout(function(){clickProdDisabled = false;}, 1500);
    setTimeout(function(){clickBioDisabled = false;}, 1500);
    setTimeout(function(){clickDevDisabled = false;}, 1500);
    setTimeout(function(){subCommsDisabled = false;}, 1500);
  });


// production sub menu button
  let subBioDisabled = false;
  $(".vid-sub-btn").click(function() {
    if (subBioDisabled || clickBioDisabled || clickDevDisabled || clickProdDisabled || subCommsDisabled || subDevDisabled || subVidDisabled || subBioDisabled) {
        return;
    }

    $('.contact-info').removeClass( "contact-info-purple" ).addClass( "contact-info-red" ).removeClass( "contact-info-yellow" ).removeClass( "contact-info-blue" );

    if($('.vid-content').is(':hidden')){
      $('.transform-vid').toggleClass('transform-active-vid');
      $('.vid').toggleClass('vid-active');
      $('.vid-content').fadeIn(2000);
      setTimeout(function () { $('.vid-content-lag1').fadeIn(700); }, 800);
      setTimeout(function () { $('.vid-content-lag2').fadeIn(700); }, 900);
    }
    if($('.proficiencies').is(':visible')){
      $('.transform').removeClass('transform-active');
      $('.dev').removeClass('dev-active');
      $('.proficiencies').fadeOut(1000);
      $('.proficiencies-lag1').fadeOut(400);
      $('.proficiencies-lag2').fadeOut(150);
    }
    if($('.graphics-content').is(':visible')){
      $('.transform-prod').removeClass('transform-active-prod');
      $('.prod').removeClass('prod-active');
       $('.graphics-content').fadeOut(1000);
       $('.graphics-content-img').fadeOut(150);
    }
    if($('.bio-text').is(':visible')){
      $('.transform-bio').removeClass('transform-active-bio');
      $('.biog').removeClass('bio-active');
      $('.bio-text').fadeOut(100);
      $('.bio-images').fadeOut(300);
    }

    clickBioDisabled = true;
    clickDevDisabled = true;
    clickProdDisabled = true;
    subCommsDisabled = true;
    subDevDisabled = true;
    subVidDisabled = true;
    setTimeout(function(){clickProdDisabled = false;}, 1500);
    setTimeout(function(){clickBioDisabled = false;}, 1500);
    setTimeout(function(){clickDevDisabled = false;}, 1500);
    setTimeout(function(){subCommsDisabled = false;}, 1500);
    setTimeout(function(){subDevDisabled = false;}, 1500);
    setTimeout(function(){subVidDisabled = false;}, 1500);
  });

  // about me sub menu button
  let subVidDisabled = false;
  $(".bio-sub-btn").click(function() {
    if (subVidDisabled) {
        return;
      }

    $('.contact-info').removeClass( "contact-info-purple" ).removeClass( "contact-info-red" ).addClass( "contact-info-yellow" ).removeClass( "contact-info-blue" );

    if($('.bio-text').is(':hidden')){
      $('.transform-bio').toggleClass('transform-active-bio');
      $('.biog').toggleClass('bio-active');
      setTimeout(function () { $('.bio-images').fadeIn(700); }, 800);
      setTimeout(function () { $('.bio-text').fadeIn(700); }, 1000);
    }
    if($('.proficiencies').is(':visible')){
      $('.transform').removeClass('transform-active');
      $('.dev').removeClass('dev-active');
      $('.proficiencies').fadeOut(1000);
      $('.proficiencies-lag1').fadeOut(400);
      $('.proficiencies-lag2').fadeOut(150);
    }
    if($('.graphics-content').is(':visible')){
      $('.transform-prod').removeClass('transform-active-prod');
      $('.prod').removeClass('prod-active');
       $('.graphics-content').fadeOut(1000);
       $('.graphics-content-img').fadeOut(150);
    }
    if($('.vid-content').is(':visible')){
      $('.transform-vid').removeClass('transform-active-vid');
      $('.vid').removeClass('vid-active');
       $('.vid-content').fadeOut(1000);
       $('.vid-content-lag1').fadeOut(150);
       $('.vid-content-lag2').fadeOut(150);
    }

    clickBioDisabled = true;
    clickDevDisabled = true;
    clickProdDisabled = true;
    subCommsDisabled = true;
    subDevDisabled = true;
    subVidDisabled = true;
    subBioDisabled = true;
    setTimeout(function(){clickProdDisabled = false;}, 1500);
    setTimeout(function(){clickBioDisabled = false;}, 1500);
    setTimeout(function(){clickDevDisabled = false;}, 1500);
    setTimeout(function(){subCommsDisabled = false;}, 1500);
    setTimeout(function(){subDevDisabled = false;}, 1500);
    setTimeout(function(){subVidDisabled = false;}, 1500);
    setTimeout(function(){subBioDisabled = false;}, 1500);
  });



});
