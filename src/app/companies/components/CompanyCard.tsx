"use client";

import { useState } from "react";
import { Company } from "../types/company";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h5 data-cy="company-name">{company.company_name}</h5>
      <p>State</p>
      <p data-cy="company-state">{company.company_state}</p>
      <p>Employees</p>
      <p data-cy="employee-count">{company.employee_count.toLocaleString()}</p>
      <p>Year</p>
      <p data-cy="plan-year">{company.plan_year.toLocaleString()}</p>
      <button
        data-cy="show-more-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Show {isExpanded ? "less" : "more"}
      </button>
      {isExpanded && (
        <div data-cy="details">
          <p>Premium</p>
          <p data-cy="premium-sum">{company.premium_sum.toLocaleString()}</p>
          <p>Participants</p>
          <p data-cy="participants-sum">
            {company.participants_sum.toLocaleString()}
          </p>
          <p>Broker Comissions</p>
          <p data-cy="broker-commision-sum">
            {company.broker_commission_sum.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
