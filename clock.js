setInterval(() => {
  let date = new Date()
  let clock = document.getElementById('clock');

  clock.innerHTML = `
  ${date.getDate()}/${(date.getMonth()+ 1)}/${date.getFullYear()}       
  
  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} 
  `;


}, 1000);