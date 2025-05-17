
const featureData = [
  {
    icon: "fas fa-phone-volume",
    title: "IVR Call Control",
    description: "Control motor via phone call using intuitive IVR options.",
    descriptionPopup: "Easily manage your motor remotely through a user-friendly IVR (Interactive Voice Response) system. Simply make a call, and follow the voice instructions to start, stop, or check the motor's status. This eliminates the need for a smartphone or internet. It's convenient, fast, and designed for users of all ages.",
    image: "https://i.pinimg.com/736x/0b/7c/54/0b7c54acd3c9bdc9e96ac2f4a9e3839b.jpg",
    // image: "https://i.pinimg.com/736x/84/01/80/8401806bd2076b657d751077e205ae53.jpg",
    // bgImage: "assets/images/ivr_bg.jpg",
    bgImage: "https://i.pinimg.com/736x/6e/86/81/6e8681bef0fdd10346660d124b90eaf2.jpg",
    heading: "Control at Your Fingertips",
    subtext: "Operate your motor effortlessly through any phone."
  },
  {
    icon: "fas fa-sync-alt",
    title: "Voice Feedback",
    description: "Receive real-time voice status updates after each operation.",
    descriptionPopup: "Stay informed with instant voice alerts after every command. Whether you start or stop the motor, you'll receive a clear spoken confirmation. This ensures you're never left guessing about the motor's current status. Voice feedback adds a layer of trust and ease to daily operations.",
    image: "https://i.pinimg.com/736x/80/e8/98/80e898316ce688690b106cb94927ec18.jpg",
    // bgImage: "assets/images/voice-feedback_bg.jpg",
    bgImage: "https://i.pinimg.com/736x/d7/d8/66/d7d8660c1954076d1a22ee66e8b22495.jpg",
    heading: "Stay Updated Instantly",
    subtext: "Know your motor’s status with real-time voice alerts."
  },
  {
    icon: "fas fa-tint-slash",
    title: "Dry Run Protection",
    description: "Protects motor from dry run and low water scenarios.",
    descriptionPopup: "The system includes smart dry run detection to prevent motor damage. When it detects a lack of water flow or low pressure, it automatically shuts off the motor. This helps you save water, energy, and extends the lifespan of your pump. It's ideal for agriculture and water-sensitive environments.",
    // image: "https://i.pinimg.com/736x/be/32/1f/be321fb9db4bada970b482fb8c630b9a.jpg",
    image:"https://i.pinimg.com/736x/27/26/89/272689a603e9ed3e8fec3b232e10b39a.jpg",
    // bgImage: "https://i.pinimg.com/736x/24/35/51/243551e6f60a50b7d27a3985c10dde00.jpg",
    bgImage: "https://i.pinimg.com/736x/f7/34/26/f73426eafe5eaf65c4924a667704b2c6.jpg",
    heading: "Built-in Safety Measures",
    subtext: "Avoid costly damage with intelligent dry run detection."
  },
  {
    icon: "fas fa-bolt",
    title: "Auto Switch",
    description: "Automatically handles phase failure and switching needs.",
    descriptionPopup: "The device is equipped to handle power phase issues intelligently. If a phase fails, it automatically switches to another available one where supported. This means fewer disruptions and consistent motor performance. You no longer need to worry about phase outages during critical times.",
    image: "https://i.pinimg.com/736x/91/f5/01/91f50198800641520492d6276cd401ca.jpg",
    bgImage: "https://i.pinimg.com/736x/38/87/6a/38876a54249d32434cab0a1de1c92819.jpg",
    heading: "Smart Power Handling",
    subtext: "Automatic phase switching for continuous operation."
  },
  {
    icon: "fas fa-sim-card",
    title: "SIM Flexibility",
    description: "Supports all SIM types and networks from 2G to 5G.",
    descriptionPopup: "Enjoy true flexibility with support for all major SIM cards, including 2G, 3G, 4G, and even 5G networks. This ensures stable and reliable connectivity in both rural and urban areas. Use any provider and switch SIMs without hassle, ensuring smooth control at all times.",
    image: "https://i.pinimg.com/736x/4f/d3/ff/4fd3ff98dfe4b8056ed22e9664a0a705.jpg",
    bgImage: "https://i.pinimg.com/736x/bc/50/b6/bc50b6a85768d08f5ee3254ea1a15efc.jpg",
    heading: "Universal SIM Support",
    subtext: "Works with all Indian telecom providers and networks."
  },
  {
    icon: "fas fa-user-shield",
    title: "Secure Access",
    description: "Control access for up to 5 registered users safely.",
    descriptionPopup: "Keep your motor operations secure by allowing access only to trusted users. You can register up to five phone numbers for safe operation. Unauthorized calls are automatically rejected, giving you full control and peace of mind. It's ideal for farms or shared setups.",
    image: "https://i.pinimg.com/736x/e3/ed/ad/e3edad07f9c0278a10462e02fad2cef9.jpg",
    bgImage: "https://i.pinimg.com/736x/72/46/33/724633ecc8fbf8b682192b95afce6737.jpg",
    heading: "Multi-User Control",
    subtext: "Add up to 5 trusted users to operate the device."
  },
  {
    icon: "fas fa-power-off",
    title: "Emergency Stop",
    description: "Turn off the motor instantly in critical situations.",
    descriptionPopup: "In case of emergencies, the motor can be turned off immediately with a single call or command. This feature is crucial for preventing equipment damage, electrical hazards, or flooding. It ensures user safety and allows quick response during unexpected situations.",
    image: "https://i.pinimg.com/736x/be/34/77/be3477e2acffbbec11c474b595c5f993.jpg",
    bgImage: "https://i.pinimg.com/736x/2b/dd/f7/2bddf781b37cd45dad12b39a2eedfdf4.jpg",
    heading: "Instant Shutdown",
    subtext: "Stop your motor immediately in critical moments."
  },
  {
    icon: "fas fa-battery-half",
    title: "Voltage Protection",
    description: "Automatically handles over and under voltage issues.",
    descriptionPopup: "Your motor is protected from voltage fluctuations with automatic cutoff during unsafe conditions. The device constantly monitors power levels, shutting off when voltage is too high or low. This safeguards your equipment from overheating or burnout due to electrical issues.",
    image: "https://i.pinimg.com/736x/6f/77/55/6f7755b077d15ccb7de1811d41963846.jpg",
    bgImage: "https://i.pinimg.com/736x/16/d0/85/16d0850a419d47e870f78752a110a5a6.jpg",
    heading: "Protective Voltage Control",
    subtext: "Keeps your motor safe during power fluctuations."
  },
  {
    icon: "fas fa-broadcast-tower",
    title: "Wide Compatibility",
    description: "Compatible with single-phase and three-phase motors.",
    descriptionPopup: "Designed for versatility, this device works with both single-phase and three-phase motors. Whether you have a small pump or a large agricultural setup, it seamlessly adapts to your system. You don’t need different devices for different motor types — it covers all your needs.",
    // image: "https://i.pinimg.com/736x/49/45/fc/4945fc0f18e534c11439356c23c1d90a.jpg",
    image: "https://i.pinimg.com/736x/a2/7b/70/a27b70692381df30f39bb58ec1112031.jpg",
    bgImage: "https://i.pinimg.com/736x/ab/da/63/abda6332c978ddec3851e274ae2219fa.jpg",
    heading: "Flexible Motor Support",
    subtext: "Supports all common agricultural motor types."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App-Free Usage",
    description: "Works with all phones — no smartphone required.",
    descriptionPopup: "Operate your motor without installing any apps or using the internet. All features are accessible through simple phone calls, even from basic feature phones. This makes it perfect for users in remote areas or those who prefer non-smartphone options. Easy, fast, and reliable.",
    image: "https://i.pinimg.com/736x/4a/bc/47/4abc4734633e8b414f8bc41758f23273.jpg",
    bgImage: "https://i.pinimg.com/736x/3f/f4/7b/3ff47ba9102cb96193ef72541b7c9cb0.jpg",
    heading: "No App, No Hassle",
    subtext: "Operate from any phone — even a basic feature phone."
  }
];


