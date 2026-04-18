import { getAllNews } from "../repositories/news.repository.js";
import { getAllEmployees } from "../repositories/employees.repository.js";
import { getAllStringValues } from "../repositories/stringValues.repository.js";

export async function getFullAppData() {
  const news = await getAllNews();
  const employees = await getAllEmployees();
  const stringValues = await getAllStringValues();

  return {
    news: news,
    employees: employees,
    captions: stringValues.find((item) => item.section === "captions")?.data,
    detailsBlock: stringValues.find((item) => item.section === "detailsBlock")
      ?.data,
    contactsBlock: stringValues.find((item) => item.section === "contactsBlock")
      ?.data,
    footerLink: stringValues.find((item) => item.section === "footerLink")
      ?.data,
  };
}
