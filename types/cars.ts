

export interface Car {
    _id : number;
    name : string;
    _type : 'car';
    brand : string;
    type : string;
    fuelCapacity : string;
    transmission : string;
    seatingCapacity : string;
    pricePerDay : number;
    originalPrice : string;
    image? : {
        asset : {
            _ref : string;
            _type : 'image';
        }
    };
    slug : {
        _type : 'slug'
        current : string;
    };
    inventory: number;

}