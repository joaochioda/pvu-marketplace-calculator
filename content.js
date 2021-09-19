console.log("scripts running");

function paintRead() {
  let box = document.querySelectorAll(".le.tw-text-center");
  for (let i = 0; i < box.length; i++) {
    textBox = box[i].innerHTML.match(/[0-9]*\d([0-9])*/gm);

    const lePerHour = (textBox[0] / textBox[1]).toFixed(2);
    const lePerDay = (lePerHour * 24).toFixed(2);

    const card = document.querySelectorAll(
      ".tw-grid.tw-grid-rows-3.tw-gap-2.tw-h-full.tw-cursor-pointer.tw-p-2"
    )[i];
    const price =
      parseFloat(card.querySelector(".tw-ml-2.text__green").innerHTML) * 100;
    const TTPY = (price / lePerDay).toFixed(2);

    if (box[i].querySelector("#calculation")) {
      box[i].querySelector("#calculation").remove();
    }

    const content = document.createElement("div");
    content.innerText = `
        LE/H: ${lePerHour}
        LE/D: ${lePerDay}
        TTPY(D): ${TTPY}`;
    content.id = "calculation";
    box[i].appendChild(content);
  }
}

setInterval(paintRead, 500);
