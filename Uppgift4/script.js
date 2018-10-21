function uppgift4 (){
    let rad = prompt("Ange Radius på din sfär");
    let pi3 = Math.PI;
    pi3.toFixed(3);
   
    let volym = ((4*pi3) * (Math.pow(rad,3))) / 3
    let arean = (4*pi3) * Math.pow(rad,2);
    let msg = "";
    msg += "Omkretsen är " + volym.toFixed(3);
    msg += '\n'
    msg += "Arean är " + arean.toFixed(3);
    alert(msg);
   
   }
   