const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");

// Menyembunyikan tombol newBtn pada awalnya
newBtn.style.display = "none";

// Event listener untuk tombol 'Yes'
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Right, I like you";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

  // Menampilkan tombol newBtn
  newBtn.style.display = "block";
});

// Event listener untuk tombol 'New'
newBtn.addEventListener("click", () => {
  window.location.href = "flower.html";
});

// Event listener untuk 'mouseover' pada tombol 'No'
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
