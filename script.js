document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const toast=document.getElementById('toast');
  toast.style.display='block';
  setTimeout(()=>toast.style.display='none',4500);
  // Здесь подключается ваша CRM/API/Telegram/email.
  // Пример: fetch('/api/lead/', {method:'POST', body:new FormData(this)})
  this.reset();
});