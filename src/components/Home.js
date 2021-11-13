import profile_logo from '../images/profile_pic.png';
import linkedIn_logo from '../images/linkedIn_logo.png';
import '../css/Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
        Hi, I'm Kit, a Computer Science Student at The University of Adelaide
        </p>
        <img src={profile_logo} className="Profile-logo" alt="logo" />
      </header>
      <hr/>
      <body className="Home-body">
        <p>
        Connect with me on LinkedIn
        </p>
        <a href="https://www.linkedin.com/in/kittatam-saisaard/" target="react/jsx-no-target-blank">
          <img border="0" src={linkedIn_logo} className="LinkedIn-logo" alt="LinkedIn Logo"/>
        </a>
      </body>
    </div>
  );
}

export default Home;
