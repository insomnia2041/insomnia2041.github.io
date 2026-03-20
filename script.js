const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
});