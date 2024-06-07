import Desktop from "./svg/EdificiosDesktop2";
import Mobile from "./svg/EdificiosMobile2";

const Image = (props) => {
  return (
    <div>
      <div className="inline lg:hidden 2xl:hidden">
        <Mobile {...props} />
      </div>
      <div className="hidden lg:inline 2xl:inline">
        <Desktop {...props} />
      </div>
    </div>
  );
};

export default Image;
