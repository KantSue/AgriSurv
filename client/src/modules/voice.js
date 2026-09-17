export const speakMg = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-Fr"; 
  utterance.rate = 0.96;
  utterance.pitch = 2;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
export const stopSpeaking = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
};