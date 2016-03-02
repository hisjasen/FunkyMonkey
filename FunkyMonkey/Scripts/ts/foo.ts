class Peon {
    Id: string;
    constructor(public id) {
        this.Id = id;
    }
}

interface Identity {
    Id: string;
}

function foo(peon: Identity) {
    console.log(peon.Id);
}

var toady = new Peon(123);

foo(toady);