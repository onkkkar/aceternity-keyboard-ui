import Row1 from "./row1";
import Row2 from "./row2";
import Row3 from "./row3";
import Row4 from "./row4";
import Row5 from "./row5";
import Row6 from "./row6";

const Keyboard = () => {
  return (
    <div className="content-holder mx-auto flex w-full max-w-[88rem] items-center justify-center text-white">
      <div className="keyboard-holder mx-auto h-fit w-fit rounded-sm bg-zinc-800 p-2">
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
      </div>
    </div>
  );
};

export default Keyboard;
