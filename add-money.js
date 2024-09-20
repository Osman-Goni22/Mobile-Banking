document.getElementById('addMoney').addEventListener('click', function(event){
  event.preventDefault();


  showForm('addMoneyForm');
  document.getElementById('btn').addEventListener('click', function(event){
          event.preventDefault();
          const balance = getInputTextById('balance');
  const add = getInputValueById('add-money');
  const newBalance = balance+add;
  document.getElementById('balance').innerText=newBalance;
  })
  
})