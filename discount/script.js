const originalPrice = document.getElementById("original-price");
const discountButton = document.getElementById("discount-button");
const discountedPrice = document.getElementById("discounted-price");

discountButton.addEventListener("click", function() {
  let originalPriceValue = parseInt(originalPrice.innerHTML);
  let discount = originalPriceValue * 0.3;
  let discountedPriceValue = originalPriceValue - discount;
  discountedPrice.innerHTML = discountedPriceValue;
});
