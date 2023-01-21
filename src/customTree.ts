

class myTree extends HTMLElement {
    constructor() {
      super();
      const id = 0;
      const items = '';
    }
  }
  
  class myLeaf extends HTMLElement {
    constructor() {
      super();
      const id = 0;
    }
  }
  
  customElements.define('my-tree', myTree);
  customElements.define('my-leaf', myLeaf);
  
  const div = document.createElement('div');
  div.setAttribute('data-json', '{"id": 1,"items": [{"id": 2,"items": [{ "id": 3 }]}]}');
  document.body.appendChild(div);
  const shadowRoot = div.attachShadow({
    mode: 'open'
  });
  
  function findNext(div: any) {
    var treeElements = JSON.parse(div.dataset.json);
    if (Object.keys(treeElements).length === 0) {
      return shadowRoot;
    }
  
    if (treeElements["id"]) {
      if (treeElements["items"]) {
        const localTree: any = document.createElement('my-tree');
        localTree.id = treeElements["id"];
        localTree.items = treeElements["items"][0];
        localTree.dataset.json = JSON.stringify(localTree.items);
        shadowRoot.appendChild(localTree);
        findNext(localTree);
      } else {
        const localLeaf = document.createElement('my-leaf');
        shadowRoot.appendChild(localLeaf);
        localLeaf.id = treeElements["id"];
      }
    }
  }
  
  findNext(div);