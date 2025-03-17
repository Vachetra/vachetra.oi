const btnEl = document.getElementById("calculate");
const salaryInput=document.getElementById("salary");
const commissionInput = document.getElementById("commission"); 
const totalSpan = document.getElementById("total");
var USDdollor=new Intl.NumberFormat("en-US",{ 
style: "currency",
currency: "USD"});
function calculateTotal() {
const salary = salaryInput.value;
const commission = commissionInput.value;
const totalValue = salary * (1+commission/100);
totalSpan.innerText = USDdollor.format(totalValue);
}
btnEl.addEventListener("click", calculateTotal);


const toggle = document.getElementById('toggle');
const toggle1 = document.getElementById('toggle1');
const commission = document.getElementById('commission');
const salary = document.getElementById('salary');

toggle.addEventListener("click", () => {
  if (salary.type === 'password') {
    // Change input types to number
    salary.type = 'text';
    commission.type = 'text';

    // Update icons and styles for "number" state
    toggle.classList.remove('fa-money-check');
    toggle.classList.add('fa-money-check-dollar');
    toggle1.classList.remove('fa-check');
    toggle1.classList.add('fa-percent');
    toggle.style.color = "Green";
    toggle1.style.color = "Green";
  } else {
    // Change input types to password
    salary.type = 'password';
    commission.type = 'password';

    // Update icons and styles for "password" state
    toggle.classList.add('fa-money-check');
    toggle.classList.remove('fa-money-check-dollar');
    toggle1.classList.remove('fa-percent');
    toggle1.classList.add('fa-check');
    toggle.style.color = "Blue";
    toggle1.style.color = "Blue";
  }
});
