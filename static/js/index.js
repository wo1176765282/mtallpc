// topbar
{
    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".leftbar");

    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 800) {
            topbar.style.display = "block";
        } else {
            topbar.style.display = "none";
        }
        if (st > 900) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }
    }


{
    let tips=document.querySelectorAll(".leftbar_conr");//引入div标签tips
    let containers=document.querySelectorAll(".a");//引入div标签container
    let flag = true;

    tips = $(tips);
    tips = tips.toArray()
    $(tips).click(function () {
        let index = $(this).index();
        let e = $(".a").toArray()
        if (index == 0 || index == tips.length-1){
            return;
        }else{
            $('html').animate({scrollTop:e[index-1].offsetTop-200},function () {
                flag=true
            })
            flag=false
        }
    })

    $(".totop").click(function () {
        $('html').animate({scrollTop:0},function () {
            flag=true
        })
        flag=false
    })

    window.addEventListener("scroll",function(){
        let st=document.documentElement.scrollTop;
        for(let i=0;i<containers.length;i++){
            if(st>containers[i].offsetTop-250){
                for(let i=0;i<tips.length;i++){
                    tips[i].classList.remove("active");
                }
                if (!flag){
                    return
                }
                tips[i+1].classList.add("active");

            }
        }
    })
}


}
//rightbar    nav   bannerleft
{
    let titbar = document.querySelectorAll(".righttit31");
    let tittanbar = document.querySelectorAll(".righttans");
    // console.log(tittanbar[0])
    let objbar = tittanbar[0];
    titbar.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            objbar.style.display = "none";
            tittanbar[index].style.display = "block";
            objbar = tittanbar[index];
        }
        ele.onmouseleave = function () {
            tittanbar[index].style.display = "none";
        };
    });
}
//banner轮播
{
    //获取目标对象
    let imgs = document.querySelectorAll(".banner1"); //获取图片所在盒子
    let banner = document.querySelector(".banner");
    let pagers = document.querySelectorAll(".bannerpager");         //获取轮播点

    //轮播点的动画效果
    pagers.forEach(function (ele, index) {                          //遍历所有轮播点
        ele.onclick = function () {                                 //给轮播点设置鼠标点击事件
            for (let i = 0; i < imgs.length; i++) {                 //循环，判断图片的length
                imgs[i].classList.remove("banneractive");                 //给当前正在遍历图片所在盒子移除类名
                pagers[i].classList.remove("pageractive");               //给当前正在遍历轮播点移除类名
            }
            this.classList.add("pageractive");                           //给当前正在遍历轮播点添加类名
            imgs[index].classList.add("banneractive");                    //给当前正在遍历图片的盒子添加类名
            n = index;                                              //将当前图片的length赋给n
        };
    });

    //图片的动画效果
    let n = 0;                                                      //定义变量n
    let t = setInterval(move, 3000);                                //声明t，setInterval调用move函数，每隔3秒执行一次

    function move() {                                               //声明一个move函数
        n++;                                                        //图片没轮播一下，n自加一次
        if (n === imgs.length) {                                    //当n达到图片length最大值，令n=0
            n = 0;
        }
        if (n < 0) {                                                //当n<0时，显示最后一张图片
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {                     //循环，判断图片的length
            imgs[i].classList.remove("banneractive");                     //给当前正在遍历图片所在盒子移除类名
            pagers[i].classList.remove("pageractive");                   //给当前正在遍历轮播点移除类名
        }
        imgs[n].classList.add("banneractive");                            //给当前正在遍历轮播点添加类名
        pagers[n].classList.add("pageractive");                          //给当前正在遍历图片的盒子添加类名
    }

    //鼠标移入移除效果

    banner.onmouseenter = function () {                              //鼠标移入图片移除t动画
        clearInterval(t);
    };
    banner.onmouseleave = function () {                               //鼠标移除图片添加t动画
        t = setInterval(move, 3000);
    };
}
//回到顶部
// {
//     let totop = document.querySelector(".totop");     //获取返回顶部对象
//
//     totop.onclick = function () {                        //给其设置点击事件
//         let st = document.documentElement.scrollTop;     //声明变量为滚轮距文档顶部的距离
//         let t = setInterval(function () {                //声明一个动画
//             st -= 200;                                   //让距离每25毫秒减少200px
//             if (st < 0) {
//                 st = 0;                                   //当距离减到为﹣时，令距离为0；并停止动画
//                 clearInterval(t);
//             }
//             document.documentElement.scrollTop = st;        //把每次减200px的值赋值给st
//         }, 25);
//     };
// }
let m = 0;
let t1 = setInterval(move1,3000)

function move1() {
    m++;
    if (m>=$(".tmcs_right11_tit span").length){
        m=0;
    }
    for (let i=0;i<$(".tmcs_right11_tit span").length;i++){
        $(".tmcs_right11_tit span").removeClass("jrfq_active")
        $(".tmcs_right11_titcont img").css("display","none")
    }
    $(".tmcs_right11_tit span").eq(m).addClass("jrfq_active")
    $(".tmcs_right11_titcont img").eq(m).css("display","block")
}


$(".tmcs_right11_tit span").mouseenter(function (index,item) {
    clearInterval(t1);
    for (let i=0;i<$(".tmcs_right11_tit span").length;i++){
        $(".tmcs_right11_tit span").removeClass("jrfq_active")
        $(".tmcs_right11_titcont img").css("display","none")
    }
    $(this).addClass("jrfq_active");
    let a=$(this).index()
    $(".tmcs_right11_titcont img").eq(a).css("display","block")
})

$(".tmcs_right11_tit span").mouseleave(function () {
    t1 = setInterval(move1,3000)
})


