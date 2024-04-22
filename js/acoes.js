$(document).ready(function(){
    $('#destaque').slick({
        autoplay: true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false,
    });
});

$(document).ready(function(){
    $('.marcas').slick({
        autoplay: true,
        autoplaySpeed:1000,
        dots:false,
        arrows:false,
    });
});

$(document).ready(function(){
    $('.container-bffcMob').slick({
        autoplay: true,
        autoplaySpeed:1000,
        dots:false,
        arrows:false,
    });
});

$(document).ready(function(){
    $('.container-saibamais').slick({
        autoplay: true,
        autoplaySpeed:1000,
        dots:false,
        arrows:false,
    });
});

var imagem = document.getElementById('imagemClicavel');

imagem.addEventListener('click', function(){
  window.location.href = 'signin.html'
});

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "signin.html";
}

$('.marcas').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
});

const images = document.querySelectorAll('.normal-image');

images.forEach(image =>{
    image.addEventListener('click', function(){
        if (this.src.includes('normal')){
            this.src = this.src.replace('normal', 'changed');
        } else {
            this.src = this.src.replace('changed', 'normal');
        }
    })
})

function clickMenu(){
    var menu = document.querySelector('menu');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

// sla

$('.').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
});


