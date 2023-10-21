import fan1 from "../../../assets/images/fan1.svg";
import fan2 from "../../../assets/images/fan2.svg";
import fan3 from "../../../assets/images/fan3.svg";
import fan4 from "../../../assets/images/fan4.svg";
import fan5 from "../../../assets/images/fan5.svg";
import fan6 from "../../../assets/images/fan6.svg";
import fan7 from "../../../assets/images/fan7.svg";
import fan8 from "../../../assets/images/fan8.svg";
import fan9 from "../../../assets/images/fan9.svg";

const fans = [
  { id: 1, img: fan1 },
  { id: 2, img: fan2 },
  { id: 3, img: fan3 },
  { id: 4, img: fan4 },
  { id: 5, img: fan5 },
  { id: 6, img: fan6 },
  { id: 7, img: fan7 },
  { id: 8, img: fan8 },
  { id: 9, img: fan9 },
];

const Clients = () => {
  return (
    <div className="lg:mx-[270px] mx-5 lg:-mt-[150px] -mt-6">
      <div className="flex items-center justify-between">
        <h2>
          <span className="lg:text-6xl text-lg text-[#0D71BA] uppercase top-heading">
            Our Customers
          </span>
          <br />
          <span className="lg:text-4xl text-base uppercase text-[#000] top-heading">
            are our biggest fans
          </span>
        </h2>
        <h2>
          <span className="lg:text-6xl text-lg text-[#0D71BA] uppercase top-heading">
            45+
          </span>{" "}
          <span className="lg:text-4xl text-base text-[#0D71BA] uppercase ">
            Clients
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-7 items-center justify-center mt-4 top-heading">
        {fans.map((fan) => (
          <div>
            <img src={fan.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
