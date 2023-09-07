
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();
    
    // Get the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    
    // Get the current UTC time
    const currentUTCTime = currentDate.toISOString().split('T')[1].split('.')[0];
    
    // Populate the HTML elements with the data
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDay;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
});
