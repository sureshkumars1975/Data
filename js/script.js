document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('actionBtn');
  const msg = document.getElementById('message');
  let clicks = 0;
  btn.addEventListener('click', function(){
    clicks += 1;
    msg.textContent = `Button clicked ${clicks} time${clicks===1? '': 's'}.`;
  });
});
