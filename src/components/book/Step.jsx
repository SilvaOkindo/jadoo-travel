/* eslint-disable react/prop-types */
const Step = ({icon, title}) => {
  return (
    <div className="flex items center gap-5">
      <span>
        {icon}
      </span>
      <div>
        <h3 className="font-bold text-primary-color-2">{title}</h3>
        <p className="text-base w-[400px] text-primary-color">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia in
          ducimus totam.
        </p>
      </div>
    </div>
  );
};
export default Step;
