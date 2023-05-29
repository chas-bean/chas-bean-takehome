import { Company } from "../types/company";
import CompanyCard from "./CompanyCard";

interface CompanyListProps {
  companies: Company[];
}

export default function CompanyList({ companies }: CompanyListProps) {
  return (
    <div className="container mx-auto" data-cy="company-list">
      <h1 className="text-3xl mb-8 ml-4 mt-8">Companies</h1>
      {companies.map((company) => {
        return (
          <CompanyCard
            className="mb-2 mx-auto"
            company={company}
            key={company.ein.toString()}
          />
        );
      })}
    </div>
  );
}
