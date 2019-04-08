
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  console.log('Offset:' + offset);
  if (offset > 375){
    let morph1 = anime({
      targets: '#morphing .polymorph',
      points: [
        { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: false,
    });
  }
  if (offset > 539 && offset < 750){
    let morph2 = anime({
      targets: '.st0',
      y: '198',
      height: '410',
      easing: 'easeOutQuad',
      duration: 2000,
      loop: false,
    })
  }
  if (offset > 750){
    let morph2 = anime({
      targets: '.st0',
      y: '593',
      height: '15',
      easing: 'easeOutQuad',
      duration: 2000,
      loop: false,
    })
  }
})
