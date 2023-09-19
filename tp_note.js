"use strict";
class Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
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
