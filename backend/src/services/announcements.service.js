import { addNews, deleteNews } from "../repositories/news.repository.js";

export async function createAnnouncementService(data) {
  await addNews({
    title: data.caption,
    content: data.content,
  });
}

export async function deleteAnnouncementService(id) {
  await deleteNews(id);
}
