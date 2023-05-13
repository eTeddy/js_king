export const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home">
      <h1>Inspired By</h1>
      <p>--------------------------------</p>
      <h4>The Web School</h4>
      <p>Coding a Responsive Navbar with React</p>
      <iframe width="280" height="auto" src="https://www.youtube.com/embed/8kPk7CTOQh4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      
      <p>--------------------------------</p>

      <h4>JavaScript King</h4>
      <p>HTML CSS JS projects (Beginner):<br />16 projects using HTML CSS and JavaScript</p>
      <iframe width="280" height="auto" src="https://www.youtube.com/embed/EWv2jnhZErc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      
      <p>--------------------------------</p>

      <h1>Powered By</h1>
      <p>HTML, CSS, JavaScript, JSX, <br />APIs, Vite & React!</p>
      <p>--------------------------------</p>    
      <a className="fun" href="https://eteddy.github.io/" target="_blank">Fun Projects</a>

      <p>--------------------------------</p>    
      <a href="https://www.worldflagcounter.com/details/iyi" target="_blank">
        <img src="https://www.worldflagcounter.com/iyi/" alt="Flag Counter" />
      </a>
{/* 
      <a href="https://www.worldflagcounter.com/details/ix7" target="_blank">
        <img src="https://www.worldflagcounter.com/ix7/" alt="Flag Counter" />  
      </a>    
 */}
    </div>
  )
}


/*
export const Home = () => {
  return (
    <div className="container">
      <h1>🏡</h1>      
      <iframe 
        width="300" 
        height="auto" 
        src="https://www.youtube.com/embed/8kPk7CTOQh4" 
        title="YouTube video player" 
        frameborder="1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
      <h2>The Web School</h2>
      <h3>Coding a Responsive Navbar with React</h3>
      <h4>Tuesday, April 11, 2023</h4>    
      <a href="https://reactrouter.com/en/main/routers/create-hash-router" target="_blank">createHashRouter</a>
    </div>

  );
};
*/