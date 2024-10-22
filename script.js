// Function to trigger a phone call
function callMe() {
    // Replace with your phone number
    window.location.href = "tel:+972549832002";
}

// Function to open WhatsApp chat
function whatsAppMe() {
    // Replace with your phone number in the WhatsApp link
    const phoneNumber = "972549832002"; 
    const message = encodeURIComponent("היי איתי, אהבתי את הצעת המחיר שלך, אפשר לדבר?");
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
}
