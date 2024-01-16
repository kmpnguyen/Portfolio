const projectList = document.getElementById("project-expand");
const contactList = document.getElementById("contact-expand");
const contact = document.getElementById("contact-list");
const project = document.getElementById("project-list");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const infoSection = document.getElementById("info-section");

//Image Slide
var slideIndex = 1;
var z = document.getElementsByClassName("slideshow");
for (i = 0; i < z.length; i++) {
  //set custom data attribute to first current image index
  z[i].setAttribute("data-currentslide", 1);
  showDivs(z[i].getAttribute("data-currentslide"), i);
}
function plusDivs(n, j) {
  //get custom data attribute value of current image index to slideshow class index j
  slideIndex = parseInt(z[j].getAttribute("data-currentslide"));
  showDivs((slideIndex += n), j);
}
function currentDiv(n, j) {
  showDivs((slideIndex = n), j); /* showDivs Not showSlides*/
}
function showDivs(n, j) {
  var i;
  var z = document.getElementsByClassName("slideshow")[j];
  var x = z.getElementsByClassName("mySlides");
  var dots = z.getElementsByClassName("dot");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  //set custom data attribute to current image index
  z.setAttribute("data-currentslide", slideIndex);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Introduction content

document.getElementById("project-expand").addEventListener("click", (e) => {
  project.classList.toggle("active");
  project.classList.toggle("hidden");
  projectList.classList.toggle("opened");
  if (project.classList.contains("active")) {
    e.target.innerHTML = "Selected Project [-]";
    document.getElementById("introduction").innerHTML =
      "Khe Nguyen is a designer in Brooklyn/NY, focusing on branding, UX/UI and creative coding.";
  } else {
    e.target.innerHTML = "Selected Project [+]";
    document.getElementById("introduction").innerHTML =
      "Khe Nguyen is a designer in Brooklyn/NY, focusing on branding, UX/UI and creative coding.<br />She studied at Parsons The New School and is interested in exploring multimedia design to communicate visual ideas.<br /><br />When she is not designing, you can find Khe with her camera exploring the cultures and landmarks that the city have to offer.";
  }
});

document.getElementById("contact-expand").addEventListener("click", (e) => {
  contact.classList.toggle("active");
  contact.classList.toggle("hidden");
  contactList.classList.toggle("opened");
  if (contact.classList.contains("active")) {
    e.target.innerHTML = "Info & Contact [-]";
    document.getElementById("introduction").innerHTML =
      "Khe Nguyen is a designer in Brooklyn/NY, focusing on branding, UX/UI and creative coding.";
  }
});

// Show work
const work = [
  "comcast",
  "cboe",
  "comcastcyber",
  "helpscan",
  "p5js",
  "favicon",
  "loveishard",
  "xmass",
  "fpdb",
  "choice",

  // "blank"
];
work.forEach((item) => {
  // Open text menu
  document.getElementById("menu-" + item).addEventListener("click", (e) => {
    [].slice.call(document.getElementById("work").children).forEach((el) => {
      if (el.classList.contains("active-work")) {
        el.classList.toggle("active-work");
      }
    });
    document.getElementById(item + "-section")?.classList.toggle("active-work");

    if (!document.getElementById("play-section").classList.contains("hidden")) {
      document.getElementById("play-section").classList.add("hidden");
    }
    icon(item);
  });

  const icon = (item) => {
    document.getElementById("rotate-icon").classList.remove("icon-active");
    document.getElementById("rotate-icon").classList.add("icon-hidden");
    document.getElementById("close-icon").classList.remove("icon-hidden");
    document.getElementById("close-icon").classList.add("icon-active");

    document.getElementById("close-icon").addEventListener("click", () => {
      document.getElementById("close-icon").classList.remove("icon-active");
      document.getElementById("close-icon").classList.add("icon-hidden");

      if (
        document.getElementById("play-section").classList.contains("hidden")
      ) {
        document.getElementById("play-section").classList.remove("hidden");
      }

      document
        .getElementById(item + "-section")
        ?.classList.toggle("active-work");

      for (let i = 0; i < 11; i++) {
        document
          .getElementById("work")
          .children[i].classList.remove("active-work");
      }
    });
  };

  // Open image slide
  document
    .getElementsByClassName("img-" + item)[0]
    .addEventListener("click", (e) => {
      [].slice
        .call(document.getElementById("play-section").children)
        .forEach((el) => {
          if (el.classList.contains("active-work")) {
            el.classList.toggle("active-work");
            console.log("print");
          }
        });
      document
        .getElementById(item + "-section")
        ?.classList.toggle("active-work");
      if (
        !document.getElementById("play-section").classList.contains("hidden")
      ) {
        document.getElementById("play-section").classList.add("hidden");
      }
      icon(item);
    });
});

// Cursor
const allCursor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
allCursor.forEach((item) => {
  document
    .querySelector(".playImage" + item)
    .addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".cursor" + item);
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });
});
