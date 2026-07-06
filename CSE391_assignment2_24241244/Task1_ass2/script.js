
var fortunes = [
  "True wisdom comes not from knowledge, but from understanding.",
  "A journey of a thousand miles begins with a single step.",
  "Good things come to those who wait.",
  "Believe you can, and you're halfway there.",
  "The best way to predict the future is to create it.",
  "Every day is a second chance.",
  "Small steps every day lead to big changes.",
  "Your hard work will soon pay off.",
  "An unexpected opportunity is coming your way.",
  "Happiness is a choice you make every morning.",
  "Difficult roads often lead to beautiful destinations.",
  "Patience is the key to success."
];
function showRandomFortune() {
  var randomIndex = Math.floor(Math.random() * fortunes.length);
  var chosenFortune = fortunes[randomIndex];
  document.getElementById("fortuneText").textContent = chosenFortune;
}
window.onload = function () {
  showRandomFortune();
};
var fontColors = ["#c62828", "#1565c0", "#6a1b9a", "#ef6c00"];
var backgroundColors = ["#fff9c4", "#e1f5fe", "#f3e5f5", "#fff3e0"];
var borderColors = ["#2e7d32", "#0277bd", "#8e24aa", "#e65100"];
var fontStyles = [
  { size: "18px", family: "Arial, sans-serif" },
  { size: "20px", family: "Georgia, serif" },
  { size: "16px", family: "Courier New, monospace" },
  { size: "19px", family: "Verdana, sans-serif" }
];
var fontColorIndex = 0;
var backgroundColorIndex = 0;
var borderColorIndex = 0;
var fontStyleIndex = 0;
function changeFontColor() {
  fontColorIndex = (fontColorIndex + 1) % fontColors.length;
  document.getElementById("fortuneText").style.color = fontColors[fontColorIndex];
}
function changeBackgroundColor() {
  backgroundColorIndex = (backgroundColorIndex + 1) % backgroundColors.length;
  document.getElementById("fortuneBox").style.backgroundColor = backgroundColors[backgroundColorIndex];
}
function changeBorderColor() {
  borderColorIndex = (borderColorIndex + 1) % borderColors.length;
  document.getElementById("fortuneBox").style.borderColor = borderColors[borderColorIndex];
}
function changeFontStyle() {
  fontStyleIndex = (fontStyleIndex + 1) % fontStyles.length;
  var style = fontStyles[fontStyleIndex];
  document.getElementById("fortuneText").style.fontSize = style.size;
  document.getElementById("fortuneText").style.fontFamily = style.family;
}
