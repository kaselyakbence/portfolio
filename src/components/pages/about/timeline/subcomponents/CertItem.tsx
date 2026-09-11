import { useState } from "react";
import "./certitem.scss";

interface CertItemProps {
  name: string;
  org: string;
  date: string;
  logo: string;
  link: string;
}
const CertItem = ({ name, org, date, logo, link }: CertItemProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li className="cert-item">
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        <div className="cert-item-header">
          <div className="left">
            <h3 className="cert-name">{name}</h3>
            <h4 className="cert-org">{org}</h4>
            <p className="cert-date">{date}</p>
          </div>
          <div className="right">
            <img
              src={logo}
              alt={`${org} logo`}
              height="80px"
              className={imageLoaded ? "is-loaded" : ""}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </a>
    </li>
  );
};

export default CertItem;
