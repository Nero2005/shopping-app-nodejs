// import "dotenv/config";
// process.env.NODE_ENV = "test";
// import mongoose from "mongoose";
// import { CustomerModel } from "../src/database/models/index.js";

// import chai from "chai";
// import chaiHttp from "chai-http";
// import server from "../src/index.js";
// let assert = chai.assert;

// chai.use(chaiHttp);

// describe("Customer", () => {
//   after((done) => {
//     CustomerModel.deleteMany({}, (err) => {
//       done();
//     });
//   });

//   describe("/customer/signup", () => {
//     it("it should add a new customer to the database", (done) => {
//       chai
//         .request(server)
//         .post("/customer/signup")
//         .send({
//           email: "nologe37@gmail.com",
//           password: "password",
//           phone: "+2349122350327",
//         })
//         .end((err, res) => {
//           assert.equal(res.status, 200);
//           assert.isObject(res.body);
//           assert.property(res.body, "id");
//           assert.property(res.body, "token");
//           done();
//         });
//     });
//     it("it should sign in a customer", (done) => {
//       chai
//         .request(server)
//         .post("/customer/signin")
//         .send({
//           email: "nologe37@gmail.com",
//           password: "password",
//         })
//         .end((err, res) => {
//           assert.equal(res.status, 200);
//           assert.isObject(res.body);
//           assert.property(res.body, "id");
//           assert.property(res.body, "token");
//           done();
//         });
//     });
//     it("it should fail on sign in with wrong password", (done) => {
//       chai
//         .request(server)
//         .post("/customer/signin")
//         .send({
//           email: "nologe37@gmail.com",
//           password: "password2",
//         })
//         .end((err, res) => {
//           assert.equal(res.status, 200);
//           assert.isNull(res.body);
//           done();
//         });
//     });
//     it("it should fail on sign in with wrong email", (done) => {
//       chai
//         .request(server)
//         .post("/customer/signin")
//         .send({
//           email: "nologe@gmail.com",
//           password: "password2",
//         })
//         .end((err, res) => {
//           assert.equal(res.status, 404);
//           assert.isNull(res.body);
//           done();
//         });
//     });
//   });
// });
