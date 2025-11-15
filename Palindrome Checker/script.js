const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = (input) => {
  const originalInput = input; // Store for later output

  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Remove the previous result
  resultDiv.innerHTML = "";

  // Clean the input: remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Check if it's a palindrome
  const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");

  let resultMsg = `${originalInput} ${
    isPalindrome ? "is" : "is not"
  } a palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerText = resultMsg;
  resultDiv.appendChild(pTag);
};

checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
  }
});
