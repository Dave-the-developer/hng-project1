document.addEventListener('DOMContentLoaded', (event) => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeWAT"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    function updateTimeAndDay() {
        const now = new Date();
        const options = { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeInWAT = now.toLocaleTimeString('en-GB', options);
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Lagos' });

        currentTimeElement.textContent = timeInWAT;
        currentDayElement.textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});