//   Article 1  //
let count1 = 1;
let btnIncrease1 = document.querySelector(".increase1");
let btnDecrease1 = document.querySelector(".decrease1");
let value1 = document.querySelector("#value1");
let price1 = document.querySelector("#price1");

btnIncrease1.addEventListener("click", function () {
  count1++;
  value1.textContent = count1;
  price1.textContent = 100 * count1;
  total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
});
btnDecrease1.addEventListener("click", function () {
  if (count1 > 0) {
    count1--;
    value1.textContent = count1;
    price1.textContent = 100 * count1;
    total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
  }
});

btnHeart1 = document.querySelector(".like-btn1");

btnHeart1.addEventListener("click", function () {
  btnHeart1.classList.toggle("is-active1");
});

//   Article 2  //

let count2 = 1;
let btnIncrease2 = document.querySelector(".increase2");
let btnDecrease2 = document.querySelector(".decrease2");
let value2 = document.querySelector("#value2");
let price2 = document.querySelector("#price2");

btnIncrease2.addEventListener("click", function () {
  count2++;
  value2.textContent = count2;
  price2.textContent = 150 * count2;
  total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
});
btnDecrease2.addEventListener("click", function () {
  if (count2 > 0) {
    count2--;
    value2.textContent = count2;
    price2.textContent = 150 * count2;
    total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
  }
});

btnHeart2 = document.querySelector(".like-btn2");

btnHeart2.addEventListener("click", function () {
  btnHeart2.classList.toggle("is-active2");
});

//   Article 3  //

var count3 = 1;
let btnIncrease3 = document.querySelector(".increase3");
let btnDecrease3 = document.querySelector(".decrease3");
let value3 = document.querySelector("#value3");
let price3 = document.querySelector("#price3");

btnIncrease3.addEventListener("click", function () {
  count3++;
  value3.textContent = count3;
  price3.textContent = 200 * count3;
  total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
});
btnDecrease3.addEventListener("click", function () {
  if (count3 > 0) {
    count3--;
    value3.textContent = count3;
    price3.textContent = 200 * count3;
    total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
  }
});

btnHeart3 = document.querySelector(".like-btn3");

btnHeart3.addEventListener("click", function () {
  btnHeart3.classList.toggle("is-active3");
});

//   Total Price

let total = document.querySelector("#total");
total.textContent = count1 * 100 + count2 * 150 + count3 * 200;

// REmove Article1
let del1 = document.querySelector(".btn-delete1");
let article1 = document.querySelector(".article1");

del1.addEventListener("click", function () {
  article1.remove();
  count1 = 0;
  total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
});

// Remove article 2

let del2 = document.querySelector(".btn-delete2");
let article2 = document.querySelector(".article2");

del2.addEventListener("click", function () {
  article2.remove();
  count2 = 0;
  total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
});

// Remove article 3

let del3 = document.querySelector(".btn-delete3");
let article3 = document.querySelector(".article3");

del3.addEventListener("click", function () {
  article3.remove();
  count3 = 0;
  total.textContent = count1 * 100 + count2 * 150 + count3 * 200;
});
