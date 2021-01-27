const replaceR = (text) => {
  return text
    .replaceAll(/rz/g, "~~")
    .replaceAll(/Rz/g, "^~")
    .replaceAll(/RZ/g, "^^")
    .replaceAll(/r/g, "ł")
    .replaceAll(/R/g, "Ł")
    .replaceAll(/~~/g, "rz")
    .replaceAll(/\^~/g, "Rz")
    .replaceAll(/\^\^/g, "RZ");
};

const replaceText = (element) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (
      !["STYLE", , "G-BUTTON", "NOBR", "SCRIPT", "NOSCRIPT"].includes(
        element.parentNode.tagName
      )
    ) {
      element.textContent = replaceR(element.textContent);
    }
  }
};

replaceText(document.body);
document.title = replaceR(document.title);
