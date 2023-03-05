class myLeaf extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
  
    set id(value) {
        this._id = value;
    }
    get id(){
        return this._id;
    }
    set item(values) {
        this._item = values;
        this.render();
    }
    get item(){
        return this._item;
    }
  
    render(){
        this.shadowRoot.innerHTML = `
        <div>
            ${this.id}
        </div>
        `
        if (Array.isArray(this.item)) {
            this.item.forEach(item => {
                const childNode = createChild(item);
                this.shadowRoot.appendChild(childNode)
            })
        }
    }
  }
  class myTree extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }
  
    set tree(value) {
        if (this.hasAttribute('data')) {
            this._tree = JSON.parse(this.getAttribute('data'));
            this.render();
        }
    }
  
    get tree() {
        return this._tree;
    }
  
    render() {
        const rootNode = createChild(this._tree);
        this.shadowRoot.appendChild(rootNode)
    }
  }
  
  function createChild(item) {
    const node = document.createElement('my-leaf');
    node.id = item.id;
    if (item.items) {
        node.items = item.items;
    }
    return node;
  }
  
  function registrationCustomElements() {
    window.customElements.define('my-leaf', myLeaf);
    window.customElements.define('my-tree', myTree);
  }
  
  registrationCustomElements();