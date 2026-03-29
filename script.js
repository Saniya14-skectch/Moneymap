function addExpense() {
    const desc = document.getElementById("desc").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (desc === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    const expenseList = document.getElementById("expenseList");

    const li = document.createElement("li");
    li.textContent = `${desc} - $${amount} (${category})`;

    expenseList.appendChild(li);

    // clear inputs
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
