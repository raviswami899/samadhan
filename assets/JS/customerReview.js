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
  
  const reviewContainer = document.getElementById("customer-review-section");
  
  reviews.forEach((review, index) => {
    const userIndex = index + 1;
    const userImage = `assets/images/userImg${userIndex}.jpg`;
    
    const reviewHTML = `
      <div class="user-message">
        <img src="${userImage}" alt="User" class="user-img">
        <div class="message-bubble">${review}</div>
      </div>
    `;
    reviewContainer.innerHTML += reviewHTML;
  });
  