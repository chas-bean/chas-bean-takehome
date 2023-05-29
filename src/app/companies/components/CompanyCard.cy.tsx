import React from "react";
import CompanyCard from "./CompanyCard";
import companies from "../constants/companies";
import { Company } from "../types/company";

describe("<CompanyCard />", () => {
  let brokerCommissionSumFormatted: string;
  let company: Company;
  let premiumSumFormatted: string;

  before(() => {
    company = companies[0];

    brokerCommissionSumFormatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 2,
    }).format(company.broker_commission_sum);

    premiumSumFormatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 2,
    }).format(company.premium_sum);
  });

  it("displays company name, company state, plan year and employee count", () => {
    cy.mount(<CompanyCard company={company} />);

    cy.get("[data-cy=company-name]").should("have.text", company.company_name);
    cy.get("[data-cy=company-state]").should(
      "have.text",
      company.company_state
    );

    cy.get("[data-cy=plan-year]").should(
      "have.text",
      company.plan_year.toLocaleString()
    );

    cy.get("[data-cy=employee-count]").should(
      "have.text",
      company.employee_count.toLocaleString()
    );
  });

  it("showing more should display premium sum, broker commission and number of participants", () => {
    cy.mount(<CompanyCard company={company} />);

    cy.get("[data-cy=details]").should("not.exist");
    cy.get("[data-cy=show-more-button]").click();
    cy.get("[data-cy=details]").should("exist");

    cy.get("[data-cy=details]")
      .children()
      .get("[data-cy=premium-sum]")
      .should("contain", premiumSumFormatted);

    cy.get("[data-cy=details]")
      .children()
      .get("[data-cy=broker-commision-sum]")
      .should("contain", brokerCommissionSumFormatted);

    cy.get("[data-cy=details]")
      .children()
      .get("[data-cy=participants-sum]")
      .should("contain", company.participants_sum.toLocaleString());
  });
});
