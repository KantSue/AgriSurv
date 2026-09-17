// tts_test.js
import fs from 'fs';
import textToSpeech from '@google-cloud/text-to-speech';

async function main() {
  try {
    const client = new textToSpeech.TextToSpeechClient();

    const request = {
      input: { text: "Salama! Izao no fitsapana ny feo amin'ny teny malagasy." },
      voice: {
        languageCode: "mg-MG",        // Langue malgache (si disponible)
        ssmlGender: "NEUTRAL"         // Genre vocal (NEUTRAL/FEMALE/MALE)
      },
      audioConfig: { audioEncoding: "MP3" }
    };

    const [response] = await client.synthesizeSpeech(request);

    fs.writeFileSync("output_malagasy.mp3", response.audioContent);
    console.log("🎧 Fichier audio généré : output_malagasy.mp3");
  } catch (error) {
    console.error("❌ Erreur TTS :", error);
  }
}

main();
