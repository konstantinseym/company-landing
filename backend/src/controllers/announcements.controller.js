import {
  createAnnouncementService,
  deleteAnnouncementService,
} from "../services/announcements.service.js";

export async function createAnnouncement(req, res, next) {
  try {
    await createAnnouncementService(req.body);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export async function deleteAnnouncement(req, res, next) {
  try {
    await deleteAnnouncementService(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}
