
window.addEventListener("load", function() {
  lottie.loadAnimation({
  container: document.getElementById('BB_title'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'BB_title.json' // the path to the animation json
});


  const illustration1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2500,
    loop: true,
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
      loop: true,
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
        loop: true,
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
        loop: true,
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

});
