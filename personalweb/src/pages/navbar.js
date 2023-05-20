import '../pages/styles/navbar.css'
import Home from '../images/home.png';

const NavBar = () => {
    return (
        <div className='Header'>
            <nav className='navigation'>
                    <button>
                        <img src={Home}></img><br></br><p>Home</p>
                    </button>
                    <button>
                        <img src={Home}></img><br></br><p>About Me</p>
                    </button>
                    <button>
                        <img src={Home}></img><br></br><p>Study</p>
                    </button>
                    <button>
                        <img src={Home}></img><br></br><p>Projects</p>
                    </button>
                    <button>
                        <img src={Home}></img><br></br><p>Contact Me</p>
                    </button>
            </nav>
        </div>
    )
}

export default NavBar;