const rentalURL = "https://dtrinhh.github.io/wdd230/finalproject/data/rental.json";

async function getRentalInfo() {
  const response = await fetch(rentalURL);
  const data = await response.json();
  createPricingTable(data);
}

function createPricingTable(obj) {
  const tableContainer = document.querySelector(".rentalInfo");
  const rentalsInfo = obj.maxRentalPricing;
  const table = document.createElement("table");
  table.classList.add("pricingTable");

  const thead0 = document.createElement("thead");
  const headerRow0 = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Max Rental Pricing";
  th.classList.add("topHeader");
  th.colSpan = 6;
  headerRow0.appendChild(th);

  const thead1 = document.createElement("thead");
  const headerRow1 = document.createElement("tr");
  for (const header1 of [" ", "Reservations", "Walk-Ins"]) {
    const th = document.createElement("th");
    th.colSpan = 2;
    th.textContent = header1;
    headerRow1.appendChild(th);
  }
  const thead2 = document.createElement("thead");
  const headerRow2 = document.createElement("tr");
  for (const header2 of [
    "Rental Type",
    "Max. Persons",
    "Half Day (3hrs)",
    "Full Day",
    "Half Day (3hrs)",
    "Full Day",
  ]) {
    const th = document.createElement("th");
    th.textContent = header2;
    headerRow2.appendChild(th);
  }

  thead0.appendChild(headerRow0);
  table.appendChild(thead0);
  thead1.appendChild(headerRow1);
  table.appendChild(thead1);
  thead2.appendChild(headerRow2);
  table.appendChild(thead2);

  const tbody = document.createElement("tbody");
  for (const rental of rentalsInfo) {
    const row = document.createElement("tr");

    const rentalTypeInfo = document.createElement("td");
    rentalTypeInfo.textContent = rental.rentalType;
    row.appendChild(rentalTypeInfo);

    const maxPersonsInfo = document.createElement("td");
    maxPersonsInfo.textContent = rental.maxPersons;
    row.appendChild(maxPersonsInfo);

    const halfDayAppoint = document.createElement("td");
    halfDayAppoint.textContent = rental.reservation[0].appointment[0].halfDay;
    row.appendChild(halfDayAppoint);

    const fullDayAppoint = document.createElement("td");
    fullDayAppoint.textContent = rental.reservation[0].appointment[0].fullDay;
    row.appendChild(fullDayAppoint);

    const halfDayWalkIn = document.createElement("td");
    halfDayWalkIn.textContent = rental.reservation[0].walkIn[0].halfDay;
    row.appendChild(halfDayWalkIn);

    const fullDayWalkIn = document.createElement("td");
    fullDayWalkIn.textContent = rental.reservation[0].walkIn[0].fullDay;
    row.appendChild(fullDayWalkIn);

    tbody.appendChild(row);
    console.log(rental);
  }

  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

getRentalInfo();
