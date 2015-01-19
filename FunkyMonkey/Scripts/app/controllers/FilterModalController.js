(function ()
{
    angular.module("funkymonkey.controllers")
        .controller("FilterModalController", ["$modalInstance", "FilterOptions", function ($modalInstance, FilterOptions)
        {
            var areaFilter = "^35.*|^36.*|^37.*|^38.*";
            var filter = "S$RES$DT";

            this.options = {
                area: FilterOptions.areaOptions,
                sales: {
                    type: FilterOptions.sales.typeOptions,
                    subType: FilterOptions.sales.subTypeOptions
                }
            };

            var dsFilter = FilterOptions.deserializeSalesFilter(filter);

            this.selectedOptions = {
                area: FilterOptions.deserializeAreaFilter(areaFilter),
                sales: {
                    enabled: dsFilter.options.enabled,
                    type: dsFilter.options.type,
                    subType: dsFilter.options.subType
                }
            };

            this.recap = {
                area: FilterOptions.getAreaRecap(this.selectedOptions.area),
                sales: {
                    type: "",
                    subType: ""
                },
                salesCombined: FilterOptions.getSalesRecap([
                    this.selectedOptions.sales.type,
                    this.selectedOptions.sales.subType
                ])
            };

            this.close = function ()
            {
                $modalInstance.dismiss("cancel");
            };

            this.save = function ()
            {
                alert("save");
                var _this = this;
                $http.post()
                .success(function ()
                {
                    
                });
            };

            this.areaChanged = function ()
            {
                var cleanOptions = FilterOptions.getValidatedAreaSelection(this.selectedOptions.area);
                this.recap.area = FilterOptions.getAreaRecap(cleanOptions);
                this.selectedOptions.area = cleanOptions;
            };

            this.typeChanged = function ()
            {
                var cleanOptions = FilterOptions.getValidatedTypeSelection(this.selectedOptions.sales.type);
                this.selectedOptions.sales.type = cleanOptions;
                this.recap.salesCombined = FilterOptions.getSalesRecap([
                    this.selectedOptions.sales.type,
                    this.selectedOptions.sales.subType
                ]);
            };

            this.subTypeChanged = function ()
            {
                var cleanOptions = FilterOptions.getValidatedSubTypeSelection(this.selectedOptions.sales.subType);
                this.selectedOptions.sales.subType = cleanOptions;
                this.recap.salesCombined = FilterOptions.getSalesRecap([
                    this.selectedOptions.sales.type,
                    this.selectedOptions.sales.subType
                ]);
            };
        }]);
})();