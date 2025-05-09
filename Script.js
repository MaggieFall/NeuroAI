// Add messages to chat window
function addMessage(message, sender = 'bot') {
  const chat = document.getElementById('chat');
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.innerText = message;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}

// Handle send button
function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  input.value = '';

  // Basic AI logic
  const lowerMsg = message.toLowerCase();
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    addMessage("Hi there! Ready for your daily check-in?");
    dailyCheckIn();
  } else if (lowerMsg.includes('check-in')) {
    dailyCheckIn();
  } else {
    addMessage("I'm here to support you. You can type 'check-in' or say how you feel.");
  }
}

// Daily Check-in Logic
const dailyCheckInOptions = ['Happy', 'Anxious', 'Sad', 'Tired', 'Angry', 'Numb'];

function dailyCheckIn() {
  addMessage("How are you feeling today?");
  const chat = document.getElementById('chat');
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-group';

  dailyCheckInOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "checkin-btn";
    btn.onclick = () => handleMood(option);
    btnContainer.appendChild(btn);
  });

  chat.appendChild(btnContainer);
  chat.scrollTop = chat.scrollHeight;
}

function handleMood(mood) {
  addMessage(`You chose: ${mood}`, 'user');
  let response = "";

  switch (mood) {
    case 'Happy':
      response = "That's beautiful to hear! Keep spreading joy.";
      break;
    case 'Anxious':
      response = "I’m right here. Would you like a short breathing or grounding activity?";
      break;
    case 'Sad':
      response = "Sadness is real. Want to chat more or try writing a short reflection?";
      break;
    case 'Tired':
      response = "You matter. Maybe a short break or rest will help.";
      break;
    case 'Angry':
      response = "Anger tells us something. Want to unpack it or redirect it together?";
      break;
    case 'Numb':
      response = "Feeling nothing can feel heavy, too. Let’s gently reconnect, if you’d like.";
      break;
  }

  addMessage(response, 'bot');
}

// Handle Enter key
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
