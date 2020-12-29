(
    function () {
        var carousel_list = document.getElementById('carousel_list');
        var circle_ol = document.getElementById('circle_ol');
        var circle_lis = circle_ol.getElementsByTagName('li');
        var banner = document.getElementById('banner');
        //克隆第一张li
        var clone_li = carousel_list.firstElementChild.cloneNode(true);
        //上树
        carousel_list.appendChild(clone_li);
        //自动轮播
        var idx = 0;
        setCircles();
        var lock = true;
        function rihgt_btn_handler() {
            //判断节流所得状态，如果关闭则什么都不做
            if (!lock) return;
            lock = false;
            carousel_list.style.transition = 'transform 0.5s linear 0s';
            idx++;
            carousel_list.style.transform = 'translateX(' + idx * -25 + '%)';
            if (idx > 2) {
                setTimeout(function () {
                    carousel_list.style.transition = 'none';
                    carousel_list.style.transform = 'none';
                }, 500);
                idx = 0
            }
            //小圆点切换位置
            setCircles();
            //关锁
            setTimeout(
                function () {
                    lock = true;
                }, 500)
        }
        function setCircles() {
            for (var i = 0; i < 3; i++) {
                if (i == idx % 3) {
                    circle_lis[i].className = 'current';
                } else {
                    circle_lis[i].className = '';
                }
            }
        }
        // 事件委托，鼠标移入圆点，点击可以切换图片
        circle_ol.onclick = function (e) {
            if (e.target.tagName.toLowerCase() == 'li') {
                var n = Number(e.target.getAttribute('data-n'));
                idx = n;
                carousel_list.style.transition = 'none';
                carousel_list.style.transform = 'translateX(' + idx * -25 + '%)';
                setCircles();
            }
        }
       
        //定时器，自动轮播
        var timer = setInterval(rihgt_btn_handler, 2000);
        banner.onmouseenter = function () {
            clearInterval(timer);
        }
        banner.onmouseleave = function () {
            clearInterval(timer);
            timer = setInterval(rihgt_btn_handler, 2000);
        }

    })()