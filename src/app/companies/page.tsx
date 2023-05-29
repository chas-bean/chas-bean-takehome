import CompanyList from "./components/CompanyList";
import companies from "./constants/companies";

export default function Companies() {
  return <CompanyList companies={companies} />;
}
