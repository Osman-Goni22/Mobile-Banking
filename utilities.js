
function getInputValueById(id){
    const balance = document.getElementById(id).value;

    const taka =parseFloat(balance);

    return taka;
 }


 
 function getInputTextById(id){
    const balance = document.getElementById(id).innerText;

    const taka =parseFloat(balance);  

    return taka;
 }


 function showForm(id){
  
   document.getElementById('cashOutForm').classList.add('hidden');
   document.getElementById('addMoneyForm').classList.add('hidden');
   document.getElementById(id).classList.remove('hidden');

 }