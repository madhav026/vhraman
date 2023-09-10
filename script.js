var crsr = document.querySelector("#cursor")
var crsr1 = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+30 +"px"
    crsr.style.top=dets.y+"px"
    crsr1.style.left= dets.x - 240+"px"
    crsr1.style.top=dets.y- 240+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #ffff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid  rgb(234, 173, 59) "
        crsr.style.backgroundColor=" rgb(234, 173, 59)"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration: 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
         start:"top -10%",
         end:" top -11%",
         scrub:1,
        //  markers:true
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       start:"top -20%",
       end:"top -70%",
       scrub:2,
    //    markers:true
    }
})
