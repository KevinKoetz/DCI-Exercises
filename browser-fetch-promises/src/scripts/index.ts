// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
const modalPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(true), 60000);
});
modalPromise.then(() => {
  const styleSheet = Array.from(document.styleSheets).find((sheet) =>
    sheet.href?.includes("main.css")
  );
  if (!styleSheet) throw new Error("StyleSheet not found");
  const modalRule = Array.from(styleSheet.cssRules).find((rule) => {
    if (rule instanceof CSSStyleRule && rule.selectorText === ".modal")
      return true;
    return false;
  });
  if (!(modalRule && modalRule instanceof CSSStyleRule))
    throw new Error("modalRule not found or rule is no CSSStyleRule");
  modalRule.style.display = "block";

  document
    .getElementById("myModal")
    ?.querySelector(".close")
    ?.addEventListener("click", () => {
      modalRule.style.display = "none";
    });
});
