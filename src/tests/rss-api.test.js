import express from 'express'
import { start, disconnect } from '../db/mongoose.mjs';
import request from 'supertest';
import bodyParser from 'body-parser';
import { registerRss } from '../entities/rssNews/index.mjs';

const app = express();
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if (err instanceof HTTPError) {
      return res.status(400).send({ success: false, error: { msg: 'err' }});
    }
    if (err instanceof Error) {
      return res.status(500).send({ success: false, error: { msg: err.message }});
    }
})

const mockLink = "https://cyber.sports.ru/rss/all_news.xml";

beforeAll(async () => {
    const connect = await start();
    registerRss(app, connect);
})

afterAll(async () => {
    await disconnect();
})

describe("testing-server-routes", () => {
    it("GET /rssLink - success", async () => {
        const response = await request(app).get("/rssLink/");
        
        expect(response.statusCode).toEqual(200);
    });

    it("GET /rssDocs - success", async () => {
        const response = await request(app).get("/rssDocs/");
        
        expect(response.statusCode).toEqual(200);
    });

    it("POST /rssLink - error wrong link totally", async () => {
        const response = await request(app).post("/rssLink/").send({ link: "Totally wrong link "});
        expect(response.statusCode).toEqual(500);
        expect(response.serverError).toEqual(true);
    });

    // Конечно, со статической линкой внешней делать тесты не очень, т.к. урл может поменяться, а тесты - упасть
    // Теоретически нужно хранить где-то в тестовом Json'e это
    it("POST /rssLink - should return id", async () => {
        const response = await request(app).post("/rssLink/").send({ link: mockLink});
        expect(Object.keys(response.body?.data)).toContain('id');
        expect(response.statusCode).toEqual(200);
    });
});
