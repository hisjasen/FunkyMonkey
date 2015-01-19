(function ()
{
    angular.module("funkymonkey.services")
        .service("FilterOptions", ["AllAreasFilter", function (AllAreasFilter)
        {
            this.areaOptions = [
                { "value": "", "recap": "All Islands", "lev": "1", "sort": "00", "label": "All Islands" },
                { "value": "^1.*", "recap": "Oahu", "lev": "2", "sort": "10", "label": "Oahu" },
                { "value": "^11.*", "recap": "Honolulu", "lev": "3", "sort": "11", "label": "Honolulu (1-1)" },
                { "value": "^12.*", "recap": "Honolulu", "lev": "3", "sort": "12", "label": "Honolulu (1-2)" },
                { "value": "^13.*", "recap": "Honolulu", "lev": "3", "sort": "13", "label": "Honolulu (1-3)" },
                { "value": "^14.*", "recap": "Koolaupoko", "lev": "3", "sort": "14", "label": "Koolaupoko (1-4)" },
                { "value": "^15.*", "recap": "Koolauloa", "lev": "3", "sort": "15", "label": "Koolauloa (1-5)" },
                { "value": "^16.*", "recap": "Waialua", "lev": "3", "sort": "16", "label": "Waialua (1-6)" },
                { "value": "^17.*", "recap": "Wahiawa", "lev": "3", "sort": "17", "label": "Wahiawa (1-7)" },
                { "value": "^18.*", "recap": "Waianae", "lev": "3", "sort": "18", "label": "Waianae (1-8)" },
                { "value": "^19.*", "recap": "Ewa", "lev": "3", "sort": "19", "label": "Ewa (1-9)" },
                { "value": "^2.*", "recap": "Maui", "lev": "2", "sort": "20", "label": "Maui" },
                { "value": "^21.*", "recap": "Hana", "lev": "3", "sort": "21", "label": "Hana (2-1)" },
                { "value": "^22.*", "recap": "Makawao", "lev": "3", "sort": "22", "label": "Makawao (2-2)" },
                { "value": "^23.*", "recap": "Waialua", "lev": "3", "sort": "23", "label": "Waialua (2-3)" },
                { "value": "^24.*", "recap": "Lahaina", "lev": "3", "sort": "24", "label": "Lahaina (2-4)" },
                { "value": "^25.*", "recap": "Molokai", "lev": "3", "sort": "25", "label": "Molokai (2-5)" },
                { "value": "^26.*", "recap": "Kalawao", "lev": "3", "sort": "26", "label": "Kalawao (2-6)" },
                { "value": "^3.*", "recap": "Big Island", "lev": "2", "sort": "30", "label": "Big Island" },
                { "value": "^31.*", "recap": "Puna", "lev": "3", "sort": "31", "label": "Puna (3-1)" },
                { "value": "^32.*", "recap": "South Hilo", "lev": "3", "sort": "32", "label": "South Hilo (3-2)" },
                { "value": "^33.*", "recap": "North Hilo", "lev": "3", "sort": "33", "label": "North Hilo (3-3)" },
                { "value": "^34.*", "recap": "Hamakua", "lev": "3", "sort": "34", "label": "Hamakua (3-4)" },
                { "value": "^35.*", "recap": "North Kohala", "lev": "3", "sort": "35", "label": "North Kohala (3-5)" },
                { "value": "^36.*", "recap": "South Kohala", "lev": "3", "sort": "36", "label": "South Kohala (3-6)" },
                { "value": "^37.*", "recap": "North Kona", "lev": "3", "sort": "37", "label": "North Kona (3-7)" },
                { "value": "^38.*", "recap": "South Kona", "lev": "3", "sort": "38", "label": "South Kona (3-8)" },
                { "value": "^39.*", "recap": "Kau", "lev": "3", "sort": "39", "label": "Kau (3-9)" },
                { "value": "^4.*", "recap": "Kauai", "lev": "2", "sort": "40", "label": "Kauai" },
                { "value": "^41.*", "recap": "Waimea", "lev": "3", "sort": "41", "label": "Waimea (4-1)" },
                { "value": "^42.*", "recap": "Koloa", "lev": "3", "sort": "42", "label": "Koloa (4-2)" },
                { "value": "^43.*", "recap": "Lihue", "lev": "3", "sort": "43", "label": "Lihue (4-3)" },
                { "value": "^44.*", "recap": "Kawaihau", "lev": "3", "sort": "44", "label": "Kawaihau (4-4)" },
                { "value": "^45.*", "recap": "Hanalei", "lev": "3", "sort": "45", "label": "Hanalei (4-5)" }
            ];

            this.sales = {
                typeOptions: [
                    { "value": "", "recap": "All Type", "lev": "1", "sort": "1", "tbl": "type", "label": "All Type" },
                    { "value": "BUS", "recap": "Business", "lev": "2", "sort": "2", "tbl": "type", "label": "Business" },
                    { "value": "COM", "recap": "Commercial", "lev": "2", "sort": "2", "tbl": "type", "label": "Commercial" },
                    { "value": "CND", "recap": "Condo", "lev": "2", "sort": "2", "tbl": "type", "label": "Condo" },
                    { "value": "LND", "recap": "Land", "lev": "2", "sort": "2", "tbl": "type", "label": "Land" },
                    { "value": "MTF", "recap": "Multi-Family", "lev": "2", "sort": "2", "tbl": "type", "label": "Multi-Family" },
                    { "value": "RES", "recap": "Residential", "lev": "2", "sort": "2", "tbl": "type", "label": "Residential" }
                ],
                subTypeOptions: [
                    { "value": "", "recap": "All Subtype", "lev": "1", "sort": "1", "tbl": "subtype", "form": "", "label": "All Subtype" },
                    { "value": "2U", "recap": "2 Units", "lev": "2", "sort": "2", "tbl": "subtype", "form": "MTF", "label": "2 Units (MTF)" },
                    { "value": "3U", "recap": "3 Units", "lev": "2", "sort": "2", "tbl": "subtype", "form": "MTF", "label": "3 Units (MTF)" },
                    { "value": "4+U", "recap": "4+ Units", "lev": "2", "sort": "2", "tbl": "subtype", "form": "MTF", "label": "4+ Units (MTF)" },
                    { "value": "AB", "recap": "Apartment Building", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Apartment Building (COM)" },
                    { "value": "AT", "recap": "Attached", "lev": "2", "sort": "2", "tbl": "subtype", "form": "RES|CND", "label": "Attached (RES|CND)" },
                    { "value": "BN", "recap": "Business", "lev": "2", "sort": "2", "tbl": "subtype", "form": "BUS", "label": "Business (BUS)" },
                    { "value": "BP", "recap": "Business/Real Prop", "lev": "2", "sort": "2", "tbl": "subtype", "form": "BUS", "label": "Business/Real Prop (BUS)" },
                    { "value": "DT", "recap": "Detached", "lev": "2", "sort": "2", "tbl": "subtype", "form": "RES|CND", "label": "Detached (RES|CND)" },
                    { "value": "FS", "recap": "Food Service", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Food Service (COM)" },
                    { "value": "HP", "recap": "Hospitality", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Hospitality (COM)" },
                    { "value": "IN", "recap": "Industrial", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Industrial (COM)" },
                    { "value": "OF", "recap": "Office", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Office (COM)" },
                    { "value": "RO", "recap": "Ohana/ADU", "lev": "2", "sort": "2", "tbl": "subtype", "form": "RES", "label": "Ohana/ADU (RES)" },
                    { "value": "RT", "recap": "Retail", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Retail (COM)" },
                    { "value": "SP", "recap": "Special Purpose", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Special Purpose (COM)" },
                    { "value": "UC", "recap": "Under Construction", "lev": "2", "sort": "2", "tbl": "subtype", "form": "RES", "label": "Under Construction (RES)" },
                    { "value": "VC", "recap": "Vacant", "lev": "2", "sort": "2", "tbl": "subtype", "form": "LND", "label": "Vacant (LND)" },
                    { "value": "WH", "recap": "Warehouse", "lev": "2", "sort": "2", "tbl": "subtype", "form": "COM", "label": "Warehouse (COM)" }
                ]
            };

            this.getOptionByValue = function (key, optionSet)
            {
                for (var i = 0; i < optionSet.length; i++)
                {
                    if (optionSet[i].value === key)
                    {
                        return optionSet[i];
                    }
                }

                return null;   // not found
            };

            // Check selection and remove sub-selections if its parent is selected
            // ex: "Oahu" overrides all other Oahu sub-areas
            //
            this.getValidatedAreaSelection = function (selectedOptions)
            {
                var _this = this;
                var validOptions = [];
                var contains = {
                    all: false,
                    oahu: false,
                    maui: false,
                    bigIsland: false,
                    kauai: false
                };

                //validOptions = AllAreasFilter(selectedOptions);

                for (var i = 0; i < selectedOptions.length; i++)
                {
                    // "All Areas" selected
                    if (selectedOptions[i].value === "")
                    {
                        contains.all = true;
                        validOptions.push(this.getOptionByValue("", this.areaOptions));
                        break;
                    }
                    else
                    {
                        if (selectedOptions[i].sort == "10")
                        {
                            contains.oahu = true;
                            validOptions.push(selectedOptions[i]);
                        }
                        else if (selectedOptions[i].sort == "20")
                        {
                            contains.maui = true;
                            validOptions.push(selectedOptions[i]);
                        }
                        else if (selectedOptions[i].sort == "30")
                        {
                            contains.bigIsland = true;
                            validOptions.push(selectedOptions[i]);
                        }
                        else if (selectedOptions[i].sort == "40")
                        {
                            contains.kauai = true;
                            validOptions.push(selectedOptions[i]);
                        }

                        if ((contains.oahu == false && /^1[1-9]/.test(selectedOptions[i].sort)) ||
                            (contains.maui == false && /^2[1-9]/.test(selectedOptions[i].sort)) ||
                            (contains.bigIsland == false && /^3[1-9]/.test(selectedOptions[i].sort)) ||
                            (contains.kauai == false && /^4[1-9]/.test(selectedOptions[i].sort)))
                        {
                            validOptions.push(selectedOptions[i]);
                        }
                    }
                }

                return validOptions;
            };

            this._getValidatedSelection = function (selectedOptions, optionSet)
            {
                var validOptions = [];
                var masterOptionSelected = false;

                for (var i = 0; i < selectedOptions.length; i++)
                {
                    if (selectedOptions[i].value === "")
                    {
                        masterOptionSelected = true;
                        validOptions.push(this.getOptionByValue("", optionSet));
                        break;
                    }
                    else if (masterOptionSelected == false)
                    {
                        validOptions.push(selectedOptions[i]);
                    }
                }

                return validOptions;
            };

            this.getValidatedTypeSelection = function (selectedOptions)
            {
                var validOptions = this._getValidatedSelection(selectedOptions, this.sales.typeOptions);
                return validOptions;
            };

            this.getValidatedSubTypeSelection = function (selectedOptions)
            {
                var validOptions = this._getValidatedSelection(selectedOptions, this.sales.subTypeOptions);
                return validOptions;
            };


            this.getAreaRecap = function (selectedOptions)
            {
                var recap = [];

                for (var i = 0; i < selectedOptions.length; i++)
                {
                    recap.push(selectedOptions[i].recap);
                }

                var strRecap = recap.join(", ");

                if (strRecap.length > 45)
                {
                    strRecap = strRecap.substr(0, 45).replace(/\,$/, ' ') + "...";
                }

                return strRecap;
            };

            this.getSalesRecap = function (selectedOptionsArray)
            {
                var recap = [];

                for (var i = 0; i < selectedOptionsArray.length; i++)
                {
                    for (var j = 0; j < selectedOptionsArray[i].length; j++)
                    {
                        recap.push(selectedOptionsArray[i][j].recap);
                    }
                }

                var strRecap = recap.join(", ");

                if (strRecap.length > 45)
                {
                    strRecap = strRecap.substr(0, 45).replace(/\,$/, ' ') + "...";
                }

                return strRecap;
            };

            this.serializeAreaFilter = function (selectedOptions)
            {
                var filter = [];
                var filterStr = "";
                
                for (var i = 0; i < selectedOptions.length; i++)
                {
                    filter.push(selectedOptions[i].value);
                }

                filterStr = filter.join("|");
                return filterStr;
            };

            this.deserializeAreaFilter = function (filterStr)
            {
                var options = [];
                var filterVals = [];
                var opt = null;

                filterVals = filterStr.split("|");

                for (var i = 0; i < filterVals.length; i++)
                {
                    opt = this.getOptionByValue(filterVals[i], this.areaOptions);
                    if (opt != null)
                    {
                        options.push(opt);
                    }
                }

                return options;
            };

            this.deserializeSalesFilter = function (filterStr)
            {
                var filterVals = [];
                var response = {
                    enabled: false,
                    options: {
                        type: [],
                        subType: []
                    }
                };
                var opt = null;
                var typeFromFilter = [];
                var subTypeFromFilter = [];

                filterVals = filterStr.split("$");
                
                if (filterVals.length == 3)
                {
                    response.enabled = (filterVals[0] === "S");
                    typeFromFilter = filterVals[1].split("|");
                    subTypeFromFilter = filterVals[2].split("|");

                    for (var i = 0; i < typeFromFilter.length; i++)
                    {
                        opt = this.getOptionByValue(typeFromFilter[i], this.sales.typeOptions);
                        if (opt != null)
                        {
                            response.options.type.push(opt);
                        }
                    }

                    for (var i = 0; i < subTypeFromFilter.length; i++)
                    {
                        opt = this.getOptionByValue(subTypeFromFilter[i], this.sales.subTypeOptions);
                        if (opt != null)
                        {
                            response.options.subType.push(opt);
                        }
                    }
                }

                return response;
            };
        }]);
})();