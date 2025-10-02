const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach(p => {
    total += parseInt(p.textContent);
  });

  let ansRow = document.querySelector("#ans");
  if (ansRow) {
    ansRow.textContent = "Total Price: " + total;
  } else {
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.id = "ans";
    cell.textContent = "Total Price: " + total;
    row.appendChild(cell);
    table.appendChild(row);
  }
};

getSumBtn.addEventListener("click", getSum);
