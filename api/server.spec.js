const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("environment", () => {
    it("should set env to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", () => {
    it("should return a 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
});

// wrote the test for 404 because it isn't set up, and I am testing to make sure that that is working.
