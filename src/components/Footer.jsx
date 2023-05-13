import './Footer.css'

export const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <p>Minimalist 🧡 May 2023</p>
    </div>
  );
};