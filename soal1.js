//Deteksi Palindrom

const palindrome = (text) => {
  const checkText = text.toLowerCase().replace(/[\W_]/g, "");
  const reversedText = checkText.split("").reverse().join("");
  if (checkText === reversedText) {
    console.log(`${text} merupakan palindrom`);
    return;
  } else {
    console.log(`${text} bukan palindrom`);
    return;
  }
};

palindrome("malam");
palindrome("bakso")


//Reverse Word

reverseWords = (text) => {
  return text.split(" ").reverse().join(" ");
};

console.log(reverseWords("Saya belajar Javascript"));