
window.addEventListener("load", function() {
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
            targets: '#illustration2 .st6',
            opacity: 1,
          })
        illustration3.add({
        }).add({
          targets: '#illustration2 .st5',
          strokeDashoffset: [anime.setDashoffset, 0],
          direction: 'alternate',
          delay: 0,
        }, 1000)


});
