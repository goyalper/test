
      // function getRandomColor() {
      //   var letters = "0123456789ABCDEF";
      //   var color = "#";
      //   for (var i = 0; i < 6; i++) {
      //       color += letters[Math.random() * 16];
      //   }
      //   return color;

      // }

      function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

      function move(){
        var left;
        var top;
        var wh;
        left=((Math.random() * 300) +5);
        top=((Math.random() * 300) +5);
        wh=((Math.random() * 44) +5);
        document.getElementById("box").style.left=left + "px";
        document.getElementById("box").style.top="calc("+ top +"px + " + "30vw";
        document.getElementById("box").style.width=wh + "vw";
        document.getElementById("box").style.height="calc(0vw + " + wh +"vw)";
        document.getElementById("box").style.display="block";
        document.getElementById("box").style.backgroundColor=get_rand_color();
        start1=new Date().getTime();


      }
      var start1=new Date().getTime();
      move();
      document.getElementById("button").onclick=function(){
          document.getElementById("button").style.display="none";
            document.getElementById("box").onclick=function(){
                document.getElementById("box").style.display="none";
                var end=new Date().getTime();
                var Score=(end-start1) / 1000;
                alert("YOur Score is : " + Score + " Seconds");
                console.log(Score + " Seconds");
                move();
            }

      }