(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("ModalController", ["$modalInstance", "ModalOptions", function ($modalInstance, ModalOptions)
        {
            this.selectedGais = null;
            this.form = {
                themGais: {
                    enabled: true,
                    selectedMoarGais: "",
                    selectedSommoarGais: ""
                }
            };

            this.options = {
                gais: ModalOptions.gais,
                moargais: ModalOptions.moargais,
                evenmoar: ModalOptions.evenmoar
            };

            this.close = function ()
            {
                //$modalInstance.close(returnValue);
                $modalInstance.dismiss("cancel");
            };

            this.isSelected = function (value)
            {
                return value === "D";
            };

            this.themGaisToggled = function ()
            {

            }
        }]);
})();