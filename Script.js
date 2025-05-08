console.log("NeuroAI script loaded successfully");
function sendMessage() {
  const userInput =
    document.getElementById("user-input").value.trim
  ();
  if (!userInput) return;

  const chatDisplay =
    document.getElementById("chat-display");

  //Display user message
  chatDisplay.innerHTML += '<div><strong>You:</
    strong> ${userInput}</div>';

  document.getElementById("user-input").value =
    "";
  chatDisplay.scrollTop =
    chatDisplay.scrollHeight;}

function getAIResponse(message) {
  //Simple emotional response demo
  const lower = message.toLowerCase();
  if (lower.includes("sad") ||
      lower.includes("tired")) {
    return "I'm here for you. Would you like to talk about it?";
  } else if (lower.includes("anxious") ||
             lower.includes("scared")) {
    return "Take a deep breath. Everything is going to be okay, you are not alone.";
  } else {
    return "Tell me more. I'm listening.";
  }
}
