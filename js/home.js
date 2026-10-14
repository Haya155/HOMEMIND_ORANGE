(function(){
    var svg=document.querySelector('.hm-anim svg');
    var mq=window.matchMedia('(max-width: 991px)');
    function frame(){
        if(!svg)return;
        svg.setAttribute('viewBox',mq.matches?'900 -60 640 820':'-800 -60 2400 820');
        svg.setAttribute('preserveAspectRatio',mq.matches?'xMidYMid meet':'xMaxYMid slice');
    }
    frame();
    if(mq.addEventListener)mq.addEventListener('change',frame);else mq.addListener(frame);
})();

/* Subtle mouse parallax for the hero animation (desktop only) */
(function(){
    var hero=document.getElementById('home');
    var bg=hero&&hero.querySelector('.hm-bg');
    if(!bg||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    hero.addEventListener('mousemove',function(e){
        var r=hero.getBoundingClientRect();
        bg.style.setProperty('--mx',((e.clientX-r.left)/r.width*2-1).toFixed(3));
        bg.style.setProperty('--my',((e.clientY-r.top)/r.height*2-1).toFixed(3));
    });
    hero.addEventListener('mouseleave',function(){
        bg.style.setProperty('--mx',0);bg.style.setProperty('--my',0);
    });
})();