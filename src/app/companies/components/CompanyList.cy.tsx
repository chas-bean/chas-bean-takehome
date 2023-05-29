import React from "react";
import companies from "../constants/companies";
import { Company } from "../types/company";
import CompanyList from "./CompanyList";

describe("<CompanyList />", () => {
  it("centers the list of companies horizontally", () => {
    cy.mount(<CompanyList companies={companies} />);

    cy.get("[data-cy=company-list]").should("have.class", "mx-auto");
  });
});
