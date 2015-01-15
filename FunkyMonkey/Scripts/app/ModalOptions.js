(function ()
{
    angular.module("funkymonkey.services")
        .service("ModalOptions", [function ()
        {
            this.gais = [
                { "key": "", "value": "Everybody", "sort": 0 },
                { "key": "A", "value": "Alice", "sort": 1 },
                { "key": "B", "value": "Bob", "sort": 2 },
                { "key": "C", "value": "Chuck", "sort": 3 }
            ];
            this.moargais = [
                { "key": "", "value": "Everybody", "sort": 0 },
                { "key": "D", "value": "Dave", "sort": 1 },
                { "key": "E", "value": "Ernie", "sort": 2 },
                { "key": "F", "value": "Fannie", "sort": 3 }
            ];
            this.evenmoar = {
                sommoargais: [
                    { "key": "", "value": "Everybody", "sort": 0 },
                    { "key": "G", "value": "Gascon", "sort": 1 },
                    { "key": "H", "value": "Heather", "sort": 2 }
                ]
            };

        }]);
})();