

let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });
    speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = populateVoiceList;

populateVoiceList();

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    let selectedVoiceIndex = voiceSelect.value;
    speech.voice = voices[selectedVoiceIndex];
    window.speechSynthesis.speak(speech);
});
