const request = require("supertest");

const { app, server } = require("./server");

describe("TEST server.js", () => {
  afterAll(async () => {
    server.close();
  });

  it("GET / route , should return message", async () => {
    return request(app)
      .get("/")
      .expect(200)
      .then(res => {
        // { msg: 'WORKING!!!' }
        expect(res.body).toMatchSnapshot();
      });
  });

  it("GET /items/:id , should return book where id=MLA904396343", async () => {
    const id = "MLA904396343";
    return request(app)
      .get(`/items/${id}`)
      .expect(200)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });

  it("GET /items/:id , should return book where id is undefined", async () => {
    return request(app)
      .get(`/items/`)
      .expect(400)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });

  it("GET /items , should return the successfully the products list", async () => {

    return request(app)
      .get("/items?query=celulares")
      .expect(200)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });

  it("GET /items , should return error if query is null", async () => {

    return request(app)
      .get("/items")
      .expect(400)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });
});
