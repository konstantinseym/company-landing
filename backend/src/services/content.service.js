import { updateStringValue } from "../repositories/stringValues.repository.js";

export async function updateCaptionsService(data) {
  await updateStringValue("captions", data);
}

export async function updateDetailsService(data) {
  await updateStringValue("detailsBlock", data);
}

export async function updateContactsService(data) {
  await updateStringValue("contactsBlock", data);
}

export async function updateFooterLinkService(data) {
  await updateStringValue("footerLink", data);
}
