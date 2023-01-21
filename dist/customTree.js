"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myTree = /** @class */ (function (_super) {
    __extends(myTree, _super);
    function myTree() {
        var _this = _super.call(this) || this;
        var id = 0;
        var items = '';
        return _this;
    }
    return myTree;
}(HTMLElement));
var myLeaf = /** @class */ (function (_super) {
    __extends(myLeaf, _super);
    function myLeaf() {
        var _this = _super.call(this) || this;
        var id = 0;
        return _this;
    }
    return myLeaf;
}(HTMLElement));
customElements.define('my-tree', myTree);
customElements.define('my-leaf', myLeaf);
var div = document.createElement('div');
div.setAttribute('data-json', '{"id": 1,"items": [{"id": 2,"items": [{ "id": 3 }]}]}');
document.body.appendChild(div);
var shadowRoot = div.attachShadow({
    mode: 'open'
});
function findNext(div) {
    var treeElements = JSON.parse(div.dataset.json);
    if (Object.keys(treeElements).length === 0) {
        return shadowRoot;
    }
    if (treeElements["id"]) {
        if (treeElements["items"]) {
            var localTree = document.createElement('my-tree');
            localTree.id = treeElements["id"];
            localTree.items = treeElements["items"][0];
            localTree.dataset.json = JSON.stringify(localTree.items);
            shadowRoot.appendChild(localTree);
            findNext(localTree);
        }
        else {
            var localLeaf = document.createElement('my-leaf');
            shadowRoot.appendChild(localLeaf);
            localLeaf.id = treeElements["id"];
        }
    }
}
findNext(div);
