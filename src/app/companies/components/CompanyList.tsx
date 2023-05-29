import { Company } from "../types/company";

interface CompanyListProps {
  companies: Company[];
}

export default function CompanyList({ companies }: CompanyListProps) {
  return (
    <>
      {companies.map((company) => {
        return <div>{company.company_name}</div>;
      })}
    </>
  );
}
