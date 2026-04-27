import FormUpdateCaptions from "../forms/FormUpdateCaptions.jsx";
import FormUpdateFooterLink from "../forms/FormUpdateFooterLink.jsx";

export default function CaptionsSection({ captions, link }) {
  return (
    <>
      <FormUpdateCaptions captions={captions} />
      <FormUpdateFooterLink link={link} />
    </>
  );
}
