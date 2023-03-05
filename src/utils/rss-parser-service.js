const Parser = require('rss-parser');
const parser = new Parser();

class HelperService {
    async getFromUrl(url){
        const result = await parser.parseURL(url); 
        return result;
    }
}
module.exports = new HelperService();