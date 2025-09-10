(function () {
    // --- THIS IS THE KEY CHANGE ---
    // Instead of calculating 60 days from "now", we set a fixed, static launch date.
    // IMPORTANT: Change this string to your real launch date and time!
    // FORMAT: "Month Day, Year HH:MM:SS"
    const countDownDate = new Date("January 24, 2025 09:00:00").getTime();
    
    // Get the HTML elements to update
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Update the count down every 1 second
    const interval = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Helper function to add a leading zero if number is less than 10
        const formatTime = (time) => (time < 10 ? `0${time}` : time);

        // If the countdown is still active, display the time
        if (distance > 0) {
            daysEl.innerHTML = formatTime(days);
            hoursEl.innerHTML = formatTime(hours);
            minutesEl.innerHTML = formatTime(minutes);
            secondsEl.innerHTML = formatTime(seconds);
        } else {
            // If the count down is finished, display zeros and stop the timer
            clearInterval(interval);
            daysEl.innerHTML = "00";
            hoursEl.innerHTML = "00";
            minutesEl.innerHTML = "00";
            secondsEl.innerHTML = "00";
            // You could also replace the countdown with a "We are live!" message here.
        }
    }, 1000); // Update every second
})();