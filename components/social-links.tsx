"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <Link
        href="https://www.youtube.com/@DevGuideAcademy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/dev-alisamir"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
      <Link
        href="https://www.instagram.com/alisamir.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>

      <Link
        href="https://x.com/dev_alisamir"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>

      <Link
        href="https://t.me/the_developer_guide"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