let currentFeatureIndex = 0;
const featureModalElement = document.getElementById("featureModal");
const featureModalInstance = new bootstrap.Modal(featureModalElement);


function showFeatureModal(index) {
  const feature = featureData[index];
  currentFeatureIndex = index;

  document.getElementById("featureModalLabel").textContent = feature.title;
  document.getElementById("featureImage").src = feature.image;
  document.getElementById("featureImage").alt = feature.title;
  document.getElementById("featureHeading").textContent = feature.heading || '';
  document.getElementById("featureSubtext").textContent = feature.subtext || '';
  document.getElementById("featureDescriptionPopup").textContent = feature.descriptionPopup || '';

  featureModalInstance.show(); // ← Use the persistent instance
}


// Navigation buttons
document.getElementById("prevFeature").addEventListener("click", () => {
  currentFeatureIndex = (currentFeatureIndex - 1 + featureData.length) % featureData.length;
  showFeatureModal(currentFeatureIndex);
});

document.getElementById("nextFeature").addEventListener("click", () => {
  currentFeatureIndex = (currentFeatureIndex + 1) % featureData.length;
  showFeatureModal(currentFeatureIndex);
});

document.querySelector('#featureModal .modal-body').scrollTop = 0;


$(document).ready(function () {
  const $container = $('#featureCardsContainer');

  featureData.forEach((item, index) => {
    const html = `
      <div class="feature-box" data-index="${index}" style="background-image: url('${item.bgImage}')">
        
        <h5 class="feature-title">${item.title}</h5>
        <p class="feature-description">${item.description}</p>
      </div>`;
    $container.append(html);
  });

  // Use unified showFeatureModal here
  $container.on('click', '.feature-box', function () {
    const index = $(this).data('index');
    showFeatureModal(index);
  });
});



