import Parser from 'rss-parser'
const parser = new Parser();

export class HelperService {
    async getFromUrl(url){
        const result = await parser.parseURL(url); 
        return result;
    }
}