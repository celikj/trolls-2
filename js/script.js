// typewritter
let typeJsText = document.querySelector(".animatedText");
let stringIndex = 0;
let charIndex = 0;
let isTyping = true;
let isActive = false;

function typeJs() {
    if (stringIndex < textArray.length) {
        const currentString = textArray[stringIndex];

        if (isTyping) {
            if (charIndex < currentString.length) {
                typeJsText.innerHTML += currentString.charAt(charIndex);
                charIndex++;
            } else {
                isTyping = false;
            }
        } else {
            if (charIndex > 0) {
                typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
                charIndex--;
            } else {
                isTyping = true;
                stringIndex++;

                if (stringIndex >= textArray.length) {
                    stringIndex = 0;
                }

                charIndex = 0;
                typeJsText.innerHTML = "";
            }
        }
    }
}

const flickSwitch = document.getElementById('flickSwitch');

flickSwitch.addEventListener('click', function () {
    // Toggle the state
    isActive = !isActive;
  
    // Update the class to reflect the state
    if (isActive) {
      flickSwitch.classList.add('active');
      
    } else {
      flickSwitch.classList.remove('active');
    }
    
    localStorage.setItem('darkMode', isActive ? 'active' : 'passive');
});

document.addEventListener("DOMContentLoaded", function() {
      //get darkmode state
      const darkModeState = localStorage.getItem('darkMode');
      if (darkModeState === 'active') {
           isActive = true;
           flickSwitch.classList.add('active');
      }
});

setInterval(typeJs, 120);
