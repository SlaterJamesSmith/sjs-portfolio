import './sass/styles.scss';

$( document ).ready(function() {
  $(".dev").click(function() {
    $('.transform').toggleClass('transform-active');
    $('.dev').toggleClass('dev-active');
    console.log("hello")
  });
  $(".prod").click(function() {
    $('.transform-prod').toggleClass('transform-active-prod');
    $('.prod').toggleClass('prod-active');
    console.log("hello")
  });
  $(".vid").click(function() {
    $('.transform-vid').toggleClass('transform-active-vid');
    $('.vid').toggleClass('vid-active');
    console.log("hello")
  });
});
