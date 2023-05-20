import './styles/Home.css';
import photo1 from '../images/photo1.jpg';
import codebg from '../images/codebg.jpg';

const Home = () => {
    return (
        <div className='Home'>
            <MainText></MainText>
            {/* <Header2></Header2> */}
            <Profile></Profile>
        </div>
    )
}

const MainText = () => {
    return (
        <div className='mainText'>
            <div className='subText'>
                <h1>i am </h1>
                <p>Rajin Khatri</p>
            </div>
            <Header2></Header2>
        </div>
    )
}

const Header2 = () => {
    return (
        <div className='Header2'>
            <ul>
                <li id='identity1'>student,</li>
                <li id='identity2'>learner,</li>
                <li id='identity3'>blahblah</li>
            </ul>
        </div>
    )
}

const Profile = () => {
    return (
        <img src={photo1} className='profileimage'></img>
    )
}

export default Home;