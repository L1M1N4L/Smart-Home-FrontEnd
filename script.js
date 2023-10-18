document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    function monthworda() {
        switch (month) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return "Invalid Month";
        }
    }

    let currentDate = `${day} ${monthworda()} ${year}`;
    let dateElement = document.getElementById("date");

    if (dateElement) {
        dateElement.innerHTML = currentDate;
    } else {
        console.error("Element with id 'date' not found.");
    }
});