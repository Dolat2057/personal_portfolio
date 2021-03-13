$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer.", "Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// mouse move pointer
var particles = Particles.init({
	selector: '.background',
  sizeVariations: 7 ,
  color: ['#fffff', 'seagreen','#000000'],
  connectParticles: false
});
  
//   projeccts or portfolio

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// form validation
function required()
{
var name = document.forms["form1"]["name"].value;
var email = document.forms["form1"]["email"].value;
var subject = document.forms["form1"]["subject"].value;
var message = document.forms["form1"]["message"].value;



if (name == "")
{
alert("Name is required");
window.location.href = "index.html#contact";
}
else if(email == ""){
    alert("Email is required");
    if(email == "@"){
        alert("Email includes @");
    }
}
else if(subject == ""){
    alert("Subject is required");
}
else if(message == ""){
    alert("Message is required");
}
else if(name == "" || name == null,  email == "" || email == null, subject == "" || subject == null,  message == "" || message == null  ){
    alert("Please fill all the details first !!!")

}
else 
{
alert('Your data is submitted !! We will get back to you.');
return true; 
}
}
