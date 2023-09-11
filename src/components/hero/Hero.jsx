import Button from "../button/Button";
import { BsFillPlayFill } from "react-icons/bs";
import hero from '../../assets/hero.png'
// import plane from '../../assets/plane.png'


const Hero = () => {
  return (
    <section className="flex justify-between lg:items-center container mx-auto px-3 md:px-8 flex-col lg:flex-row">
      <div className="flex flex-col gap-2 basis-1/2 mt-20 md:gap-4 lg:mt-0">
        <h2 className="text-[#DF6951] text-xm md:text-sm font-bold">BEST DESTINATIONS AROUND THE WORLD</h2>
        <h1 className="text-6xl lg:text-5xl xl:text-[73px] font-bold text-primary-color">
          Travel, enjoy <br /> and live a new <br />and full life
        </h1>

        <p className="text-[13px] text-primary-color-2  xs:text-base font-normal">
          Built wicket longer admire do barton vanity itself do in it. <br />
          Preferred to sportmen it engrossed listening. Park gate <br /> sell
          they west hard for the.
        </p>

        <div className="flex items-center gap-10">
          <Button />

          <div className="flex gap-5 items-center">
            <span className="bg-[#DF6951] p-2 rounded-full shadow-box-shadow-1">
              <BsFillPlayFill className="text-white text-base"/>
            </span>
            <p className="text-primary-color-2 text-base">Play Demo</p>
          </div>
        </div>
      </div>

      <div>
        <img src={hero} alt=""  className="relative mt-10 basis-1/4"/>
        {/* <img src={plane} alt="" className="absolute top-20 left-[50%]"/> */}
      </div>
    </section>
  );
};

export default Hero;
