export class Card {
    // Public is to avoid the repetition of declaring and adding to constructor
    constructor(public name: string, public imagePath?: string) {
        this.name = name;
    }
}