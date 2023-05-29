import CompanyList from "./components/CompanyList";
import companies from "./constants/companies";

export default function Companies() {
  return (
    <>
      <h1>Companies</h1>
      <CompanyList companies={companies} />
    </>
  );
}
