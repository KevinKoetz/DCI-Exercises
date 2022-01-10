// Your code goes here!
import {calculateAspectRatio} from "./aspect-ratio.js";
import percentage from "./percentage.js";

function addPercentageEventListeners(formId, firstId, secondId, resultId, fnc) {
  document.getElementById(formId).addEventListener("input", (e) => {
    const first = e.currentTarget.querySelector("#" + firstId);
    const second = e.currentTarget.querySelector("#" + secondId);
    e.currentTarget.querySelector("#" + resultId).value = Number.isNaN(
      fnc(first.value, second.value)
    )
      ? 0
      : fnc(first.value, second.value);
  });
}

addPercentageEventListeners(
  "modulo-form",
  "modulo_1",
  "modulo_2",
  "modulo_result",
  percentage.modulo
);
addPercentageEventListeners(
  "percentage-form",
  "percentage_1",
  "percentage_2",
  "percentage_result",
  percentage.percentage
);
addPercentageEventListeners(
  "percentageOf-form",
  "percentageOf_1",
  "percentageOf_2",
  "percentageOf_result",
  percentage.percentageOf
);

addPercentageEventListeners(
  "difference-form",
  "difference_1",
  "difference_2",
  "difference_result",
  percentage.difference
);

document.getElementById("aspect-form").addEventListener("input", (e) => {
  const originalWidth = e.currentTarget.querySelector("#ratio_1");
  const originalHeight = e.currentTarget.querySelector("#ratio_2");
  const newWidth = e.currentTarget.querySelector("#ratio_result-width");
  const newHeight = e.currentTarget.querySelector("#ratio_result-height");
  
  if(e.target.id.includes("result")){
    const valueType = e.target.id === "ratio_result-width" ? "w" : "h";
    if(valueType === "h"){
        newWidth.value = calculateAspectRatio(originalWidth.value,originalHeight.value,e.target.value, valueType)
    }else {
        newHeight.value = calculateAspectRatio(originalWidth.value,originalHeight.value,e.target.value, valueType)
    }
  }
  
});
