import "./Footer.scss";

const Footer = ({ handleUser, showUser }) => {
  return (
    <div className="footer" onClick={handleUser}>
      {showUser}
    </div>
  );
};
export default Footer;
