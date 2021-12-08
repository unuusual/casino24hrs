
  if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }
  
 
 $(document).ready(function(){
  $("a.desplegable").click(function(){
    if($('.menu').is(":visible")){
      $('.menu').slideUp();
    } else if($('.menu').is(":hidden")){
      $('.menu').slideDown();
    }
  });

  $('.galeria').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
  });
      


  $(".btnSlider1").click(function(e){
    validar(e);
    e.preventDefault();
    
  });

  $(".nombre").keyup(function(e){
    validar(e);
    e.preventDefault();
    
  });

  $(window).resize(function(){
    if($(this).width()>768){
      $(".menu").show();
    } else{
      $(".menu").hide();
    }
  });
});

function validar(e){
  
  $("#mensaje").empty();
  let validad = false;
  let nombre = $(".nombre").val();
  let email = $(".email").val();
  let expresionEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;

  if(nombre == ""){
    $("#mensaje").append("<p>El campo nombre no puede estar vacio.</p>")
    $("#mensaje").addClass("rojoColor")
  }

  if(email == ""){
    $("#mensaje").append("<p>El campo email no puede estar vacio.</p>")
    $("#mensaje").addClass("rojoColor")
  }

  if(!expresionEmail.test(email)){
    $("#mensaje").append("<p>El campo email debe seguir un formato valido.</p>")
    $("#mensaje").addClass("rojoColor")
  }else{
    $("form").submit();
    alert("¡Enviado correctamente!")
    $("input[type='text']").val("");
  }


}



