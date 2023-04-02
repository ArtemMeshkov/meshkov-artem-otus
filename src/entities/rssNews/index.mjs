import { RssLinkInstance } from './instance.mjs';
import { register } from './routes.mjs';

export function
  registerRss(express, mongoose) {
    const rssLink = new RssLinkInstance(mongoose);

    register(express, rssLink);
  }