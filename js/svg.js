
window.addEventListener("load", function() {
  const illustration1 = document.getElementById('handA').contentDocument;
  console.log(illustration1);
  let svg1 = illustration1.getElementById("handAnime");
  var chart = anime.timeline({
    easing: 'easeOutExpo',
    duration: 4000,
  });
  chart.add({
    }).add({
      targets: '.st1',
      opacity: 1,
    })
    chart.add({
    }).add({
      targets: '.st2',
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: 'alternate',
      delay: 0,
    }, 1000)

      paths = new Array();
    [].slice.call(svg1.querySelectorAll('.st0 path')).forEach(function(path, i) {
      paths[i] = path;
      var leng = paths[i].getTotalLength();
      paths[i].style.strokeDasharray = leng + ' ' + leng;
      paths[i].style.strokeDashoffset = leng;
    });
  });
