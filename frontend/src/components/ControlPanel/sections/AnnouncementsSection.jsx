import FormAddAnnouncement from "../forms/FormAddAnnouncement.jsx";
import FormDeleteAnnouncement from "../forms/FormDeleteAnnouncement.jsx";

export default function AnnouncementsSection({news, handleAddAnnouncement, handleDeleteAnnouncement}) {
  return (
    <>
      <FormAddAnnouncement handleAddAnnouncement={handleAddAnnouncement} />
      <FormDeleteAnnouncement
        news={news}
        handleDeleteAnnouncement={handleDeleteAnnouncement}
      />
    </>
  );
}
