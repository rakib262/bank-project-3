
// login button event handler
const loginBtn = document.getElementById("btn");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block";
})

// deposit button even handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){

    const depositNumber = getNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";


});

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    
    const withdrawtNumber = getNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawtNumber);
    updateSpanText("currentBalance", -1 * withdrawtNumber);

    document.getElementById("withdrawAmount").value = "";
});

function getNumber(id){
    const Amount = document.getElementById(id).value;
    const number = parseFloat(Amount);
    return number;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNamber = parseFloat(current);
    const totalAmount = depositNumber + currentNamber;
    document.getElementById(id).innerText = totalAmount;
}