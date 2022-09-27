// We can have as many locales here as we want, 
// and use any locales we want. We have English
// and German as locales here as examples.
let translations = {
  // English translations
  "en": {
    "NAME":"Anigma",
    "DESC":"Talk to people",
    "startPageText":"Please select a channel on the left. You can also go to Settings (three dots in the top right) to import a private key or backup your current keys.",
    "viewYourProfil":"View your profil",
    "loading":"Loading...",
    "ago":"ago",
    "unknownError" : "unknown error, could not add this channel -- please contact a developer for help",
    "importWalletError":"Something went wrong while importing your wallet, contact a developer for help",
    "relayApparentlySent":"Your relay apparently sent you a message with an invalid signature",
    "relaysPart":"They should never do that and it indicates malicious behavior on the relay's part. Consider switching to a new relay",
    "message" : "Message",
    "replyToThisMessage" : "Reply to this message",
    "viewThisEvent" : "View this event on nostr.com",
    "unknown" : "Unknown",
    "replyToMessageNotFound" : "This post is a reply to a message that could not be found",
    "channelId":"Channel id",
    "saySomething" : "Say something",
    "comingSoon":"coming soon",
    "years" : "years",
    "year" : "year",
    "months" : "months",
    "month" : "month",
    "days" : "days",
    "day" : "day",
    "hours" : "hours",
    "hour" : "hour",
    "minutes" : "minutes",
    "minute" : "minute",
    "seconds" : "seconds",
    "second" : "second",
    "manageChannels" : "Manage channels",
    "manageChannelsMessage" : "Find/create/remove channels",
    "addChannel":"Add by channel id",
    "addChannelPlaceholder":"channel id",
    "submit":"Submit",
    "removeChannel":"Remove a channel",
    "createChannel":"Create a channel",
    "addFirstChannelName":"add a channel name first",
    "channelNamePlaceholder":"channel name",
    "addFirstChannelImage":"add a channel image first",
    "channelImagePlaceholder":"channel image e.g. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "imageInstructions":"The image needs to be hosted externally (such as on imgur or imgbb) because I don't want to store a bunch of images",
    "manageWallet":"Manage wallet",
    "settings":"Settings",
    "modifyAllThings":"Modify all the things",
    "yourInfo":"Your info",
    "yourInfoNamePlaceholder":"display name",
    "yourInfoAboutPlaceholder":"enter info about yourself",
    "yourInfoImagePlaceholder":"user picture e.g. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "yourInfoProcessed":"Your info was processed",
    "copy":"Copy",
    "publicKey":"Your public key",
    "privateKey":"Your private key",
    "importAccount":"Import an account",
    "pastePrivateKey":"paste a private key",
    "import":"Import",
    "walletUrl":"Your wallet url",
    "adminKey":"Your admin key",
    "readKey":"Your read key",
    "profile":"Profile",
    "checkSomeone":"Check someone out",
    "nameLives":" lives in an abandoned warehouse on top of a mountain in a jungle. Surviving only on bananas and leftover car parts, roams the wild horizon of the amazon, looking on and on for something not yet grokked",
    "_publicKey":"public key",
    "directMessage":"Direct message this user",
    "copied":"copied",
    "mustBe32Byte":"Your private key must be a 32 byte hex-formatted string",
    "isNotHex":"your private key is not a hex-formatted string",
    "successAccountImported":"success, your account was imported",
    "imageUploadInfo":"There are no image uploads, but fear not! Paste an image from the web into your message and the next time you click this image button your image will appear here for easy access. By the way, images must be hosted externally (such as on imgur or imgbb) because I don't want to store a bunch of images.",
    "invalidHexColor.":"Invalid HEX color."
  
  },

  // German translations
  "de": {
    "NAME":"Anigma",
    "DESC":"Talk to people",
    "startPageText":"Bitte wählen Sie einen Kanal auf der linken Seite. Sie können auch zu den Einstellungen gehen (drei Punkte oben rechts), um einen privaten Schlüssel zu importieren oder Ihre aktuellen Schlüssel zu sichern.",
    "viewYourProfil":"Ihr Profil ansehen",
    "loading":"Lade...",
    "ago":"her",
    "unknownError": "unbekannter Fehler, konnte diesen Kanal nicht hinzufügen -- bitte kontaktieren Sie einen Entwickler für Hilfe",
    "importWalletError":"Beim Importieren Ihrer Wallet ist etwas schief gelaufen, kontaktieren Sie einen Entwickler für Hilfe",
    "relayApparentlySent":"Ihr Relais hat Ihnen offenbar eine Nachricht mit einer ungültigen Signatur geschickt.",
    "relaysPart":"Das sollten sie niemals tun, und es deutet auf ein böswilliges Verhalten des Relais hin. Erwägen Sie den Wechsel zu einem neuen Relais!",
    "message":"Nachricht",
    "replyToThisMessage" : "Auf diese Nachricht antworten",
    "viewThisEvent" : "Dieses Ereignis auf nostr.com ansehen",
    "unknown" : "Unbekannt",
    "replyToMessageNotFound" : "Dieser Beitrag ist eine Antwort auf eine Nachricht, die nicht gefunden werden konnte",
    "channelId" : "Kanal Id",
    "saySomething" : "Sag etwas",
    "comingSoon":"demnächst verfügbar",
    "years" : "Jahre",
    "year" : "Jahr",
    "months" : "Monate",
    "month" : "Monat",
    "days" : "Tage",
    "day" : "Tag",
    "hours" : "Stunden",
    "hour" : "Stunde",
    "minutes" : "Minuten",
    "minute" : "Minute",
    "seconds" : "Sekunden",
    "manageChannels" : "Kanäle verwalten",
    "manageChannelsMessage" : "Kanäle suchen/erstellen/entfernen",
    "addChannel":"Hinzufügen nach Kanal-ID",
    "addChannelPlaceholder":"Kanal-ID",
    "submit":"senden",
    "removeChannel":"Kanal entfernen",
    "createChannel":"Einen Kanal erstellen",
    "addFirstChannelName":"add a channel name first",
    "channelNamePlaceholder":"Kanal-Name",
    "addFirstChannelImage":"add a channel image first",
    "channelImagePlaceholder":"Kanal-Bild z.B.. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "imageInstructions":"Das Bild muss extern gehostet werden (z.B. auf imgur oder imgbb), weil ich nicht einen Haufen Bilder speichern möchte.",
    "manageWallet":"Wallet verwalten",
    "settings":"Einstellungen",
    "modifyAllThings": "Ändern Sie alle Dinge",
    "yourInfo": "Deine Info",
    "yourInfoNamePlaceholder": "angezeigter Name",
    "yourInfoAboutPlaceholder": "Gib Informationen über dich ein",
    "yourInfoImagePlaceholder": "Benutzerbild z.B. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "yourInfoProcessed": "Deine Info wurde bearbeitet",
    "copy": "kopieren",
    "publicKey": "Ihr öffentlicher Schlüssel",
    "privateKey": "Ihr privater Schlüssel",
    "importAccount": "Ein User-Konto importieren",
    "pastePrivateKey": "Privaten Schlüssel einfügen",
    "import": "Importieren",
    "walletUrl": "Ihre Wallet-URL",
    "adminKey": "Ihr Admin-,Verwaltungsschlüssel",
    "readKey": "Ihr Leseschlüssel",
    "profile":"Profil",
    "checkSomeone":"Jemanden überprüfen",
    "nameLives":"lebt in einem verlassenen Lagerhaus auf dem Gipfel eines Berges im Dschungel, lebt von Bananen und übrig gebliebenen Autoteilen und durchstreift den wilden Horizont des Amazonas, immer auf der Suche nach etwas, das er noch nicht verstanden hat",
    "_publicKey":"Öffentlicher Schüssel",
    "directMessage":"Direktnachricht an diesen Benutzer",
    "copied":"kopiert",
    "mustBe32Byte":"Ihr privater Schlüssel muss eine 32-Byte-Zeichenkette im Hex-Format sein",
    "isNotHex":"Ihr privater Schlüssel ist keine hex-Formatierte Zeichenkette",
    "successAccountImported":"Ihr Konto wurde erfolgreich importiert.d",
    "imageUploadInfo":"Es können keine Bilder hochgeladen werden, aber keine Sorge! Fügen Sie ein Bild aus dem Internet in Ihre Nachricht ein, und wenn Sie das nächste Mal auf diese Schaltfläche klicken, wird Ihr Bild hier angezeigt, damit Sie leicht darauf zugreifen können. Die Bilder müssen übrigens extern gehostet werden (z. B. auf imgur oder imgbb), weil ich nicht einen ganzen Haufen Bilder speichern möchte.",
    "invalidHexColor.":"Ungültige HEX-Farbe."
 
  },
};


// The locale our app first shows
const defaultLocale = "en";

// The active locale
let locale;

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  // Translate the page to the default locale
  setLocale(defaultLocale);
});

// Load translations for the given locale and translate
// the page to this locale
async function setLocale(newLocale) {
  if (newLocale === locale) return;
  locale = newLocale;
  translatePage();
}
 
// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}
 
function t(key) {
   return translations[locale][key]
}
 