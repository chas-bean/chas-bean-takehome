import React from "react";
import CompanyCard from "./CompanyCard";
import companies from "../constants/companies";

describe("<CompanyCard />", () => {
  it("renders", () => {
    cy.mount(<CompanyCard company={companies[0]} />);
  });
});
