var chaiu = require("chai");
let chaiHttp = require("chai-http");
let should = chaiu.should();

chaiu.use(chaiHttp);

let login = {
  email:"kishandbz@gmail.com",
  password:"qwerty"
}

describe("Auth test", () => {
    describe("/POST login", () => {
      it("it should log in and get a token ", (done) => {
        chaiu
          .request("http://localhost:5000")
          .post("/api/login")
          .send(login)
          .end((errny, res) => {
            res.should.have.status(200);
            res.should.have.contains({});
            done();
          });
      });
    });
});
