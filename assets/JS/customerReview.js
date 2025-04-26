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
  
  const subsection2 = document.createElement("div");
  subsection2.id = "review-subsection-2";
  subsection2.className = "container";
  subsection2.innerHTML = `
    <div class="row">
      <div class="col-lg-3" id="review-col-1">
      <div class="user-message">
        <img src="assets/images/userImg${5}.jpg" alt="User" class="user-img">
        <div class="message-bubble">Saves time and effort.</div>
      </div>
      </div>
      <div class="col-lg-6">
        <div class="product-message text-center">Over 150+ active customers and 2 major wholesalers have embraced our Smart Motor Starter — the simplest way to control your farm’s motor with just a phone call.
            Farmers across the region trust us to save time, reduce effort, and bring modern convenience to traditional farming.
            See what they’re saying about the future of farming!
        </div>
      </div>
      <div class="col-lg-3" id="review-col-2">
      <div class="user-message">
        <img src="assets/images/userImg${6}.jpg" alt="User" class="user-img">
        <div class="message-bubble">Easy for all ages.</div>
      </div>
      </div>
    </div>
  `;
  
  const subsection3 = document.createElement("div");
  subsection3.id = "review-subsection-3";
  
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
      subsection1.innerHTML += reviewHTML;
    } else if (index < 6) {
      const colId = index === 4 ? "review-col-1" : "review-col-2";
      document.getElementById(colId)?.insertAdjacentHTML("beforeend", reviewHTML);
    } else {
      subsection3.innerHTML += reviewHTML;
    }
  });
  
  // Append all subsections to the main container
  reviewContainer.appendChild(subsection1);
  reviewContainer.appendChild(subsection2);
  reviewContainer.appendChild(subsection3);
  