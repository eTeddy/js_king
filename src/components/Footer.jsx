import './Footer.css'

export const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
      <a href="https://eteddy.github.io/" target="_blank">My Portfolio</a>
      <p>Minimalist 🧡 May 2023</p>
    </div>
  );
};