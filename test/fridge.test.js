var chaiu = require("chai");
let chaiHttp = require("chai-http");
let should = chaiu.should();

chaiu.use(chaiHttp);

const authorizationToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtpc2hhbmRiekBnbWFpbC5jb20iLCJkYXRlIjoxNjg0OTQ2MTUwMTAzLCJpYXQiOjE2ODQ5NDYxNTB9.ZUFC_o_JJJQ5vItbmRUDGRc_cPjZxXCE99q7N-GFo54";

let fridge = {
  id: 111,
  serialNumber: "WE13151531",
  type: "freezer",
  working: true,
  email:"kishandbz@gmail.com"
};

describe("FridgeController", () => {

  describe("/POST add fridge", () => {
    it("it should add a fridge", (done) => {
      chaiu
        .request("http://localhost:5000")
        .post("/api/fridge")
        .set("authorization", authorizationToken)
        .send(fridge)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("/GET get fridges", () => {
    it("it should get a list of fridges", (done) => {
      chaiu
        .request("http://localhost:5000")
        .get("/api/fridge")
        .set("authorization", authorizationToken)
        .end((err, res) => {
          res.should.have.status(200);
          //   res.body.should.be.a('array');
          //    res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/PUT change a fridge", () => {
    it("it should add a fridge", (done) => {
      fridge.working = false;

      chaiu
        .request("http://localhost:5000")
        .put("/api/fridge")
        .set("authorization", authorizationToken)
        .send(fridge)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("/DELETE delete a fridge", () => {
    it("it should add a fridge", (done) => {
      chaiu
        .request("http://localhost:5000")
        .delete("/api/fridge" + "?id=" + fridge.id)
        .set("authorization", authorizationToken)
        .send(fridge)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
