const Card = (data) => {
  console.log("ne geliyo", data);
  return (
    <div className="cards">
      <h1>{data.title}</h1>
      <img src={data.image} alt="" />
      <p>{data.desc}</p>
    </div>
  );
};

export default Card;
