const illustration1 = anime.timeline({
easing: 'easeOutExpo',
duration: 2500,
loop: false,
autoplay: false,
});
illustration1.add({
  }).add({
    targets: '#illustration1 .st0',
    opacity: 1,
  })
illustration1.add({
}).add({
  targets: '#illustration1 .st2',
  strokeDashoffset: [anime.setDashoffset, 0],
  direction: 'alternate',
  delay: 0,
}, 1000)

const illustration2 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2500,
  loop: false,
  autoplay: false,
  });
  illustration2.add({
    }).add({
      targets: '#illustration2 .st4',
      opacity: 1,
    })
  illustration2.add({
  }).add({
    targets: '#illustration2 .st3',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'alternate',
    delay: 0,
  }, 1000)

const illustration3 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2500,
  loop: false,
  autoplay: false,
  });
  illustration3.add({
    }).add({
      targets: '#illustration3 .st6',
      opacity: 1,
    })
  illustration3.add({
  }).add({
    targets: '#illustration3 .st5',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'alternate',
    delay: 0,
  }, 1000)

const illustration4 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2500,
  loop: false,
  autoplay: false,
  });
  illustration4.add({
    }).add({
      targets: '#illustration4 .st8',
      opacity: 1,
    })
  illustration4.add({
  }).add({
    targets: '#illustration4 .st7',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'alternate',
    delay: 0,
  }, 1000)

const illustration5 = anime.timeline({
  easing: 'easeOutExpo',
  duration: 2500,
  loop: true,
  autoplay: false,
  });
  illustration5.add({
    }).add({
      targets: '#illustration5 .st11',
      opacity: 1,
    })
  illustration5.add({
  }).add({
    targets: '#illustration5 .st10',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'alternate',
    delay: 0,
  }, 1000)

const graph = anime.timeline({
  easing: 'easeInOutExpo',
  duration: 5000,
  loop: false,
  autoplay: false,
  });
  graph.add({
  }).add({
    targets: '#graph1 #animeLine',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'linear',
    delay: 0,
  }, 1000)

const graph2 = anime.timeline({
  duration: 5000,
  loop: false,
  autoplay: false,
  easing: 'linear',
  });
  graph2.add({
  }).add({
    targets: '#graph2 .g2-line',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'linear',
  }, 250)
  graph2.add({
  }).add({
    targets: '#graph2 .g2-line2',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'linear',
  }, 250)
  graph2.add({
  }).add({
    targets: '#graph2 .g2-line3',
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'linear',
  }, 250)


window.addEventListener("load", function() {

  const title = anime.timeline({
    easing: 'easeOutExpo',
    loop: true,
    });
    title.add({
      }).add({
        targets: '#breaking',
        opacity: 1,
        duration: 800
      })
      title.add({
        }).add({
          targets: '#bias',
          opacity: 1,
          duration: 500
        })
    title.add({
    }).add({
      targets: '.glass',
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'alternate',
      delay: 0,
      easing: 'spring(1, 100, 10, 0)'
    })
    title.add({
      }).add({
        targets: '#breaking',
        delay: 2500,
        opacity: 0,
      })
      title.add({
        }).add({
          targets: '#bias',
          opacity: 0,
        })
});

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  console.log('Offset:' + offset);
  if (offset > 995 && offset < 1569){
    let vid1 = document.getElementById('vid1');
    vid1.autoplay = true;
    vid1.play();
  } else {
    vid1.autoplay = false;
    vid1.pause();
  }
  if (offset > 3177 && offset < 3676){
    illustration1.play();
  }

  if (offset > 4600 && offset < 5400){
    let vid2 = document.getElementById('vid2');
    vid2.autoplay = true;
    vid2.play();
  } else {
    vid2.autoplay = false;
    vid2.pause();
  }
  if (offset > 6000 && offset < 6118){
    graph.play();
  }
  if (offset > 6700 && offset < 7150){
    illustration2.play();
  }
  if (offset > 7650 && offset < 8060){
    illustration3.play();
  }
  if (offset > 8480 && offset < 9000){
    illustration4.play();
  }
  if (offset > 9260 && offset < 9900){
    illustration5.play();
  }
  if (offset > 11900 && offset < 12100){
    graph2.play();
  }

  if (offset > 15700 && offset < 16600){
    let vid3 = document.getElementById('vid3');
    vid3.autoplay = true;
    vid3.play();
  } else {
    vid3.autoplay = false;
    vid3.pause();
  }
  if (offset > 17700 && offset < 18600){
    let vid4 = document.getElementById('vid4');
    vid4.autoplay = true;
    vid4.play();
  } else {
    vid4.autoplay = false;
    vid4.pause();
  }
})
