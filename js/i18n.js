
// function loadLanguage(lang) {
//   localStorage.setItem("lang", lang);
//   fetch(`lang/lang-${lang}.json`)
//     .then(res => res.json())
//     .then(data => {
//       document.querySelectorAll("[data-i18n]").forEach(el => {
//         const key = el.getAttribute("data-i18n");
//         if (data[key]) el.innerText = data[key];
//       });
//     });
// }
// window.addEventListener("DOMContentLoaded", () => {
//   const lang = localStorage.getItem("lang") || "sr";
//   loadLanguage(lang);
// });


function loadLanguage(lang) {
  localStorage.setItem("lang", lang);
  fetch(`lang/lang-${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.setAttribute("value", data[key]);
          } else {
            el.innerText = data[key];
          }
        }
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (data[key]) {
          el.setAttribute("placeholder", data[key]);
        }
      });
    });
}

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "sr";
  loadLanguage(lang);
});
