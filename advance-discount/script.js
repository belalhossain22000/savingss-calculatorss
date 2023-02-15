const originalPrice = document.getElementById("original-price");
const discountCode = document.getElementById("discount-code");
const discountButton = document.getElementById("discount-button");
const discountedPrice = document.getElementById("discounted-price");

discountButton.addEventListener("click", function() {
  let originalPriceValue = parseInt(originalPrice.innerHTML);
  let discountCodeValue = discountCode.value;
  
  if (discountCodeValue === "DISC30") {
    let discount = originalPriceValue * 0.3;
    let discountedPriceValue = originalPriceValue - discount;
    discountedPrice.innerHTML = discountedPriceValue;
  } else {
    discountedPrice.innerHTML = "Invalid discount code";
  }
});
