import { useState } from "react";

import { formatDate } from "../../utils/formatDate.js";
import InteractiveCaption from "../UI/InteractiveCaption/InteractiveCaption.jsx";
import ModalAnnouncement from "../ModalAnnouncement/ModalAnnouncement.jsx";
import SubTextLine from "../UI/SubTextLine/SubTextLine.jsx";

import styles from "./Announcements.module.css";

export default function Announcements({ news }) {
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

      {news.map((newsItem) => (
        <div key={newsItem.id}>
          <InteractiveCaption
            onClick={() => {
              setSelectedAnnouncement(newsItem);
              showModalAnnouncements();
            }}
          >
            {newsItem.title}
          </InteractiveCaption>
          <SubTextLine>{formatDate(newsItem.date)}</SubTextLine>
        </div>
      ))}
    </div>
  );
}
