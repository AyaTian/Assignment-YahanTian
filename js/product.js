(   //?????????????按右按钮直到最后一张后，紧接着仍连按了右箭头2下，然后再按左箭头发现图片没有反应了，是为什么？？？？
    //？？？？请问22行为什么要加个return？？？
    
    function () {
        var product_list = document.getElementById('product_list');
        var leftBtn = document.getElementById('left-btn');
        var rightBtn = document.getElementById('right-btn');

        var idx = 0;
        //节流所
        var lock = true;
        //右按钮设置监听，idx当前显示的图片序号，从0开始
        rightBtn.onclick = function () { 
            if (!lock) return;
            lock = false;
            idx++;
            //如果图片不是第十张则整体向左边拉，else若图片是第十张（最后一张）则什么都不做
            if (idx <=5) {
                product_list.style.transition = 'transform 0.5s linear 0s'; 
                product_list.style.transform = 'translateX(' + idx * -221 + 'px)';
            }else {
                idx=5;
                return;
            }
            //开锁
            setTimeout(() => {
                lock = true;
            }, 500)
        }
        //做按钮设置监听
        leftBtn.onclick = function () {
            if (!lock) return;
            lock = false;
            idx--;
            if (idx >= 0) {
                product_list.style.transition = 'transform 0.5s linear 0s';
                product_list.style.transform = 'translateX(' + idx * -221 + 'px)';
            } else {
               idx=0;
            }
            setTimeout(() => {
                lock = true;
            }, 500)
        }
    }
)()