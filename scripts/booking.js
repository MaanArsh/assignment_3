/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?



let costForFullDay = 35;
let costForHalfDay = 20;
let daysSelectedOfWeek = [];
let elementsOfDaysSelected = document.querySelectorAll('.day-selector li');
let buttonOfFullDay = document.getElementById('full');
let buttonOfHalfDay = document.getElementById('half');
let buttonToClearDaysOfWeek = document.getElementById('clear-button');
let calcuatingTotalCost = document.getElementById('calculated-cost');

// Yes,these all variables will be initialized when page is loaded
// They need to be updated or reset when we need them or to correct our website or to do any changes.


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function changingTheColour(event) {
    let toSelecSpecifictDay = event.target;
    if (!daysSelectedOfWeek.includes(toSelecSpecifictDay.id)) {
      daysSelectedOfWeek.push(toSelecSpecifictDay.id);
      toSelecSpecifictDay.classList.add('clicked');
    } else {
      let indexOfDay = daysSelectedOfWeek.indexOf(toSelecSpecifictDay.id);
      daysSelectedOfWeek.splice(indexOfDay, 1);
      toSelecSpecifictDay.classList.remove('clicked');
    }
    calculateCost();
  }
  elementsOfDaysSelected.forEach(function(elementOfTheDay) {
    elementOfTheDay.addEventListener('click', changingTheColour);
  });


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

buttonToClearDaysOfWeek.addEventListener('click', function() {
    daysSelectedOfWeek = [];
    elementsOfDaysSelected.forEach(function(elementOfTheDay) {
        elementOfTheDay.classList.remove('clicked');
    });
    buttonOfFullDay.classList.add('clicked');
    buttonOfHalfDay.classList.remove('clicked');
    calculateCost();
  });



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changingTheRate(dayType) {
    if (dayType === 'half') {
        buttonOfHalfDay.classList.add('clicked');
      buttonOfFullDay.classList.remove('clicked');
    } else {
        buttonOfFullDay.classList.add('clicked');
        buttonOfHalfDay.classList.remove('clicked');
    }
    calculateCost();
  }
  buttonOfHalfDay.addEventListener('click', function() {
    changingTheRate('half');
  });


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

buttonOfFullDay.addEventListener('click', function() {
    changingTheRate('full');
  });



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    let days = daysSelectedOfWeek.length;
    let cost = buttonOfFullDay.classList.contains('clicked') ? costForFullDay : costForHalfDay;
    let totalCost = days * cost;
    calcuatingTotalCost.innerHTML = totalCost;
  }










  








