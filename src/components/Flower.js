const Flower = ({name, image, price, tags}) => {

    // const flowerTags = tags.forEach((ele) => {
    //     return (
    //         ele
    //     )
    // })

    return (
      <div className="flower">
        <div className="flowerImage">
            <img src={image} style={{ width: "18rem" }}/>
        </div>
        <div className="flowerData">
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
        <div className="flowerTags">
        <h5>{tags}</h5>
        </div>
      </div>
    );
  };
  
  export default Flower;