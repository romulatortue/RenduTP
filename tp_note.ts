class Pokemon {
    private nom: string;
    private pointsDeVie: number;
    private pointsAttaque: number;


    constructor(nom: string, pointsDeVie: number,pointsAttaque: number) {
        this.nom=nom;
        this.pointsDeVie=pointsDeVie;
        this.pointsAttaque=pointsAttaque;
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

class PokemonFeu extends Pokemon{
    private type:String;

                constructor(nom: string, pointsDeVie: number,pointsAttaque: number)
                {
                    super(nom,pointsDeVie,pointsAttaque)
                    this.type="feu";
                }

}

class PokemonEau extends Pokemon{
    private type:String;

                constructor(nom: string, pointsDeVie: number,pointsAttaque: number)
                {
                    super(nom,pointsDeVie,pointsAttaque)
                    this.type="eau";
                }

}

class PokemonPlante extends Pokemon{
    private type:String;

                constructor(nom: string, pointsDeVie: number,pointsAttaque: number)
                {
                    super(nom,pointsDeVie,pointsAttaque)
                    this.type="plante";
                }

}

