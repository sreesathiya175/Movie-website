const seats = document.querySelectorAll('.seat:not(.allocated)');
const selectedSeatsElement = document.getElementById('selected-seats');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const selectedDateTimeElement = document.getElementById('selected-date-time');
const bookingStatusElement = document.getElementById('booking-status');
const bookSeatsButton = document.getElementById('book-seats');

let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatNumber = seat.getAttribute('data-seat');
        
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

dateInput.addEventListener('change', updateSelectedDateTime);
timeInput.addEventListener('change', updateSelectedDateTime);

bookSeatsButton.addEventListener('click', () => {
    if (selectedSeats.length === 0 || !dateInput.value || !timeInput.value) {
        bookingStatusElement.textContent = "Please select seats, date, and time.";
        bookingStatusElement.style.color = 'red';
    } else {
        bookingStatusElement.textContent = `Booking confirmed for seats: ${selectedSeats.join(', ')} on ${dateInput.value} at ${timeInput.value}.`;
        bookingStatusElement.style.color = 'green';
        selectedSeats.forEach(seat => {
            document.querySelector(`.seat[data-seat="${seat}"]`).classList.add('allocated');
            document.querySelector(`.seat[data-seat="${seat}"]`).classList.remove('selected');
        });
        selectedSeats = [];
        updateSelectedSeats();
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

