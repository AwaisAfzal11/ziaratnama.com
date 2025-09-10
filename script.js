(function () {
    // --- UPDATED & RELIABLE DATE ---
    // This is your static launch date: September 9, 2025, at midnight (00:00:00).
    // The format "YYYY-MM-DDTHH:MM:SS" is the most reliable across all browsers.
    const countDownDate = new Date("2025-09-09T00:00:00").getTime(); // <-- YOUR LAUNCH DATE AND TIME HERE

    // Get the HTML elements to update
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // This function runs the countdown logic
    function updateCountdown() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // If the countdown has passed, stop the timer and show zeros.
        if (distance < 0) {
            clearInterval(interval);
            daysEl.innerHTML = "00";
            hoursEl.innerHTML = "00";
            minutesEl.innerHTML = "00";
            secondsEl.innerHTML = "00";
            return; // Stop the function here
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Helper function to add a leading zero if number is less than 10
        const formatTime = (time) => (time < 10 ? `0${time}` : time);

        // Display the result in the corresponding elements
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    // Run the update function immediately to avoid a 1-second delay on page load
    updateCountdown();

    // Set the interval to update the count down every 1 second
    const interval = setInterval(updateCountdown, 1000);

})();