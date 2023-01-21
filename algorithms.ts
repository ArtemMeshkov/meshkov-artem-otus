export function getPath(element: Element | null): string {  
    if (!(element instanceof Element) || element == null) 
        return '';
    
    const path = [];
    let parent;

    while (parent = element.parentElement) {
        const tag = element.tagName;
        let siblings: HTMLCollection;
        const siblArr: any[] = [];
        const namesArr: any[] = [];
        let result: string;
        if (element.id) {
            result = `#${element.id}`;
        } else {
            siblings = parent.children;
            result = siblArr.filter.call(siblings, (sibling: HTMLElement) => sibling.tagName === tag).length === 1 ? 
                    tag : `${tag}:nth-child(${1 + namesArr.indexOf.call(siblings, element)})`
        }
        
        path.unshift(
            result
        );

        element = parent;
    }

    return `${path.join(' > ')}`.toLowerCase();
}
