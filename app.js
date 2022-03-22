
let navslide = () => {
    let burger = document.querySelector('.burger');
    let navbar = document.querySelector('.nav-list');
    let navlist = document.querySelectorAll('.nav-list li');
    let toggle = document.querySelector('toggle');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
        navlist.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                
            } else {
                link.style.animation = `navlinksfade 0.5s ease forwards ${index / 7 + 0.4}s`;
               
            } 
            
        });

        burger.classList.toggle('toggle');
    });


}

navslide();

let showMore = () => {
    let moreproductdiv = document.getElementById('moreitem');
    let showmorebtn = document.getElementById('morebtn');
    if ('') {
        showmorebtn.innerHTML = "Show More";
        moreproductdiv.style.display = "none";
    }
    else {
        showmorebtn.style.display = "none";
        moreproductdiv.style.display = "block";
    }
};

let showContect = () =>{
    let showContectdiv = document.getElementById('contect');
    let showContectbtn = document.getElementById('contectbtn');
    if('') {
        showContectdiv.style.display = "none"
    }
    else{
        showContectdiv.style.display = "block"

    }
};



// bootstrap js

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
