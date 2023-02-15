const textarea = document.getElementById("textarea");
const boldButton = document.getElementById("bold-button");
const italicButton = document.getElementById("italic-button");
const underlineButton = document.getElementById("underline-button");
const leftAlignButton = document.getElementById("left-align-button");
const rightAlignButton = document.getElementById("right-align-button");
const centerAlignButton = document.getElementById("center-align-button");
const fontSizeInput = document.getElementById("font-size-input");
const fontSizeButton = document.getElementById("font-size-button");
const fontColorInput = document.getElementById("font-color-input");
const fontColorButton = document.getElementById("font-color-button");

boldButton.addEventListener("click", function() {
  textarea.style.fontWeight = textarea.style.fontWeight === "bold" ? "normal" : "bold";
});

italicButton.addEventListener("click", function() {
    textarea.style.fontStyle = textarea.style.fontStyle === "italic" ? "normal" : "italic";
  });
  
  underlineButton.addEventListener("click", function() {
    textarea.style.textDecoration = textarea.style.textDecoration === "underline" ? "none" : "underline";
  });
  
  leftAlignButton.addEventListener("click", function() {
    textarea.style.textAlign = "left";
  });
  
  rightAlignButton.addEventListener("click", function() {
    textarea.style.textAlign = "right";
  });
  
  centerAlignButton.addEventListener("click", function() {
    textarea.style.textAlign = "center";
  });
  
  fontSizeButton.addEventListener("click", function() {
    textarea.style.fontSize = fontSizeInput.value + "px";
  });
  
  fontColorButton.addEventListener("click", function() {
    textarea.style.color = fontColorInput.value;
  });
  
