const toggleMode = () => {
    const body = document.body;
    const jumbotron = document.querySelector(".jumbotron");
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleIcon = document.querySelector("#toggle-icon");
  
    
      body.classList.toggle("dark-mode");
      jumbotron.classList.toggle("jumbotron-dark");
  
      if (body.classList.contains("dark-mode")) {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
        toggleBtn.classList.add("on");
      } else {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
        toggleBtn.classList.remove("on");
      }
  
      if (!jumbotron.classList.contains("jumbotron-dark")) {
        jumbotron.classList.add("jumbotron-dark");
      }

    
  };

  const by = (selector) => document.querySelector(selector);
  const $typingText = by(".typing-text");
  const $cursor = by(".cursor");
  
  const words = [" selamat", " datang", " di portofolioku", " :)"];
  const delay = {
    typing: 100,
    keeping: 500,
    erasing: 50,
    word: 1000,
  };
  
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  const type = async (word) => {
    $cursor.classList.add("typing");
    for (const char of word) {
      $typingText.textContent += char;
      await sleep(delay.typing);
    }
    $cursor.classList.remove("typing");
    await sleep(delay.keeping);
  
    for (let i = 0; i < word.length; i++) {
      $typingText.textContent = word.substring(0, word.length - i);
      await sleep(delay.erasing);
    }
  }
  
  const loop = async (wordindex = 0) => {
    await type(words[wordindex % words.length]);
  
    setTimeout(async () => {
      await loop(wordindex + 1);
    }, delay.word);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loop();
  });