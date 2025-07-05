const allMessages = [
  {
    text: "🌟 May your summer be as bright as your future in tech — keep learning, growing, and dreaming big! 🌱💻✨",
    animation: "glow"
  },
  {
    text: "Wishing you a summer full of rest, fun, and curiosity! ☀️📚",
    animation: "fade-in"
  },
  {
    text: "Take a break, refresh your mind, and come back stronger! 🌴💡",
    animation: "slide-left"
  },
  {
    text: "You’ve earned this! Enjoy every sunny moment. 🌞🎉",
    animation: "bounce"
  },
  {
    text: "Recharge, explore something new, and enjoy your vacation! 🚀🧠",
    animation: "zoom-in"
  },
  {
    text: "Happy summer! Keep coding cool ideas even on hot days! 🧊💻",
    animation: "fade-in"
  },
  {
    text: "🙏 Thanks for everything — your friendship, effort, and memories. Enjoy your well-deserved break! 🌟💖",
    animation: "glow"
  }
];

let remainingMessages = [...allMessages];
let lastShown = null;
let shownCount = 0;

function showWish() {
  if (remainingMessages.length === 0) {
    // Reset the list but exclude the last shown wish to avoid immediate repetition
    remainingMessages = allMessages.filter(msg => msg.text !== lastShown?.text);
    shownCount = 0;
  }

  // Pick a random message from remainingMessages
  const randomIndex = Math.floor(Math.random() * remainingMessages.length);
  const selected = remainingMessages.splice(randomIndex, 1)[0];

  // If only one message left and it's the same as last shown, try again
  if (selected.text === lastShown?.text && remainingMessages.length > 0) {
    remainingMessages.push(selected);
    return showWish();
  }

  lastShown = selected;
  shownCount++;

  const messageEl = document.getElementById("wishMessage");
  const counterEl = document.getElementById("counter");

  // Reset animation
  messageEl.className = "";
  void messageEl.offsetWidth; // trigger reflow to restart animation

  // Set new message and animation
  messageEl.textContent = selected.text;
  messageEl.classList.add(selected.animation);

  // Update counter
  counterEl.textContent = `Wish ${shownCount} of ${allMessages.length}`;
}
