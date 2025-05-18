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
productMessage = "Over 150+ customers and 2 major wholesalers use our Smart Motor Starter — the easiest way to control your farm motor by phone. Farmers trust us to save time, reduce effort, and modernize farming.";
subsection2.innerHTML = `
  <div class="row align-items-center">
    <div class="col-lg-3" id="sub2-col1">
      <div class="user-message">
        <img src="assets/images/userImg5.jpg" alt="User" class="user-img">
        <div class="message-bubble">Saves time and effort.</div>
      </div>
    </div>
    <div class="col-lg-6" id="sub2-col2">
      <div class="product-message">${productMessage.split(" ").map(word => {
        const span = `<span>${word}</span><span>&nbsp;</span>`;
        // const span = `<span>${word} </span>`;
        return span;
      }).join("")}</div>
    </div>
    <div class="col-lg-3" id="sub2-col3">
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

function runFadeInAnimation() {
  const messageSpans = document.querySelectorAll(".product-message span");
  
  messageSpans.forEach((span, index) => {
    const delay = index * 0.01;
    span.style.animationDelay = `${delay}s`;
  });
}





