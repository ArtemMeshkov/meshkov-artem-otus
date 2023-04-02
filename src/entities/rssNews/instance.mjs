import { model } from './model.mjs';
import { HelperService } from '../../utils/rss-parser-service.mjs';

export class RssLinkInstance {
  constructor(mongoose) {
    this.mongoose = mongoose;
    this.model = model(mongoose);
  }

  async findAll() {
    return await this.model.find({}).exec();
  }

  async findAllUrlLinks() {
    const allRows = await this.findAll();
    return allRows.map(x => x.link);
  }

  async findAllRssDocs() {
    const allRows = await this.findAll();
    return allRows.filter(x => !!x.rssDocs).map(x => JSON.parse(x.rssDocs));
  }

  async create(link) {
    const xmlPart = '.xml';
    if (!(link.indexOf(xmlPart, link.length - xmlPart.length) !== -1)) {
      throw new Error('Link must be xml typed');
    }
    try {
      const rss = await new HelperService().getFromUrl(link);
      const instance = new this.model({ link: link, rssDocs: JSON.stringify(rss) })

      return instance.save()
    }
    catch(ex) {
      throw new Error(ex.Message);
    }
  }
}