import './styles/Home.css';
import photo1 from '../images/photo1.jpg';

const Home = () =>{
    return(
        <div className='MainDiv'>
            <UpperPart></UpperPart>
            <LowerPart></LowerPart>
        </div>
    )
}

const UpperPart = () =>{
    return(
        <div className='TopDiv'>
            <TextDiv></TextDiv>
            <Profile></Profile>
        </div>
    )
}

const LowerPart =() =>{
    return(
        <div className='LowerPart'>
            <Quote></Quote>
        </div>
    )
}

const TextDiv =() =>{
    return(
        <div className='IntroSection'>
            <MainText></MainText>
            <Roles></Roles>
        </div>
    )
}

const MainText = () =>{
    return(
        <div className='mainText'>
            <h1>i am</h1>
            <p>Rajin Khatri</p>
        </div>
    )
}

const Roles = () =>{
    return(
        <div className='Role'>
            <p id='identity1'>Student</p>
            <p id='identity2'>Web Developer</p>
            <p id='identity3'>Machine Learning Enthusiast</p>
        </div>
    )
}

const Profile = () => {
    return(
        <div className='ImageHead'>
            <img src={photo1} alt='Profile'></img>
        </div>
    )
}

const Quote = () =>{
    return(
        <div className='Quote'>
            <blockquote>
                You decide what you want to do and what you don't,
                what you want to say and what you don't, 
                how to spend your time.
            </blockquote>
        </div>
    )
}

export default Home;