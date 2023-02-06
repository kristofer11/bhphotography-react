const LandscapeModal = ({ clickedImage, handleRotationRight, setClickedImage, handleRotationLeft }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClickedImage(null);
        }
    }

    return (
        <div className='overlay dismiss' onClick={handleClick}>
            <img src={clickedImage} alt={Image.description} />
            <span className='dismiss' onClick={handleClick}>X</span>
            <div onClick={handleRotationRight} className='overlay-arrows_right'>
                {' '}
                <div className='modalArrow'>⮕</div>
            </div>
            <div onClick={handleRotationLeft} className='overlay-arrows_left'>                    
                <div className='modalArrow'>⬅</div>
            </div>
        </div>
    )
}

<i class="fa-light fa-circle-arrow-right"></i>

export default LandscapeModal;
