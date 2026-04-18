import { getFullAppData } from "../services/appData.service.js";

export async function getAppData(req, res, next) {
  try {
    const appData = await getFullAppData();
    res.json(appData);
  } catch (err) {
    next(err);
  }
}
