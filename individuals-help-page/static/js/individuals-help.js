// ~~~   smooth scrool for sec 1 btns   ~~~  //
let navlinks = document.querySelectorAll(".sc1-mn-btn a");
for (const link of navlinks) {
  link.addEventListener("click", smoothScroll);
}
function smoothScroll(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

// ~~~   sc3, sc5 btns   ~~~  //
const sc3Btn  = document.querySelector(".sc3-btn");
const sc3Desc = document.querySelector(".sc3-desc");
sc3Btn.addEventListener("click", () => {
  sc3Btn.classList.toggle("active");
  sc3Desc.classList.toggle("active");
})

const sc5Btn  = document.querySelector(".sc5-btn");
const sc5Desc = document.querySelector(".sc5-desc");
sc5Btn.addEventListener("click", () => {
  sc5Btn.classList.toggle("active");
  sc5Desc.classList.toggle("active");
})