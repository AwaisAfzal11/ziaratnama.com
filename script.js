(function () {
    // --- THE MOST RELIABLE WAY TO SET A DATE ---
    // We define the target date using numbers to avoid any browser parsing errors.
    
    // Your target date: September 9, 2025
    const launchYear = 2025;
    const launchMonth = 8; // IMPORTANT: Month is 0-indexed (0=Jan, 1=Feb, ... 8=September)
    const launchDay = 9;
    const launchHour = 9; // 9 AM in the morning. Change to 0 for midnight.

    // This creates the date object. No need to change this line.
    const countDownDate = new Date(launchYear, launchMonth, launchDay, launchHour, 0, 0).getTime();

    // --- DEBUGGING: You can uncomment these lines to check the values in the browser console ---
    // console.log("Launch Date:", new Date(countDownDate).toString());
    // console.log("Current Date:", new Date().toString());
    
    // Get the HTML elements to update
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            daysEl.innerHTML = "00";
            hoursEl.innerHTML = "00";
            minutesEl.innerHTML = "00";
            secondsEl.innerHTML = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const formatTime = (time) => (time < 10 ? `0${time}` : time);

        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

})();