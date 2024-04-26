    //Replace Text function		 
    $(function () { 
        count = 0; 
        wordsArray = ["cool", "amazing", "super"]; 
        setInterval(function () { 
          count++; 
          $("#word").fadeOut(2500, function () { 
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(2500); 
          }); 
        }, 2500); 
      }); 

      var showCalc = false;
function showCalculator(){
    if (showCalc == false){
        document.getElementById("calc").style.opacity = 1;
        showCalc = true;
    }
    else if (showCalc == true){
        document.getElementById("calc").style.opacity = 0;
        showCalc = false;
    }
 }
      //End Replace Text function	 
      if (localStorage["note"]) {
        var note = localStorage["note"];
        document.getElementById("note").value = note;
    }
       
       function autoSave() {
        var note = document.getElementById("note").value;
        localStorage.setItem("note", note);
    }
    
    var show = false;
    function showNote(){
        if (show == false){
            document.getElementById("note").style.opacity = 1;
            show = true;
        }
        else if (show == true){
            document.getElementById("note").style.opacity = 0;
            show = false;
        }
    }
    function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
     }
     
     function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
     }
     var e = false;
function snp(){
    if (e == false){
        document.getElementById("snp").style.opacity = 1;
        e = true;
    }
    else if (e == true){
        document.getElementById("snp").style.opacity = 0;
        e = false;
    }
  }