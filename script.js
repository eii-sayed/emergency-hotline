// heart
const heartCount = document.getElementById("heart-count");
const hearts = document.getElementsByClassName("fa-heart");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const currentCount = parseInt(heartCount.innerText);
    let newCount;

    if (heart.classList.contains("text-red-500")) {
      heart.classList.remove("text-red-500");
      heart.classList.add("text-gray-500");
      newCount = currentCount - 1;
    } else {
      heart.classList.remove("text-gray-500");
      heart.classList.add("text-red-500");
      newCount = currentCount + 1;
    }

    heartCount.innerText = newCount;
  });
}

// call and history
const coinCount = document.getElementById("coin-count");
const callButtons = document.getElementsByClassName("call-btn");

const callHistoryContainer = document.getElementById("call-history");
let callHistoryData = [];

function renderHistory() {
  callHistoryContainer.innerHTML = "";

  callHistoryData.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between bg-gray-100 rounded-lg mb-3 p-2";
    historyItem.innerHTML = `
      <div>
        <p class="font-bold">${item.name}</p>
        <p class="text-gray-500">${item.number}</p>
      </div>
      <div class="flex items-center justify-center">
        ${item.time}
      </div>
    `;
    callHistoryContainer.appendChild(historyItem);
  });
}

for (const button of callButtons) {
  button.addEventListener("click", function () {
    const card = this.parentElement.parentElement;

    const serviceName = card.querySelector(".name").innerText;
    const serviceNumber = card.querySelector(".number").innerText;
    let coins = parseInt(coinCount.innerText);

    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    coinCount.innerText = coins - 20;
    alert("Calling " + serviceName + " (" + serviceNumber + ")");

    callHistoryData.unshift({
      name: serviceName,
      number: serviceNumber,
      time: new Date().toLocaleTimeString(),
    });

    renderHistory();
  });
}

// clr history

const clearHistoryBtn = document.getElementById("clear-history");

clearHistoryBtn.addEventListener("click", function () {
  callHistoryData = [];
  renderHistory();
});

// copy
let copyCount = 0;
const copyButtons = document.getElementsByClassName("copy-btn");
const copyCountDisplay = document.querySelector(".copy-count");

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const number =
      this.parentElement.parentElement.querySelector(".number").innerText;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCountDisplay.innerText = copyCount;
    alert("copied :" + number);
  });
}
