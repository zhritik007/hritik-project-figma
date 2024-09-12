import './Gallery.css'; 
import image1 from './1.png'
import image2 from './2.jpg'
import image3 from './3.jpg'
// import image3 from './1.png'

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h3>Gallery</h3>
                <button className="add-image-btn">+ Add Image</button>
            </div>
            <div className="gallery-images">
                <button className="gallery-arrow">&lt;</button>
                <img src={image1} alt="Gallery" />
                <img src={image2} alt="Gallery" />
                <img src={image3} alt="Gallery" />
                <button className="gallery-arrow">&gt;</button>
            </div>
        </div>
    );
};

export default Gallery;
