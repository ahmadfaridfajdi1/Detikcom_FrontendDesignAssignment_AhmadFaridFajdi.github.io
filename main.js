const list = document.querySelector('.list');

document.querySelector('#hamburger-menu').onclick = () => {
    list.classList.toggle('active');
};

const menu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !list.contains(e.target)) {
        list.classList.remove('active');
    }
});

const scrollers = document.querySelectorAll(".scroller")

if (!window.matchMedia("(prefers-reduced-montion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller_inner');
        const scrollerConnent = Array.from(scrollerInner.children);

        scrollerConnent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}

var slideIndex = 1;
showSlide(slideIndex);

var slideIndex_51 = 1;
Slide(slideIndex_51);

function nextslide(n) {
    showSlide(slideIndex += n);
}

function dotslide(n) {
    showSlide(slideIndex = n);
}

function dotslide_51(n) {
    Slide(slideIndex_51 = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dot = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i< slides.length; i++) {
        dot[i].className = dot[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dot[slideIndex - 1].className += " active"

}

function Slide(n) {
    var i;
    var slides_51 = document.getElementsByClassName("imgslide-51");
    var dot_51 = document.getElementsByClassName("dot-51");

    for (i = 0; i< slides_51.length; i++) {
        slides_51[i].style.display = "none";
    }

    for (i = 0; i< slides_51.length; i++) {
        dot_51[i].className = dot_51[i].className.replace(" active-51", "");
    }

    slides_51[slideIndex_51 - 1].style.display = "block";

    dot_51[slideIndex_51 - 1].className += " active-51"
}