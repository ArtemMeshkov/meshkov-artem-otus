const getPathFn = require('./algorithms');

const testDocument = `
  <body>
    <section class="container">
      <div id="box-1">
        <p>Text 1</p>
        <p>Text 2</p>
        <ul>
          <li class="list-item">item 1 <a class="link" href="#">test_link</a></li>
          <li class="list-item">item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </section>
  </body>
`
document.body.innerHTML = testDocument;

describe('Tests for getPath function', () => {

    test("getPath should return 'body' for document.body", () => {
        const body = document.body;
        expect(getPathFn(body)).toMatch("body");
    });

    test("getPath should return different selectors", () => {        
        const li1 = document.querySelectorAll("ul > li")[2];
        const li2 = document.querySelectorAll("ul > li")[3];
        expect(getPathFn(li1)).not.toBe(getPathFn(li2));
    });

    test("getPath should return className with nth-child", () => {        
        const li = document.querySelectorAll("ul > .list-item")[1];
        expect(getPathFn(li)).toMatch("body > section > #box-1 > ul > li:nth-child(2)");
    });

    test("getPath should return nth-child(2) for second p", () => {
        const p = document.querySelectorAll("#box-1 > p")[1];
        expect(getPathFn(p)).toMatch("p:nth-child(2)");
    });

    test("getPath should return only one unique selector", () => {    
        const element = document.querySelector(
            ".container > #box-1 > ul > li:nth-child(1) > .link"
        );
        const selector = getPathFn(element);
        const elementsLength = document.querySelectorAll(selector).length;
        expect(elementsLength).toBe(1);
    });
});