"use strict";
class Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        this.type = "normal";
    }
    estMort() {
        if (this.pointsDeVie < 1) {
            return true;
        }
        else
            return false;
    }
    attaquer(p) {
        p.pointsDeVie -= this.pointsAttaque;
    }
    afficherInformation() {
        if (this.estMort()) {
            console.log("Votre pokémon " + this.nom + " est actuellement mort ");
        }
        else
            console.log("Votre pokémon " + this.nom + " à actuellement " + this.pointsDeVie + " il inflige " + this.pointsAttaque + " dégats par attaques");
    }
}
class PokemonFeu extends Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque) {
        super(nom, pointsDeVie, pointsAttaque);
        this.type = "feu";
    }
    attaquer(p) {
        switch (p.type) {
            case "eau": {
                p.pointsDeVie -= (this.pointsAttaque / 2);
                break;
            }
            case "plante": {
                p.pointsDeVie -= (this.pointsAttaque * 2);
                break;
            }
            case "normal": {
                p.pointsDeVie -= (this.pointsAttaque);
                break;
            }
        }
    }
}
class PokemonEau extends Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque) {
        super(nom, pointsDeVie, pointsAttaque);
        this.type = "eau";
    }
    attaquer(p) {
        switch (p.type) {
            case "plante": {
                p.pointsDeVie -= (this.pointsAttaque / 2);
                break;
            }
            case "feu": {
                p.pointsDeVie -= (this.pointsAttaque * 2);
                break;
            }
            case "normal": {
                p.pointsDeVie -= (this.pointsAttaque);
                break;
            }
        }
    }
}
class PokemonPlante extends Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque) {
        super(nom, pointsDeVie, pointsAttaque);
        this.type = "plante";
    }
    attaquer(p) {
        switch (p.type) {
            case "eau": {
                p.pointsDeVie -= (this.pointsAttaque / 2);
                break;
            }
            case "feu": {
                p.pointsDeVie -= (this.pointsAttaque * 2);
                break;
            }
            case "normal": {
                p.pointsDeVie -= (this.pointsAttaque);
                break;
            }
        }
    }
}
