const ServicesShow = ({ img, title, description }) => {
  return (
    <div>
      <div className="mt-5">
        <div className="flex gap-2">
          <img src={img} alt="" className="" />
          <h3>{title}</h3>
        </div>

        <p className="ms-7 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServicesShow;
