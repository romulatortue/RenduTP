class Pokemon {
    private nom: string;
    public pointsDeVie: number;
    protected pointsAttaque: number;
    public type:String;



    constructor(nom: string, pointsDeVie: number,pointsAttaque: number) {
        this.nom=nom;
        this.pointsDeVie=pointsDeVie;
        this.pointsAttaque=pointsAttaque;
        this.type="normal";
    }

    estMort(){
        if (this.pointsDeVie<1)
        {
            return true;
        }
        else
            return false;
    }

    attaquer(p:Pokemon){
        p.pointsDeVie-=this.pointsAttaque;
    }

    afficherInformation(){
        if(this.estMort()){
            console.log("Votre pokémon " + this.nom +" est actuellement mort ");
        }
        else
            console.log("Votre pokémon " + this.nom +" à actuellement "+this.pointsDeVie+"PV, il inflige "+this.pointsAttaque+" dégats par attaques");
    }
}

class PokemonFeu extends Pokemon {

                constructor(nom: string, pointsDeVie: number,pointsAttaque: number)
                {
                    super(nom,pointsDeVie,pointsAttaque)
                    this.type="feu";
                }

                attaquer(p: Pokemon) {
                    switch(p.type){
                        case "eau":{
                            p.pointsDeVie-=(this.pointsAttaque/2);
                            break;
                        }
                        case "plante":{
                            p.pointsDeVie-=(this.pointsAttaque*2);
                            break;
                        }
                        case "normal":{
                            p.pointsDeVie-=(this.pointsAttaque);
                            break;
                        }
                    }
                }

}

class PokemonEau extends Pokemon{

                constructor(nom: string, pointsDeVie: number,pointsAttaque: number)
                {
                    super(nom,pointsDeVie,pointsAttaque)
                    this.type="eau";
                }

                attaquer(p: Pokemon) {
                    switch(p.type){
                        case "plante":{
                            p.pointsDeVie-=(this.pointsAttaque/2);
                            break;
                        }
                        case "feu":{
                            p.pointsDeVie-=(this.pointsAttaque*2);
                            break;
                        }
                        case "normal":{
                            p.pointsDeVie-=(this.pointsAttaque);
                            break;
                        }
                    }
                }

}

class PokemonPlante extends Pokemon{

                constructor(nom: string, pointsDeVie: number,pointsAttaque: number)
                {
                    super(nom,pointsDeVie,pointsAttaque)
                    this.type="plante";
                }

                attaquer(p: Pokemon) {
                    switch(p.type){
                        case "feu":{
                            p.pointsDeVie-=(this.pointsAttaque/2);
                            break;
                        }
                        case "eau":{
                            p.pointsDeVie-=(this.pointsAttaque*2);
                            break;
                        }
                        case "normal":{
                            p.pointsDeVie-=(this.pointsAttaque);
                            break;
                        }
                    }
                }

}

// création des pokemons
let dracaufeu =new PokemonFeu("dracaufeu",150,40);
let miaouss =new Pokemon("miaouss",100,20);
let tortank = new PokemonEau("tortank",200,30);
let jungko = new PokemonPlante("jungko",120,50);

// phase de test
tortank.afficherInformation();
jungko.attaquer(tortank);
tortank.afficherInformation();
miaouss.afficherInformation();
dracaufeu.attaquer(miaouss);
miaouss.afficherInformation();
tortank.attaquer(dracaufeu);
dracaufeu.afficherInformation();
tortank.attaquer(dracaufeu);
tortank.attaquer(dracaufeu);
dracaufeu.afficherInformation();



