document.addEventListener('scroll', function(e){
  const target = document.querySelectorAll('.scroll');

  for (let index = 0; index < target.length; index++){
    let pos = window.pageYOffsett * target[index].dataset.rate;
    target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';

    console.log(target[index].style.transform);
  }
})
