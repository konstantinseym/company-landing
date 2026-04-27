import FormUpdateDetails from "../forms/FormUpdateDetails.jsx";
import FormUpdateContacts from "../forms/FormUpdateContacts.jsx";

export default function InformationSection({ details, contacts }) {
  return (
    <>
      <FormUpdateDetails details={details} />
      <FormUpdateContacts contacts={contacts} />
    </>
  );
}
