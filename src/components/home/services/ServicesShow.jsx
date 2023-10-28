const ServicesShow = ({ img, title, description }) => {
  return (
    <div>
      <div className="mt-5">
        <div className="flex gap-2">
          <img src={img} alt="" className="" />
          <h3 className="services-title text-2xl">{title}</h3>
        </div>

        <p className="services-description lg:text-base text-sm ms-7 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServicesShow;
