var Peon = (function () {
    function Peon(id) {
        this.id = id;
        this.Id = id;
    }
    return Peon;
})();

function foo(peon) {
    console.log(peon.Id);
}

var toady = new Peon(123);

foo(toady);
//# sourceMappingURL=foo.js.map
