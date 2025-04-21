import "./certitem.scss";

interface CertItemProps {
  name: string;
  org: string;
  date: string;
  logo: string;
}
const CertItem = ({ name, org, date, logo }: CertItemProps) => {
  return (
    <li className="cert-item">
      <div className="cert-item-header">
        <div className="left">
          <h1 className="cert-name">{name}</h1>
          <h2 className="cert-org">{org}</h2>
          <p className="cert-date">{date}</p>
        </div>
        <div className="right">
          <img src={logo} alt="logo" height="80px" />
        </div>
      </div>
    </li>
  );
};

export default CertItem;
