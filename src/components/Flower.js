const Flower = (props) => {
    return (
      <div className="flower">
        <div className="flowerImage">
            <img src={props.image}/>
        </div>
        <div className="flowerData">
            <h4>{props.title}</h4>
            <h4>{props.price}</h4>
        </div>
        <div className="flowerTags">
        <h5>{props.tags}</h5>
        </div>
      </div>
    );
  };
  
  export default Flower;