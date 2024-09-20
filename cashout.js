document.getElementById('cashout').addEventListener('click' , function(){

  showForm('cashOutForm');

  document.getElementById('cashOutbtn').addEventListener('click', function(event){
    event.preventDefault();

    const balance = getInputTextById('balance');
    const withDraw = getInputValueById('moneyToCashOut');
   const  newBalance= balance-withDraw;
   if(newBalance<0){
     console.log('Insufficient Balance');
   }
   else{
     document.getElementById('balance').innerText=newBalance;
   }
  })
 
 
})