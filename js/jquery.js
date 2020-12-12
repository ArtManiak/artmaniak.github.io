const $doc = $(document);
  const $header = $('header');
  const $main = $('main');

  $doc.on("scroll", function () {
   const scrollPos = $doc.scrollTop();
   const sectionOffset = $main.offset().top;
   const headerHeight = $header.outerHeight();

   if (scrollPos < sectionOffset) {
    console.log("zmiana")
    $header.css({
     'opacity': 1 - scrollPos / headerHeight,
     'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')'
    })
   }


  })
 function pokaz(){
  $(".home-photo").hide(100);
  $(".home-photo").show(1000);
  
 }

 
$('.toggle-botton').click(function() {
 
  $('.linki').slideToggle();
 
});

window.onresize = () => {
  console.log(window.outerWidth);
  if(window.outerWidth < 1040){
    $(".linki").hide();
  }else{
    $(".linki").show();

  }
}
