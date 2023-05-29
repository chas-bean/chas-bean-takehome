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
      <p>{company.company_name}</p>
      <p>State</p>
      <p>{company.company_state}</p>
      <p>Employees</p>
      <p>{company.employee_count.toLocaleString()}</p>
      <p>Year</p>
      <p>{company.plan_year.toLocaleString()}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Show {isExpanded ? "less" : "more"}
      </button>
      {isExpanded && (
        <div>
          <p>Premium</p>
          <p>{company.premium_sum.toLocaleString()}</p>
          <p>Participants</p>
          <p>{company.participants_sum.toLocaleString()}</p>
          <p>Broker Comissions</p>
          <p>{company.broker_commission_sum.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
