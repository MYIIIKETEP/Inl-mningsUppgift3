function uppgift3(){
    let rad = prompt("Ange Radius på en cirkel");
    let pi3 = +Math.PI;
    pi3.toFixed(3);
    let omkrets = (rad*2) * pi3;
    let area = Math.pow(rad,2) * pi3;
    let msg = "";
    msg += "Omkretsen är " + omkrets.toFixed(3);
    msg += '\n'
    msg += "Arean är " + area.toFixed(3);
    alert(msg);
    
}