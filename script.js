document.getElementById("orderForm").addEventListener("submit", function(event){
    event.preventDefault();
    // Create a popup
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <h2>Congratulations!</h2>
        <p>Your've bought two tickets. Please, save it on your device and show before the entering to the theatre</p>
        <button id="save-tickets">Save tickets</button>
        <span class="close-button">&#10006;</span> 
    `;

    // Add the popup to the body
    document.body.appendChild(popup);

    // Hide the order form
    document.querySelector('.order-form').style.display = 'none';

    // Add event listener to the close button
    const closeButton = popup.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        popup.remove();
        document.querySelector('.order-form').style.display = 'block';
    });
// Add event listener to the "Save tickets" button
const saveTicketsButton = popup.querySelector('#save-tickets');
saveTicketsButton.addEventListener('click', () => {
    console.log('Tickets saved!');
    popup.remove();
    document.querySelector('.order-form').style.display = 'block';
    });
});