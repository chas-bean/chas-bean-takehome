import { Company } from "../types/company";
import CompanyCard from "./CompanyCard";

interface CompanyListProps {
  companies: Company[];
}

export default function CompanyList({ companies }: CompanyListProps) {
  return (
    <>
      {companies.map((company) => {
        return <CompanyCard company={company} key={company.ein.toString()} />;
      })}
    </>
  );
}
