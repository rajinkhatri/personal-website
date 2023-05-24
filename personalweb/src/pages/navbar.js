import '../pages/styles/navbar.css'
import Home from '../images/home.png';
import Academics from '../images/academics.png';
import Projects from '../images/projects.png';
import Mail from '../images/mail1.png';

const NavBar = () => {
    return (
        <div className='Header'>
            <nav className='navigation'>
                    <button>
                        <img src={Home}></img><br></br><p>Home</p>
                    </button>
                    <button>
                        <img src={Academics}></img><br></br><p>Academics</p>
                    </button>
                    <button>
                        <img src={Projects}></img><br></br><p>Projects</p>
                    </button>
                    <button>
                        <img src={Mail}></img><br></br><p>About Me</p>
                    </button>
                    <button>
                        <img src={Mail}></img><br></br><p>Contact Me</p>
                    </button>
            </nav>
        </div>
    )
}

export default NavBar;