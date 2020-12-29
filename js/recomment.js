(  
    function () {
        var recommand_list = document.getElementById('recommand_list');
        var rightBtn = document.getElementById('arrow-right-btn');
        var leftBtn = document.getElementById('arrow-left-btn');

        var idx = 0;
        var lock=true;
        rightBtn.onclick = function () {
            if(!lock) return;
            lock=false;
            idx++;
            if (idx <= 3) {
                recommand_list.style.transition = 'transform 0.5s linear 0s';
                recommand_list.style.transform = 'translateX(' + idx * -385 + 'px)';
            } else {
                idx=3;
            }
            setTimeout(function(){
                lock=true;
            },500);
            console.log('123123');
        }
        leftBtn.onclick = function() {
            if(!lock) return;
            lock=false;
            idx--;
            if (idx>=0) {
                recommand_list.style.transition = 'transform 0.5s linear 0s'; 
                recommand_list.style.transform = 'translateX(' + idx * -385 + 'px)';
            } else {
                idx=0;
            }
            setTimeout(function(){
                lock=true;
            },500);
        }
  })()