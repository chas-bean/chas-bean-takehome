"use client";

import { useState } from "react";
import { Company } from "../types/company";

interface CompanyCardProps {
  className?: string;
  company: Company;
}

export default function CompanyCard({
  className = "",
  company,
}: CompanyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const brokerCommissionSum = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 2,
  }).format(company.broker_commission_sum);

  const premiumSum = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 2,
  }).format(company.premium_sum);

  return (
    <div
      className={`bg-white border-1 border-black flex flex-col justify-center max-w-md p-8 rounded ${className}`}
      data-cy="company"
    >
      <h5 className="font-bold pb-4 text-center" data-cy="company-name">
        {company.company_name}
      </h5>

      <div className="flex flex-row justify-around pb-8">
        <div className="flex flex-col">
          <p className="text-center">State</p>
          <p className="font-bold text-center" data-cy="company-state">
            {company.company_state}
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-center">Employees</p>
          <p className="font-bold text-center" data-cy="employee-count">
            {company.employee_count.toLocaleString()}
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-center">Year</p>
          <p className="font-bold text-center" data-cy="plan-year">
            {company.plan_year}
          </p>
        </div>
      </div>

      <button
        className="pb-4 text-cyan-500"
        data-cy="show-more-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Show {isExpanded ? "less ▲" : "more ▼"}
      </button>

      {isExpanded && (
        <div className="px-16" data-cy="details">
          <p className="leading-8" data-cy="premium-sum">
            <b>Premium:</b> {premiumSum}
          </p>
          <p className="leading-8" data-cy="participants-sum">
            <b>Participants:</b> {company.participants_sum.toLocaleString()}
          </p>
          <p className="leading-8" data-cy="broker-commision-sum">
            <b>Broker Comissions:</b> {brokerCommissionSum}
          </p>
        </div>
      )}
    </div>
  );
}
