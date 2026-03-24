import styles from "./Announcements.module.css";
import InteractiveCaption from "../UI/InteractiveCaption/InteractiveCaption.jsx";
import ModalAnnouncement from "../ModalAnnouncement/ModalAnnouncement.jsx";
import { useState } from "react";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      date: "13.01.2025, 14:57",
      title: "Коллегия предупреждает об участившихся случаях мошенничества",
      content: "Content of the news number 1 Telegin Телегин",
    },
    {
      id: 2,
      date: "13.01.2025, 14:57",
      title: "У нас новый сайт",
      content: "У нас новый сайт",
    },
  ];

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [isModalAnnouncementsOpen, setIsModalAnnouncementsOpen] =
    useState(false);

  function showModalAnnouncements() {
    setIsModalAnnouncementsOpen(true);
  }

  function hideModalAnnouncements() {
    setIsModalAnnouncementsOpen(false);
  }

  return (
    <div className={styles.announcements}>
      <ModalAnnouncement
        isOpen={isModalAnnouncementsOpen}
        handleClose={hideModalAnnouncements}
        data={selectedAnnouncement}
      />

      {announcements.map((announcement) => (
        <InteractiveCaption
          key={announcement.id}
          onClick={() => {
            setSelectedAnnouncement(announcement);
            showModalAnnouncements();
          }}
        >
          {announcement.date} | {announcement.title}
        </InteractiveCaption>
      ))}
    </div>
  );
}
