const seats = document.querySelectorAll('.seat:not(.allocated)');
const selectedSeatsElement = document.getElementById('selected-seats');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const selectedDateTimeElement = document.getElementById('selected-date-time');
const bookingStatusElement = document.getElementById('booking-status');
const bookSeatsButton = document.getElementById('book-seats');

let selectedSeats = [];

// Add click event listener to all available seats
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatNumber = seat.getAttribute('data-seat');
        
        // Toggle seat selection
        if (selectedSeats.includes(seatNumber)) {
            selectedSeats = selectedSeats.filter(s => s !== seatNumber);
            seat.classList.remove('selected');
        } else {
            selectedSeats.push(seatNumber);
            seat.classList.add('selected');
        }

        updateSelectedSeats();
    });
});

// Update the selected date and time
dateInput.addEventListener('change', updateSelectedDateTime);
timeInput.addEventListener('change', updateSelectedDateTime);

bookSeatsButton.addEventListener('click', () => {
    // Check if all required fields are filled
    if (selectedSeats.length === 0 || !dateInput.value || !timeInput.value) {
        bookingStatusElement.textContent = "Please select seats, date, and time.";
        bookingStatusElement.style.color = 'red';
    } else {
        // Show booking confirmation
        bookingStatusElement.textContent = `Booking confirmed for seats: ${selectedSeats.join(', ')} on ${dateInput.value} at ${timeInput.value}.`;
        bookingStatusElement.style.color = 'green';
        
        // Mark selected seats as allocated
        selectedSeats.forEach(seat => {
            const seatElement = document.querySelector(`.seat[data-seat="${seat}"]`);
            seatElement.classList.add('allocated');
            seatElement.classList.remove('selected');
        });
        
        // Clear selected seats
        selectedSeats = [];
        updateSelectedSeats();

        // Redirect to order form page
        setTimeout(() => {
            window.location.href = 'hack.html';
        }, 2000); // Redirect after 2 seconds to allow user to see the booking confirmation
    }
});

function updateSelectedSeats() {
    if (selectedSeats.length > 0) {
        selectedSeatsElement.textContent = selectedSeats.join(', ');
    } else {
        selectedSeatsElement.textContent = 'None';
    }
}

function updateSelectedDateTime() {
    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;
    selectedDateTimeElement.textContent = `Date & Time: ${selectedDate && selectedTime ? `${selectedDate} at ${selectedTime}` : 'Not selected'}`;
}


