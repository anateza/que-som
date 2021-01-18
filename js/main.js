$("").on("click", function(){
  $("").hide();
  $("").show();
});

var musica = new Audio('');
var erro = 0;
var erro2 = 0;
var acertos = 0;
var end = false;

music1 = new Audio('musica/amor-de-fim-de-noite-letra.mp3');
music2 = new Audio('musica/algumas-frases-prod-papatinho.mp3');
music3 = new Audio('musica/kenny-g.mp3');
music4 = new Audio('musica/cheia-de-marra.mp3');
music5 = new Audio('musica/quando-a-vontade-bater.mp3');


$("section.inicio button").on("click", function(){
  music1.play();
  music2.play();
  
  $("section").hide();
  $("section.cantores-1").show();
});

$("section.cantores footer p span.home").on("click",function(){
  location.reload();
})

$("section.cantores-1 footer p span.ajuda").one("click", function() {
  $(this).css({opacity: 0.5});
  var bandeiras = $(".errado");
  for (var i=0; i<2; i++) {
    var random = Math.floor(Math.random() * bandeiras.length);
    if (bandeiras[random].style.opacity === "0.5") {
      i--;
    } else {
      bandeiras[random].style.opacity = "0.5";
    }
  }
});
$("section.cantores-4 footer p span.ajuda").one("click", function() {
  $(this).css({opacity: 0.5});
  var bandeiras = $(".errado");
  for (var i=0; i<2; i++) {
    var random = Math.floor(Math.random() * bandeiras.length);
    if (bandeiras[random].style.opacity === "0.5") {
      i--;
    } else {
      bandeiras[random].style.opacity = "0.5";
    }
  }
});

$("section.cantores-1 ul img.certo").one("click", function() {
  $(this).css({opacity: 0.7});
      acertos++;
      $("span.acertos").text(acertos);

  if (this.className === "certo 9") {
    music1.pause();
    
  }else if (this.className === "certo 6") {
    music2.pause();
  }

  if (acertos == 2) {

    music3.play();
    music4.play();
    music5.play();
    
    $("section").hide();
    $("section.cantores-4").show();
    
  }
});
$("section.cantores-4 ul img.certo").one("click", function() {
  $(this).css({opacity: 0.7});
      acertos++;
      $("span.acertos").text(acertos);

  if (this.className === "certo 1") {
    music3.pause();
    
  }else if (this.className === "certo 3") {
    music4.pause();
  }
  else if (this.className === "certo 4") {
    music5.pause();
  }

  if (acertos == 5) {
    end = true;
    musiccorrect = new Audio('musica/correct.mp3');
    musiccorrect.play();
    

    $("span.totalacertos").text(acertos);
    $("span.totalerros").text(erro + erro2);
    $("span.temp").text($("span.tempo").text());
    $("section").hide();
    $("section.cantores-2").show();
  }
});

$("section.cantores-1 ul img.errado").one("click",function(){
  if (this.style.opacity !== "0.5") {
    erro++;
    $(this).css({opacity: 0.5});

    if (erro == 3) {
      end = true;
      music1.pause();
      music2.pause();
      music3.pause();
      music4.pause();
      music5.pause();
      musicaerror = new Audio('musica/game-over-acarde.wav');
      musicaerror.play();

      $("span.totalacertos").text(acertos);
      $("span.totalerros").text(erro);
      $("span.temp").text($("span.tempo").text());
      $("section").hide();
      $("section.cantores-2").show();
    }
  }
});
$("section.cantores-4 ul img.errado").one("click",function(){
  if (this.style.opacity !== "0.5") {
    erro++;
    $(this).css({opacity: 0.5});

    if (erro == 3) {
      end = true;
      music1.pause();
      music2.pause();
      music3.pause();
      music4.pause();
      music5.pause();
      musicaerror = new Audio('musica/game-over-acarde.wav');
      musicaerror.play();
      
      $("span.totalacertos").text(acertos);
      $("span.totalerros").text(erro);
      $("span.temp").text($("span.tempo").text());
      $("section").hide();
      $("section.cantores-2").show();
    }
  }
});

$("#home").on('click',function(){
  $('section.inicio').show();
  document.location.reload();
});
$("#home").on('click',function(){
  $('section.cantores-4').hide();
  $('section.inicio').show();
  document.location.reload();
});


$('section.cantores-2 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

