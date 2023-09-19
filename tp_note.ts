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
            console.log("Votre pokémon " + this.nom +" à actuellement "+this.pointsDeVie+" il inflige "+this.pointsAttaque+" dégats par attaques");
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
                        case "eau":{
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






