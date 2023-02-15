function usetInputFeld(userInput){
    const getUserInput = document.getElementById(userInput);
    const getUserInputVlue =parseFloat(getUserInput.value);
    // const getUserInputVlue = getUserInput.value;
    // const userInputToInteger = parseFloat(getUserInputVlue);
    getUserInput.value=''
    return getUserInputVlue;
}
function previousDepositUser(previousDeposit){
    const userPreviousDeposite = document.getElementById(previousDeposit);
    const getPreviousDeposit = parseFloat(userPreviousDeposite.innerText);
    // const getPreviousDeposit = userPreviousDeposite.innerText;
    // const previousDepositInteger = parseFloat(getPreviousDeposit);
    return getPreviousDeposit;
}
function seter(inputId,userInput){
    const previousblance =document.getElementById(inputId);
    previousblance.innerText=userInput
}
document.getElementById("btn-deposit").addEventListener('click',function(){
    const userInputAmmount = usetInputFeld('deposit-field')
   const previousDepositAmmount = previousDepositUser('deposit-total');
   const totalDipositeAmmount = userInputAmmount + previousDepositAmmount;
   seter('deposit-total',totalDipositeAmmount);
   const previousTotalBlance = previousDepositUser('balance-total');
   const totalMainBlance =   previousTotalBlance + userInputAmmount ;
   seter('balance-total',totalMainBlance);
})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmmount = usetInputFeld('withdraw-field');
    const prevWithdrawAmm =  previousDepositUser("withdraw-total")
    const totalWithdrawAmmount = withdrawAmmount + prevWithdrawAmm;
    seter('withdraw-total',totalWithdrawAmmount);
    const previousTotalBlance = previousDepositUser('balance-total');
    const currentBlance = previousTotalBlance - withdrawAmmount;
    seter('balance-total',currentBlance );
})