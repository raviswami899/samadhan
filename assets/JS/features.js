
const featureData = [
  {
    icon: "fas fa-phone-volume",
    title: "IVR Call Control",
    description: "Control motor via phone call using intuitive IVR options."
  },
  {
    icon: "fas fa-sync-alt",
    title: "Voice Feedback",
    description: "Receive real-time voice status updates after each operation."
  },
  {
    icon: "fas fa-tint-slash",
    title: "Dry Run Protection",
    description: "Protects motor from dry run and low water scenarios."
  },
  {
    icon: "fas fa-bolt",
    title: "Auto Switch",
    description: "Automatically handles phase failure and switching needs."
  },
  {
    icon: "fas fa-sim-card",
    title: "SIM Flexibility",
    description: "Supports all SIM types and networks from 2G to 5G."
  },
  {
    icon: "fas fa-user-shield",
    title: "Secure Access",
    description: "Control access for up to 5 registered users safely."
  },
  {
    icon: "fas fa-power-off",
    title: "Emergency Stop",
    description: "Turn off the motor instantly in critical situations."
  },
  {
    icon: "fas fa-battery-half",
    title: "Voltage Protection",
    description: "Automatically handles over and under voltage issues."
  },
  {
    icon: "fas fa-broadcast-tower",
    title: "Wide Compatibility",
    description: "Compatible with single-phase and three-phase motors."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App-Free Usage",
    description: "Works with all phones — no smartphone required."
  }
];

$(document).ready(function () {
  const $container = $('#featureCardsContainer');
  featureData.forEach((item) => {
    const html = `
        <div class="feature-box">
        <div class="feature-icon"><i class="fas ${item.icon} fa-beat-fade"></i></div><br>
        <h5 class="feature-title">${item.title}</h5>
        <p class="feature-description">${item.description}</p>
      </div>`;
    $container.append(html);
  });
});


