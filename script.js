const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let monthworda = monthworda();

function monthworda(){
    switch(expression) {
        case month = 1:
          return "January"
          break;
        case month == 2:
            return "Febuary"
            break;
        case month == 3:
            return "March"
            break;
        case month == 4:
            return "April"
            break;
        case month == 5:
            return "May"
            break;
        case month == 6:
            return "June"
            break;
        case month == 7:
            return "July"
            break;
        case month == 8:
            return "August"
            break;
        case month == 9:
            return "September"
            break;
        case month == 10:
            return "October"
            break;
        case month == 11:
            return "November"
            break;
        case month == 12:
            return "December"
            break;
        default:
          console.log("error")
      }
}
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${monthworda}-${year}`;
