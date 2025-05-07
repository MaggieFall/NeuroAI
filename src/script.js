document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('start-btn');
  if (button) {
    button.addEventListener('click', () => {
      alert('Welcome to NeuroAI — your intelligent mental health companion!');
    });
  }
});
