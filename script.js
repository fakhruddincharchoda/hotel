"use strict";
const section1 = document.getElementById("section-1");
const room = document.getElementById("room");
const section2 = document.getElementById("section-2");
const services = document.getElementById("services");
const closeBtn = document.querySelector(".cross-icon");
const btnBook = document.querySelector(".btn-book");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".overlay-modal");
const blogBtn = document.getElementById("blog");
const section3 = document.getElementById("section-3");
const btnlearnMore = document.querySelector(".btn--scroll-to");
const section4 = document.getElementById("section-4");
const conatctUs = document.getElementById("contact");
const footer = document.querySelector("footer");
const aboutUs = document.getElementById("about");
const conServices = document.querySelector(".container_services");
const btnsContainer = document.querySelector(".btns-div");
const btns = document.querySelectorAll(".btns_services");
const containerServices = document.querySelectorAll(".services__content");
const nav = document.querySelector(".nav");
const hidden = document.querySelector(".hiddenDiv");
const dotContainer = document.querySelector(".dots");
const btnFooter = document.querySelector(".btn_book--footer");
// ***** footer Btn modal ******
btnFooter.addEventListener("click",function(){
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
})
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
closeBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});


// ******* smooth scrolling functionallity ********
room.addEventListener("click", function () {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});
services.addEventListener("click", function () {
  section2.scrollIntoView({
    behavior: "smooth",
  });
});
btnlearnMore.addEventListener("click", function () {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});
blogBtn.addEventListener("click", function () {
  section3.scrollIntoView({
    behavior: "smooth",
  });
});
conatctUs.addEventListener("click", function () {
  section4.scrollIntoView({
    behavior: "smooth",
  });
});
aboutUs.addEventListener("click", function () {
  footer.scrollIntoView({
    behavior: "smooth",
  });
});

// ******* BOOK NOW BUTTON WORK *******
btnBook.addEventListener("click", function () {
  console.log("link");
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});
overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
closeBtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});
// ******** Sticky navigation bars *********
const header = document.querySelector(".header");
const callBackHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    hidden.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    hidden.style.display = "none";
  }
};
const headerObserver = new IntersectionObserver(callBackHeader, {
  root: null,
  threshold: 0.1,
});
headerObserver.observe(header);

// ****** Tab component functionality *******

btnsContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  console.log(clicked);
  btns.forEach(function (t) {
    t.classList.remove("btn__active");
  });
  containerServices.forEach(function (r) {
    r.classList.remove("content__services--active");
  });
  clicked.classList.add("btn__active");
  document
    .querySelector(`.content__services--${clicked.dataset.tab}`)
    .classList.add("content__services--active");
});
// navigation bars
nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav_link")) {
    const links = e.target;
    const siblings = links.closest(".nav").querySelectorAll(".nav_link");
    const logo = links.closest(".nav").querySelector("img");
    const btnbook = document.querySelector(".btn-book");

    siblings.forEach(function (el) {
      if (el !== links) {
        el.style.opacity = 0.5;
      }
    });
    logo.style.opacity = 0.5;
    btnBook.style.opacity = 0.5;
  }
});
nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav_link")) {
    const links = e.target;
    const siblings = links.closest(".nav").querySelectorAll(".nav_link");
    const logo = links.closest(".nav").querySelector("img");
    const btnbook = document.querySelector(".btn-book");

    siblings.forEach(function (el) {
      if (el !== links) {
        el.style.opacity = 1;
      }
    });
    logo.style.opacity = 1;
    btnBook.style.opacity = 1;
  }
});
const sectionCallBack = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  entry.target.classList.remove("section--hidden");
};
const allSection = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(sectionCallBack, {
  root: null,
  threshold: 0.03,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  //     section.classList.add("section--hidden")
});
// *******  LAZY LOADING IMAGE ******
const allImages = document.querySelectorAll("img[data-src]");
console.log(allImages);
const imgCallBack = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("blur");
  });
};
const observerImg = new IntersectionObserver(imgCallBack, {
  root: null,
  threshold: 0,
});
allImages.forEach(function (img) {
  observerImg.observe(img);
});
// ****** SLIDER COMPONENT FUNCTIONALLITY *******
let currSlide = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const maxslide = slides.length;
// slider.style.overflow = "visible";
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

// slider.style.transform = "scale(0.2)"
const dotsfunction = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
dotsfunction();
function goToslide(slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - slide) * 140}%)`;
  });
}
const nextSlide = function () {
  if (currSlide === maxslide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToslide(currSlide);
};
const previousSlide = function () {
  if (currSlide === 0) {
    currSlide = maxslide - 1;
  } else {
    currSlide--;
  }
  goToslide(currSlide);
};

goToslide(0);
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") previousSlide();
  if (e.key === "ArrowRight") nextSlide();
});
dotContainer.addEventListener("click",function(e){
  if(e.target.classList.contains("dots__dot")){
    const {slide} = e.target.dataset;
    goToslide(slide);
  }
})

