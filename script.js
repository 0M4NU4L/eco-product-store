// Carbon footprint calculation logic
function calculateFootprint() {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    let footprint = 0;

    // Set carbon footprint values for each product (in kg CO2)
    if (product === "bottle") {
        footprint = 0.5; // Eco-Friendly Water Bottle
    } else if (product === "bags") {
        footprint = 0.2; // Reusable Shopping Bags
    }

    const totalFootprint = footprint * quantity;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h4>Estimated Carbon Footprint:</h4>
        <p>${totalFootprint} kg of CO2</p>
    `;
}

// Contact form validation (simple)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us! We will get back to you soon.');
        this.reset(); // Reset the form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});