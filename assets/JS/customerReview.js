const reviews = [
  "Works like a charm!",
  "Very useful for farming!",
  "Simple and effective tool.",
  "No more walking miles!",
  "Saves time and effort.",
  "Easy for all ages.",
  "Smart solution for farmers.",
  "Reliable and quick start.",
  "Just a call away!",
  "Great for remote control."
];

const reviewContainer = document.getElementById("customer-review");

// Create wrapper divs
const subsection1 = document.createElement("div");
subsection1.id = "review-subsection-1";
subsection1.className = "container";
subsection1.innerHTML = `
  <div class="row">
    <div class="col-md-6" id="sub1-col1"></div>
    <div class="col-md-6" id="sub1-col2"></div>
  </div>
`;


const subsection2 = document.createElement("div");
subsection2.id = "review-subsection-2";
subsection2.className = "container";
subsection2.innerHTML = `
  <div class="row align-items-center">
    <div class="col-lg-3" id="review-col-1">
      <div class="user-message">
        <img src="assets/images/userImg5.jpg" alt="User" class="user-img">
        <div class="message-bubble">Saves time and effort.</div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="product-message text-center">Over 150+ customers and 2 major wholesalers use our Smart Motor Starter — the easiest way to control your farm motor by phone. Farmers trust us to save time, reduce effort, and modernize farming.</div>
    </div>
    <div class="col-lg-3" id="review-col-2">
      <div class="user-message">
        <img src="assets/images/userImg6.jpg" alt="User" class="user-img">
        <div class="message-bubble">Easy for all ages.</div>
      </div>
    </div>
  </div>
`;



const subsection3 = document.createElement("div");
subsection3.id = "review-subsection-3";
subsection3.className = "container";
subsection3.innerHTML = `
  <div class="row">
    <div class="col-md-6" id="sub3-col1"></div>
    <div class="col-md-6" id="sub3-col2"></div>
  </div>
`;

// Loop and distribute reviews
reviews.forEach((review, index) => {
  const userIndex = index + 1;
  const userImage = `assets/images/userImg${userIndex}.jpg`;

  const reviewHTML = `
    <div class="user-message">
      <img src="${userImage}" alt="User" class="user-img">
      <div class="message-bubble">${review}</div>
    </div>
  `;

  if (index < 4) {
    const colId = index < 2 ? "sub1-col1" : "sub1-col2";
    setTimeout(() => {
      document.getElementById(colId)?.insertAdjacentHTML("beforeend", reviewHTML);
    }, 0);
  } else if (index >= 6) {
    const colId = index < 8 ? "sub3-col1" : "sub3-col2";
    setTimeout(() => {
      document.getElementById(colId)?.insertAdjacentHTML("beforeend", reviewHTML);
    }, 0);
  }
});

// Append all subsections to the main container
reviewContainer.appendChild(subsection1);
reviewContainer.appendChild(subsection2);
reviewContainer.appendChild(subsection3);


const messageEl = document.querySelector(".product-message");
const messageText = messageEl.textContent.trim();
messageEl.innerHTML = ""; // Clear original content

let charIndex = 0;
const wrappedMessage = messageText.split("").map(char => {
  const delay = charIndex * 0.03;
  const safeChar = char === " " ? "&nbsp;" : char;
  const span = `<span style="opacity:0; animation: fadeInChar 0.3s ${delay}s forwards;">${safeChar}</span>`;
  charIndex++;
  return span;
}).join("");

messageEl.innerHTML = wrappedMessage;