const popup = document.querySelector("#thank-you-popup");

function selectedNumber(params) {
  if (params === 1) {
    document.querySelector(
      "#rating-selected"
    ).innerHTML = `You selected ${params} out of 5`;
  } else if (params === 2) {
    document.querySelector(
      "#rating-selected"
    ).innerHTML = `You selected ${params} out of 5`;
  } else if (params === 3) {
    document.querySelector(
      "#rating-selected"
    ).innerHTML = `You selected ${params} out of 5`;
  } else if (params === 4) {
    document.querySelector(
      "#rating-selected"
    ).innerHTML = `You selected ${params} out of 5`;
  } else if (params === 5) {
    document.querySelector(
      "#rating-selected"
    ).innerHTML = `You selected ${params} out of 5`;
  }
}

function openPopup() {
  popup.classList.add("openPopup");
}
