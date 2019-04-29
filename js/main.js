function showModal(){
  var modal = document.getElementById('myModal');
  var sliderdm = document.getElementById('sliderdm')
  document.getElementById('slider').addEventListener('click',function(evt) {
    var target = evt.target;
    if(target.id === 'sliderdm'){
      document.getElementById('stylesheet').setAttribute("href","css/dark.css")
      sliderdm.setAttribute("src",'pictures/dm-button-change.svg')
      var modalp =  document.getElementById('modalp');
      modalp.innerHTML = "Hope you like it! You can always change back <br> <br>"

      sliderdm.id = "sliderchange"
    }else if (target.id ==="sliderchange") {
      document.getElementById('stylesheet').setAttribute("href","css/index.css")
      sliderdm.setAttribute("src",'pictures/dm-button.svg')
      modal.style.display = "none";
    }
  })
}

window.onload= setTimeout(showModal,1500);

const removeSideBar = () => {
  let chapters = document.querySelector(".containerChapters").children;
  for (let i = 0; i < chapters.length; i++){
    if (chapters[i].style.display === 'none'){
        //Her vil vi egentlig gjøre animasjon av siderbar
        chapters[i].style.display = 'block';
    } else {
      //Her vil vi egentlig gjøre animasjon av siderbar
      chapters[i].style.display = 'none';
    }

  }
};


/*  --- PICTURE CAROUSEL
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImage = document.querySelectorAll('.carousel-slider img')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlider.style.transform = 'translateX(' +(-size *counter) + 'px)';

nextBtn.addEventListener('click',()=>{
  if(counter >= carouselImage.length -1) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlider.style.transform = 'translateX(' +(-size *counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
  if(counter <= 0) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlider.style.transform = 'translateX(' +(-size *counter) + 'px)';
});


carouselSlider.addEventListener('transitioned', () =>{
  if(carouselImage[counter].id === 'lastClone') {
    carouselSlider.style.transition = "none";
    counter = carouselImage.length -2;
    carouselSlider.style.transform = 'translateX(' +(-size *counter) + 'px)';
  }
  if(carouselImage[counter].id === 'lastClone') {
    carouselSlider.style.transition = "none";
    counter = carouselImage.length - counter;
    carouselSlider.style.transform = 'translateX(' +(-size *counter) + 'px)';
  }
});



window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  //console.log('Offset:' + offset);
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
  if (offset > 736 && offset < 893){
    let morph3 = anime({
      targets: '#graph .st1',
      points: "960,540 960,0 1524,540 ",
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true,
    })
  }

})
*/
