// We can have as many locales here as we want, 
// and use any locales we want. We have English
// and German as locales here as examples.
let translations = {
  // English translations
  "en": {
    "_publicKey":"public key",
    "addChannel":"Add by channel id",
    "addChannelPlaceholder":"channel id",
    "addFirstChannelImage":"add a channel image first",
    "addFirstChannelName":"add a channel name first",
    "adminKey":"Your admin key",
    "ago":"ago",
    "channelId":"Channel id",
    "channelImagePlaceholder":"channel image e.g. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "channelNamePlaceholder":"channel name",
    "checkSomeone":"Check someone out",
    "comingSoon":"coming soon",
    "copied":"copied",
    "copy":"Copy",
    "createChannel":"Create a channel",
    "day" : "day",
    "days" : "days",
    "DESC":"Talk to people",
    "directMessage":"Direct message this user",
    "hour" : "hour",
    "hours" : "hours",
    "imageInstructions":"The image needs to be hosted externally (such as on imgur or imgbb) because I don't want to store a bunch of images",
    "imageUploadInfo":"There are no image uploads, but fear not! Paste an image from the web into your message and the next time you click this image button your image will appear here for easy access. By the way, images must be hosted externally (such as on imgur or imgbb) because I don't want to store a bunch of images.",
    "import":"Import",
    "importAccount":"Import an account",
    "importWalletError":"Something went wrong while importing your wallet, contact a developer for help",
    "invalidHexColor.":"Invalid HEX color.",
    "isNotHex":"your private key is not a hex-formatted string",
    "loading":"Loading...",
    "manageChannels" : "Manage channels",
    "manageChannelsMessage" : "Find/create/remove channels",
    "manageWallet":"Manage wallet",
    "message" : "Message",
    "minute" : "minute",
    "minutes" : "minutes",
    "modifyAllThings":"Modify all the things",
    "month" : "month",
    "months" : "months",
    "mustBe32Byte":"Your private key must be a 32 byte hex-formatted string",
    "nameLives":" lives in an abandoned warehouse on top of a mountain in a jungle. Surviving only on bananas and leftover car parts, roams the wild horizon of the amazon, looking on and on for something not yet grokked",
    "pastePrivateKey":"paste a private key",
    "privateKey":"Your private key",
    "profile":"Profile",
    "publicKey":"Your public key",
    "readKey":"Your read key",
    "relayApparentlySent":"Your relay apparently sent you a message with an invalid signature",
    "relaysPart":"They should never do that and it indicates malicious behavior on the relay's part. Consider switching to a new relay",
    "removeChannel":"Remove a channel",
    "replyToMessageNotFound" : "This post is a reply to a message that could not be found",
    "replyToThisMessage" : "Reply to this message",
    "saySomething" : "Say something",
    "second" : "second",
    "seconds" : "seconds",
    "settings":"Settings",
    "startPageText":"Please select a channel on the left. You can also go to Settings (three dots in the top right) to import a private key or backup your current keys.",
    "submit":"Submit",
    "successAccountImported":"success, your account was imported",
    "unknown" : "Unknown",
    "unknownError" : "unknown error, could not add this channel -- please contact a developer for help",
    "viewThisEvent" : "View this event on nostr.guru",
    "viewYourProfil":"View your profile",
    "walletUrl":"Your wallet url",
    "year" : "year",
    "years" : "years",
    "yourInfo":"Your info",
    "yourInfoAboutPlaceholder":"enter info about yourself",
    "yourInfoImagePlaceholder":"user picture e.g. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "yourInfoNamePlaceholder":"display name",
    "yourInfoProcessed":"Your info was processed",
    "NAME":"Anigma",
    "convert":"Convert",
    "global":"Global",
    "globalDesc":"What everyone's talking about",
    "blockThisUser":"Block this user",
    "confirmUserBlock":"Are you sure you want to block all posts by this user? This will only affect what you see, not what others see"
  },

  // German translations
  "de": {
    "_publicKey":"??ffentlicher Sch??ssel",
    "addChannel":"Hinzuf??gen nach Kanal-ID",
    "addChannelPlaceholder":"Kanal-ID",
    "addFirstChannelImage":"add a channel image first",
    "addFirstChannelName":"add a channel name first",
    "adminKey": "Ihr Admin-,Verwaltungsschl??ssel",
    "ago":"her",
    "channelId" : "Kanal Id",
    "channelImagePlaceholder":"Kanal-Bild z.B.. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "channelNamePlaceholder":"Kanal-Name",
    "checkSomeone":"Jemanden ??berpr??fen",
    "comingSoon":"demn??chst verf??gbar",
    "copied":"kopiert",
    "copy": "kopieren",
    "createChannel":"Einen Kanal erstellen",
    "day" : "Tag",
    "days" : "Tage",
    "DESC":"Talk to people",
    "directMessage":"Direktnachricht an diesen Benutzer",
    "hour" : "Stunde",
    "hours" : "Stunden",
    "imageInstructions":"Das Bild muss extern gehostet werden (z.B. auf imgur oder imgbb), weil ich nicht einen Haufen Bilder speichern m??chte.",
    "imageUploadInfo":"Es k??nnen keine Bilder hochgeladen werden, aber keine Sorge! F??gen Sie ein Bild aus dem Internet in Ihre Nachricht ein, und wenn Sie das n??chste Mal auf diese Schaltfl??che klicken, wird Ihr Bild hier angezeigt, damit Sie leicht darauf zugreifen k??nnen. Die Bilder m??ssen ??brigens extern gehostet werden (z. B. auf imgur oder imgbb), weil ich nicht einen ganzen Haufen Bilder speichern m??chte.",
    "import": "Importieren",
    "importAccount": "Ein User-Konto importieren",
    "importWalletError":"Beim Importieren Ihrer Wallet ist etwas schief gelaufen, kontaktieren Sie einen Entwickler f??r Hilfe",
    "invalidHexColor.":"Ung??ltige HEX-Farbe.",
    "isNotHex":"Ihr privater Schl??ssel ist keine hex-Formatierte Zeichenkette",
    "loading":"Lade...",
    "manageChannels" : "Kan??le verwalten",
    "manageChannelsMessage" : "Kan??le suchen/erstellen/entfernen",
    "manageWallet":"Wallet verwalten",
    "message":"Nachricht",
    "minute" : "Minute",
    "minutes" : "Minuten",
    "modifyAllThings": "??ndern Sie alle Dinge",
    "month" : "Monat",
    "months" : "Monate",
    "mustBe32Byte":"Ihr privater Schl??ssel muss eine 32-Byte-Zeichenkette im Hex-Format sein",
    "nameLives":"lebt in einem verlassenen Lagerhaus auf dem Gipfel eines Berges im Dschungel, lebt von Bananen und ??brig gebliebenen Autoteilen und durchstreift den wilden Horizont des Amazonas, immer auf der Suche nach etwas, das er noch nicht verstanden hat",
    "pastePrivateKey": "Privaten Schl??ssel einf??gen",
    "privateKey": "Ihr privater Schl??ssel",
    "profile":"Profil",
    "publicKey": "Ihr ??ffentlicher Schl??ssel",
    "readKey": "Ihr Leseschl??ssel",
    "relayApparentlySent":"Ihr Relais hat Ihnen offenbar eine Nachricht mit einer ung??ltigen Signatur geschickt.",
    "relaysPart":"Das sollten sie niemals tun, und es deutet auf ein b??swilliges Verhalten des Relais hin. Erw??gen Sie den Wechsel zu einem neuen Relais!",
    "removeChannel":"Kanal entfernen",
    "replyToMessageNotFound" : "Dieser Beitrag ist eine Antwort auf eine Nachricht, die nicht gefunden werden konnte",
    "replyToThisMessage" : "Auf diese Nachricht antworten",
    "saySomething" : "Sag etwas",
    "seconds" : "Sekunden",
    "settings":"Einstellungen",
    "startPageText":"Bitte w??hlen Sie einen Kanal auf der linken Seite. Sie k??nnen auch zu den Einstellungen gehen (drei Punkte oben rechts), um einen privaten Schl??ssel zu importieren oder Ihre aktuellen Schl??ssel zu sichern.",
    "submit":"senden",
    "successAccountImported":"Ihr Konto wurde erfolgreich importiert.d",
    "unknown" : "Unbekannt",
    "unknownError": "unbekannter Fehler, konnte diesen Kanal nicht hinzuf??gen -- bitte kontaktieren Sie einen Entwickler f??r Hilfe",
    "viewThisEvent" : "Dieses Ereignis auf nostr.guru ansehen",
    "viewYourProfil":"Ihr Profil ansehen",
    "walletUrl": "Ihre Wallet-URL",
    "year" : "Jahr",
    "years" : "Jahre",
    "yourInfo": "Deine Info",
    "yourInfoAboutPlaceholder": "Gib Informationen ??ber dich ein",
    "yourInfoImagePlaceholder": "Benutzerbild z.B. https://i.ibb.co/Q8X9cQL/bitcoin-chess.png",
    "yourInfoNamePlaceholder": "angezeigter Name",
    "yourInfoProcessed": "Deine Info wurde bearbeitet",
    "NAME":"Anigma",
    "convert":"verwandeln",
    "global":"Global",
    "globalDesc":"Wor??ber alle reden",
    "blockThisUser":"diesen Benutzer blockieren",
    "confirmUserBlock":"M??chten Sie wirklich alle Beitr??ge dieses Benutzers blockieren? Dies wirkt sich nur auf das aus, was Sie sehen, nicht auf das, was andere sehen"
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
   if ( !locale ) return;
   return translations[locale][key]
}
