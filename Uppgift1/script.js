function Address(gata, post, ort){
    this.gata = gata;
    this.post = post;
    this.ort = ort;
}

function Person(namn, epost, mobil, address) {
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = address;
    this.print = function(){
        let msg = "";
        msg += this.namn;
        msg += '\n';
        msg += this.adress.post;
        msg += " "
        msg += this.adress.ort;

        console.log(msg);
    }
}

let Denis = new Person("Denis", "Denis.jakusjev@gmail.com", "0704925240", new Address("TumbaTor14730", "14730", "Solna"));
let Daniel = new Person("Daniel", "Daniel.jakusjev@gmail.com", "0704925244", new Address("KarpGatan", "13341", "Slatsjöbaden"));