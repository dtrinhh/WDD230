// DISPLAY BANNER
document.addEventListener("DOMContentLoaded", function () {
    displaybanner(); 
  });

  function displaybanner() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      const banner = document.querySelector(".banner");
      banner.style.display = "block";
    }
  }

  function closebanner() {
    const banner = document.querySelector(".banner");
    banner.style.display = "none";
  }

// SIMULATE DIFFERENT DATE
// const sim_date = new Date("November 20, 2023 11:13:00");

//   //overriding date function
// Date = function(){return sim_date;};
// const new_date = new Date();