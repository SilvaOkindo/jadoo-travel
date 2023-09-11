// eslint-disable-next-line react/prop-types
const Service = ({title, description, icon}) => {
  return (
    <div className="flex flex-col items-center gap-4 hover:shadow-box-shadow-2 py-10 rounded-[36px] transition-all ease relative duration-[800ms]">
      <div>
        {icon}
      </div>
      <h2 className="font-semibold text-primary-color text-[20px]">
        {title}
      </h2>
      <p className="text-center text-primary-color text-base px-20 sm:px-10">
       {description}
      </p>

      <div className="absolute bg-[#DF6951] h-[80px] w-[80px] bottom-[-50px] left-[-20px] rounded-border-radius-1 -z-20 hidden hover:block"></div>
    </div>
  );
};

export default Service;
