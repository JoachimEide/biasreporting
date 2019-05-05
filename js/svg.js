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

      const graph = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 5000,
        loop: true,
        });
        graph.add({
        }).add({
          targets: '#graph1 #animeLine',
          strokeDashoffset: [anime.setDashoffset, 0],
          direction: 'linear',
          delay: 0,
        }, 1000)

      const graph2 = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 5000,
        loop: true,
        });
        graph2.add({
        }).add({
          targets: arrayHeight,
          height: '0',
          direction: 'linear',
          delay: 0,
        }, 1000)


});
