
class Pokemon {
    number;
    name;
    type;
    types = [];
    image;

    constructor(number, name, types, image) {
        this.number = number;
        this.name = name;
        this.types = types;
        this.type = types.at(0);
        this.image = image;
    }
}
