(function () {
    // Set the date we're counting down to (60 days from now)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 60);
    const countDownDate = futureDate.getTime();

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

        // Display the result in the corresponding elements
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);

        // If the count down is finished, write some text and stop the timer
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "<h2>We are live now!</h2>";
        }
    }, 1000); // Update every second
})();