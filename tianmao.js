window.onload=function(){
  // 轮播
 	var btns=document.getElementsByClassName("btnone");
     var banners=document.getElementsByClassName("item");
     var bannerbox=document.getElementsByClassName("banner-box")[0];
      var nums=["#E8E8E8","#FFF613","#fff","#2CB1F6","#E8E8E8"]
     for (var i=0;i<btns.length;i++){
         btns[i].aa=i;
      	 btns[i].onmouseover=function(){
     for (var i=0;i<banners.length;i++){
    		  banners[i].style.zIndex="1";
    		  btns[i].style.borderColor="#fff";
             };
             btns[this.aa].style.borderColor="#555"
             bannerbox.style.background=nums[this.aa]
      		banners[this.aa].style.zIndex="2";
      	}		 
      };
      var num=0;
      setInterval(function(){
      	num++;
      	if(num==5){//muns
      		num=0
      	}
             for (var i=0;i<banners.length;i++){
    		  banners[i].style.zIndex="1";
    		  btns[i].style.borderColor="#fff";
             };
             btns[num].style.borderColor="#555"
             bannerbox.style.background=nums[num]
      		banners[num].style.zIndex="2";
      },3000)
      









// 遮罩
    
 var items=document.getElementsByClassName("xiaotu");
     var masks=document.getElementsByClassName("mask");
     for (var i=0;i<items.length;i++){
         items[i].aa=i;
       items[i].onmouseover=function(){
        
         masks[this.aa].style.opacity="0.8";
              }
          items[i].onmouseout=function(){
          masks[this.aa].style.opacity="0"; 
         
     }
     }




// 左侧导航栏

var topbar=$(".topbar")[0];
  var floor=$(".floor")[0];
  document.documentElement.scrollTop=1;
  if(document.documentElement.scrollTop==1){
    var scrollobj=document.documentElement;
  }else{
    var scrollobj=document.body;
  }
  var flag=true;flag2=true;
  window.onscroll=function(){
    var st=scrollobj.scrollTop;
    if(st>650){
      if(flag){
           flag=false;flag2=true;
      
      animate(topbar,{top:0})
      animate(floor,{width:36,height:328})
    }
    }else{
      if(flag2){
       flag=true;flag2=false;
    
      animate(topbar,{top:-50})
      animate(floor,{width:0,height:0})
    }
    }
  }
  var floorbtn=$(".floorbtn");
  var cm=$(".cm");
  for (var i = 0; i < floorbtn.length; i++) {
    floorbtn[i].index=i;
    floorbtn[i].onclick=function(){
      var ot=cm[this.index].offsetTop;

      animate(scrollobj,{scrollTop:ot})
    }
  };




 // 右侧导航栏

var ce=$(".ce");
    var names=$(".name");
    var t;
    for (var i = 0; i < ce.length; i++) {
      ce[i].index=i;
      hover(ce[i],function(){
        var that=this
      clearTimeout(t)
    t=setTimeout(function(){
        names[that.index].style.display="block";
        animate(names[that.index],{left:-80,opacity:1},200)
    },200)    
      },function(){
         clearTimeout(t)
        animate(names[this.index],{left:-120,opacity:0.6},200,function(){
          this.style.display="none"
        })
      })
    };


//右侧导航返回顶层
    var obj=document.documentElement;
    var fanhui=$(".fanhui")[0];
    fanhui.onclick=function(){
      //火狐 谷歌的兼容性问题
      obj=document.body.scrollTop==0?document.documentElement:document.body;
      animate(obj,{scrollTop:0})
    }



 

//放大
 var images=$(".shouji1")
   console.log(images)
   var trenditem=$(".clqx-tuboxone");
   console.log(trenditem)
  for (var i = 0; i < trenditem.length; i++) {
     trenditem[i].index=i;
     trenditem[i].onmouseover=function(){
     animate(images[this.index],{width:160,height:160,marginLeft:-10,marginTop:-5},200)
    }
    trenditem[i].onmouseout=function(){
    animate(images[this.index],{width:140,height:140,marginLeft:0,marginTop:0},200)
    }
  }

var imagess=$(".heihezi1")
   console.log(images)
   var trenditems=$(".clqx-tuboxtwo");
   console.log(trenditems)
  for (var i = 0; i < trenditems.length; i++) {
     trenditems[i].index=i;
     trenditems[i].onmouseover=function(){
     animate(imagess[this.index],{width:160,height:160,marginLeft:-10,marginTop:-7},200)
    }
    trenditems[i].onmouseout=function(){
    animate(imagess[this.index],{width:140,height:140,marginLeft:0,marginTop:0},200)
    }
  }



  //鼠标移入左移
var imagesss=$(".qt1")
   console.log(imagesss)
   var trenditemss=$(".qt");
   console.log(trenditemss)
  for (var i = 0; i < trenditemss.length; i++) {
     trenditemss[i].index=i;
     trenditemss[i].onmouseover=function(){
     animate(imagesss[this.index],{marginLeft:-10,marginTop:0},200)
    }
    trenditemss[i].onmouseout=function(){
    animate(imagesss[this.index],{marginLeft:0,marginTop:0},200)
    }
  }




}
  