"use strict";
var arrayOfSolidElements = [
    {
        letter: 'S',
        text: 'Single-responsibility principle',
        offset: -23,
    },
    {
        letter: 'O',
        text: 'Open–closed principle',
        offset: 18,
    },
    {
        letter: 'L',
        text: 'Liskov substitution principle',
        offset: -13,
    },
    {
        letter: 'I',
        text: 'Interface segregation principle',
        offset: 12,
    },
    {
        letter: 'D',
        text: 'Dependency inversion principle',
        offset: -20,
    },
];
var SlideComponent = /** @class */ (function () {
    function SlideComponent(templateId, hostElementId, solidElement) {
        this.moved = true;
        this.startPosition = solidElement.offset;
        this.text = solidElement.text;
        this.letter = solidElement.letter;
        this.templateElement = (document.getElementById(templateId));
        this.hostElement = document.getElementById(hostElementId);
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
        this.render();
    }
    SlideComponent.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    };
    SlideComponent.prototype.render = function () {
        var _this = this;
        this.element.querySelector('#text').textContent = this.text.toString();
        var sliderElement = (this.element.querySelector('#slider'));
        var textElement = this.element.querySelector('#text');
        sliderElement.style.transform = "translateY(-50%) translateX(" + this.startPosition + "rem)";
        textElement.style.transform = "translateX(" + this.startPosition + "rem)";
        textElement.innerText = this.text;
        sliderElement.innerText = this.letter;
        sliderElement.addEventListener('click', function () {
            var moveOffset;
            if (_this.moved) {
                moveOffset = '0px';
                _this.moved = false;
            }
            else {
                moveOffset = _this.startPosition + "rem";
                _this.moved = true;
            }
            sliderElement.style.transform = "translateY(-50%) translateX(" + moveOffset + ")";
        });
    };
    return SlideComponent;
}());
var elementsOnPage = [];
arrayOfSolidElements.forEach(function (item) {
    var element = new SlideComponent('template-slice', 'container', item);
    elementsOnPage.push(element);
});
document.addEventListener('click', function () {
    var allElementsMoved = true;
    elementsOnPage.forEach(function (element) {
        if (element.moved == true)
            allElementsMoved = false;
    });
    if (allElementsMoved) {
        document.querySelectorAll('#slider').forEach(function (item) {
            setTimeout(function () {
                item.classList.add('enhanced');
                item.classList.remove('border-invisible');
            }, 700);
        });
    }
    else {
        document.querySelectorAll('#slider').forEach(function (item) {
            item.classList.add('border-invisible');
        });
    }
});
