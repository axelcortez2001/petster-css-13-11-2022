function goPrevious() {
    document.querySelector('#container').scrollLeft += 50;
  }
  
  function goNext() {
    document.querySelector('#container').scrollBy({ 
      right: 40,
      behavior: 'smooth' 
    });
  }
  let loginForm = document.querySelector('.login-form');

  document.querySelector('#login-btn').onclick = () =>{
      loginForm.classList.toggle('active');
      navbar.classList.remove('active');
  }