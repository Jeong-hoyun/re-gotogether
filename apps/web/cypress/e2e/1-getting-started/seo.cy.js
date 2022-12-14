/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("mainpage metatag check", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://main.d2imipx759fcvw.amplifyapp.com/");
  });

  it("displays full header", () => {
    cy.title().should("eq", "메인페이지|고투게더");
  });

  it("og tag", () => {
    cy.get('meta[property="og:type"]');
    cy.get('meta[property="og:title"]');
    cy.get('meta[property="og:description"]');
  });

  it("twitter card", () => {
    cy.get('meta[name="twitter:card"]');
    cy.get('meta[name="twitter:site"]');
  });
});
