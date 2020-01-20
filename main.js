(function($){
    'use strict';
    
    function isReady(obj){
        return obj.readyState === 4 && obj.status === 200;
    }

    var app = (function(){
        return {
            init: function init(){
                this.companyInfo();
                this.initEvent();
            },
            initEvent: function initEvent(){
                var $buttonRegister = $('[data-js="button-register"]');
                $buttonRegister.addEventListener('click', app.handleClickRegister, false);
            },
            handleClickRegister: function handleClickRegister(e){
                e.preventDefault();
                var $fragment = document.createDocumentFragment();
                var tableCar = $('[data-js="table-cars"]');
                tableCar.appendChild(app.createNewCar());
            },
            createNewCar: function createNewCar(){
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImage = document.createElement('td');
                var $tdbrand = document.createElement('td');
                var $tdYaer = document.createElement('td');
                var $tdPlate = document.createElement('td');
                var $tdColor = document.createElement('td');

                var $image = document.createElement('img');
                $image.setAttribute('src', $('[data-js="image"]').value);
                $image.setAttribute('width','200');
                $image.setAttribute('height','80');

                $tdImage.appendChild($image);

                $tdbrand.textContent = $('[data-js="brand"]').value;
                $tdYaer.textContent = $('[data-js="yaer"]').value;
                $tdPlate.textContent = $('[data-js="plate"]').value;
                $tdColor.textContent = $('[data-js="color"]').value;

                $tr.appendChild($tdImage);
                $tr.appendChild($tdbrand);
                $tr.appendChild($tdYaer);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);

                return $fragment.appendChild($tr);
            },
            companyInfo: function companyInfo(){
                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/company.json');
                ajax.send();
                ajax.addEventListener('readystatechange',app.initAjax, false);
            },
            initAjax: function initAjax(){
                if (isReady(this)){
                    var $elementName = $('[data-js="name"]');
                    var $elementPhone = $('[data-js="phone"]')
                    var data = JSON.parse(this.responseText);
                    $elementName.textContent = data.name;
                    $elementPhone.textContent = data.phone;
                }
            },
        };
    })();
    app.init();
})(window.DOM);