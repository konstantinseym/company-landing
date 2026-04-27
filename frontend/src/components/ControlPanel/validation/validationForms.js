import {
  ANNOUNCEMENT_VALIDATION_RULES,
  CAPTIONS_VALIDATION_RULES,
  CONTACTS_VALIDATION_RULES,
  DETAILS_VALIDATION_RULES,
  FOOTERLINK_VALIDATION_RULES,
  EMPLOYEE_VALIDATION_RULES,
} from "./validationRules.js";

///////////////////
// ANNOUNCEMENTS //
///////////////////

export function validateFormAddAnnouncement(values) {
  const caption = values.caption.trim();
  const content = values.content.trim();

  if (!caption || !content) {
    return "All fields are required";
  }

  if (caption.length < ANNOUNCEMENT_VALIDATION_RULES.captionMin) {
    return (
      "Title must be at least " +
      ANNOUNCEMENT_VALIDATION_RULES.captionMin +
      " characters"
    );
  }

  if (caption.length > ANNOUNCEMENT_VALIDATION_RULES.captionMax) {
    return (
      "Title must be less than " +
      ANNOUNCEMENT_VALIDATION_RULES.captionMax +
      " characters"
    );
  }

  if (content.length < ANNOUNCEMENT_VALIDATION_RULES.contentMin) {
    return (
      "Content must be at least " +
      ANNOUNCEMENT_VALIDATION_RULES.contentMin +
      " characters"
    );
  }

  if (content.length > ANNOUNCEMENT_VALIDATION_RULES.contentMax) {
    return (
      "Content must be less than " +
      ANNOUNCEMENT_VALIDATION_RULES.contentMax +
      " characters"
    );
  }

  return null;
}

//////////////
// CAPTIONS //
//////////////

export function validateFormUpdateCaptions(values) {
  const heroMajor = values.heroMajor.trim();
  const heroMinor = values.heroMinor.trim();
  const newsCaption = values.newsCaption.trim();
  const employeesCaption = values.employeesCaption.trim();
  const detailsCaption = values.detailsCaption.trim();
  const contactsCaption = values.contactsCaption.trim();

  if (
    !heroMajor ||
    !heroMinor ||
    !newsCaption ||
    !employeesCaption ||
    !detailsCaption ||
    !contactsCaption
  ) {
    return "All fields are required";
  }

  if (heroMajor.length > CAPTIONS_VALIDATION_RULES.heroMajorMax) {
    return (
      "Caption must be less than " +
      CAPTIONS_VALIDATION_RULES.heroMajorMax +
      " characters"
    );
  }

  if (heroMinor.length > CAPTIONS_VALIDATION_RULES.heroMinorMax) {
    return (
      "Subcaption must be less than " +
      CAPTIONS_VALIDATION_RULES.heroMinorMax +
      " characters"
    );
  }

  if (newsCaption.length > CAPTIONS_VALIDATION_RULES.newsCaptionMax) {
    return (
      "Announcements section title must be less than " +
      CAPTIONS_VALIDATION_RULES.newsCaptionMax +
      " characters"
    );
  }

  if (employeesCaption.length > CAPTIONS_VALIDATION_RULES.employeesCaptionMax) {
    return (
      "Employees section title must be less than " +
      CAPTIONS_VALIDATION_RULES.employeesCaptionMax +
      " characters"
    );
  }

  if (detailsCaption.length > CAPTIONS_VALIDATION_RULES.detailsCaptionMax) {
    return (
      "Details section title must be less than " +
      CAPTIONS_VALIDATION_RULES.detailsCaptionMax +
      " characters"
    );
  }

  if (contactsCaption.length > CAPTIONS_VALIDATION_RULES.contactsCaptionMax) {
    return (
      "Contacts section title must be less than " +
      CAPTIONS_VALIDATION_RULES.contactsCaptionMax +
      " characters"
    );
  }

  return null;
}

//////////////
// CONTACTS //
//////////////

export function validateFormUpdateContacts(values) {
  const majorCaption = values.majorCaption.trim();
  const minorCaptions = [...values.minorCaptions];

  if (!majorCaption) {
    return "Main field is required";
  }

  if (majorCaption.length > CONTACTS_VALIDATION_RULES.majorCaptionMax) {
    return (
      "Main field must be less than " +
      CONTACTS_VALIDATION_RULES.majorCaptionMax +
      " characters"
    );
  }

  for (let i = 0; i < minorCaptions.length; i++) {
    const value = minorCaptions[i].value.trim();

    if (!value) {
      return "Extra field #" + (i + 1) + " is required";
    }

    if (value.length > CONTACTS_VALIDATION_RULES.minorCaptionsMax) {
      return (
        "Extra field #" +
        (i + 1) +
        " must be less than " +
        CONTACTS_VALIDATION_RULES.minorCaptionsMax +
        " characters"
      );
    }
  }

  return null;
}

/////////////
// DETAILS //
/////////////

export function validateFormUpdateDetails(values) {
  for (let i = 0; i < values.length; i++) {
    const value = values[i].value.trim();

    if (!value) {
      return "Field #" + (i + 1) + " is required";
    }

    if (value.length > DETAILS_VALIDATION_RULES.stringMax) {
      return (
        "Field #" +
        (i + 1) +
        " must be less than " +
        DETAILS_VALIDATION_RULES.stringMax +
        " characters"
      );
    }
  }

  return null;
}

////////////////
// FOOTERLINK //
////////////////

export function validateFormUpdateFooterLink(values) {
  const caption = values.caption.trim();

  if (!caption) {
    return "Field is required";
  }

  if (caption.length > FOOTERLINK_VALIDATION_RULES.captionMax) {
    return (
      "Value must be less than " +
      FOOTERLINK_VALIDATION_RULES.captionMax +
      " characters"
    );
  }

  return null;
}

////////////////
// EMPLOYEE   //
////////////////

export function validateFormAddEmployee(values) {
  const name = values.name;
  const role = values.role;
  const alt = values.alt;

  if (!name || !role || !alt) {
    return "All fields are required";
  }

  if (name.length > EMPLOYEE_VALIDATION_RULES.nameMax) {
    return (
      "Name must be less than " +
      EMPLOYEE_VALIDATION_RULES.nameMax +
      " characters"
    );
  }

  if (role.length > EMPLOYEE_VALIDATION_RULES.roleMax) {
    return (
      "Role must be less than " +
      EMPLOYEE_VALIDATION_RULES.roleMax +
      " characters"
    );
  }

  if (alt.length > EMPLOYEE_VALIDATION_RULES.altMax) {
    return (
      "Alt must be less than " +
      EMPLOYEE_VALIDATION_RULES.altMax +
      " characters"
    );
  }

  return null;
}
