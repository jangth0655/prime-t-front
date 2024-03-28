import CustomerFAQ from "./CustomerFAQ";
import CustomerIndividualInquery from "./CustomerIndividualInquery";

export default function CustomerService() {
  return (
    <div className="py-20 flex w-full">
      <CustomerFAQ />
      <CustomerIndividualInquery />
    </div>
  );
}
