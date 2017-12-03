(function() {
    'use strict';

    angular
        .module('app.customer')
        .factory('CustomerForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'product',
                    type: 'input',
                    templateOptions: {
                        label: 'Producto:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'price',
                    type: 'input',
                    templateOptions: {
                        label: 'Precio:',
                        disabled: disabled
                    }
                },
                {
                    key: 'brand',
                    type: 'input',
                    templateOptions: {
                        label: 'Marca:',
                        disabled: disabled
                    }
                },
                {
                    key: 'colection',
                    type: 'input',
                    templateOptions: {
                        label: 'Coleccion:',
                        disabled: disabled
                    }
                },
                {
                    key: 'condition',
                    type: 'input',
                    templateOptions: {
                        label: 'Condicion:',
                        disabled: disabled
                    }
                },
                {
                    key: 'available',
                    type: 'input',
                    templateOptions: {
                        label: 'Disponibilidad:',
                        disabled: disabled
                    }
                },

            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
