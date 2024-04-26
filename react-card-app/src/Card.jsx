import photo from './assets/photo.jpg'

function Card() {
    return(
        <div className='card'>
            <img className='card-img' src={photo} alt="Profile photo"/>
            <h2 className='card-title'>João Figueiredo</h2>
            <p className='card-text'>I'm a Software Engineering student at the University of Coimbra! I love coding and learning new things.</p>
        </div>
    );
}

export default Card