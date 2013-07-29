var bgScrollX = 0;
       var bg = document.getElementById('header');
       function moveBG() {
               bgScrollX += -1;
               if (navigator.userAgent.indexOf("Firefox") != -1) {
                       bg.style.backgroundPosition = bgScrollX + 'px 0';
               } else {
                       bg.style.backgroundPosition = bgScrollX + 'px';
               }
               setTimeout(moveBG,60);
       }
       moveBG();
