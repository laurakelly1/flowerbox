const Flower = ({name, image, price, tags}) => {

    const flowerTags = tags.map((ele) => {
        return (
            <div className="tag">
                {ele}
            </div>
        )
    })

    return (
      <div className="flower">
        <div className="flowerImage">
            <img className="flowerImageFile" src={image} alt="..."/>
        </div>
        <div className="flowerData">
            <h4 className="flowerName">{name}</h4>
            <h4 className="flowerPrice">${price}</h4>
        </div>
        
        <h5 className="flowerTags">{flowerTags}</h5>
        
      </div>
    );
  };
  
  export default Flower;