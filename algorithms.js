function getPath(element) {  
    if (!(element instanceof Element)) 
        return;
    
    const path = [];
    let parent;

    while (parent = element.parentNode) {
        const tag = element.tagName;
        let siblings;

        let result;
        if (element.id) {
            result = `#${element.id}`;
        } else {
            siblings = parent.children;
            result = [].filter.call(siblings, sibling => sibling.tagName === tag).length === 1 ? 
                    tag : `${tag}:nth-child(${1 + [].indexOf.call(siblings, element)})`
        }
        
        path.unshift(
            result
        );

        element = parent;
    }

    return `${path.join(' > ')}`.toLowerCase();
}

module.exports = getPath;