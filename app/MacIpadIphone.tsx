"use client";
import { motion } from "framer-motion";

type MacIpadIphoneProps = {
  iPhone?: string;
  iPad?: string;
  mac?: string;
};

const MacIpadIphone = ({ iPhone, iPad, mac }: MacIpadIphoneProps) => {
  return (
    <div className="flex items-end justify-center overflow-hidden w-screen h-[400px] z-[3]">
      {mac && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="-ml-[270px] md:-ml-[150px] lg:-ml-[0] relative h-[250px] w-[calc(250px*1.75)] min-w-[calc(250px*1.75)] md:h-[400px] md:w-[calc(400px*1.75)] md:min-w-[calc(400px*1.75)] z-10"
        >
          <img
            src={mac}
            alt=""
            className="absolute h-[calc(250px*0.86)] mt-[12px] w-[calc(250px*1.38)] md:h-[calc(400px*0.86)] md:mt-[20px] md:w-[calc(400px*1.38)] left-[50%] -translate-x-[50%] z-[12] object-cover"
          />
          {/* aspect ratio 1.75 */}
          <img
            src="projects/MacBook.png"
            alt=""
            className="absolute h-full w-full z-[15] object-cover"
          />
        </motion.div>
      )}
      {iPad && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          // viewport={{ once: true }}
          className=" -ml-[90px] md:-ml-[220px] relative h-[230px] w-[calc(230px*0.72)] min-w-[calc(230px*0.72)] md:h-[380px] md:w-[calc(380px*0.72)] md:min-w-[calc(380px*0.72)] z-20"
        >
          <img
            src={iPad}
            alt=""
            className="absolute h-[calc(230px*0.925)] mt-[9px] w-[calc(230px*0.65)] md:h-[calc(380px*0.925)] md:mt-[15px] md:w-[calc(380px*0.64)] left-[50%] -translate-x-[50%] z-[22] object-cover"
          />
          {/* aspect ratio 0.72 */}
          <img
            src="projects/iPad.png"
            alt=""
            className="absolute h-full w-full z-[25] object-cover"
          />
        </motion.div>
      )}
      {iPhone && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          // viewport={{ once: true }}
          className=" -ml-[50px] md:-ml-[50px] relative h-[210px] w-[calc(210px*0.48)] min-w-[calc(210px*0.48)] md:h-[330px] md:w-[calc(330px*0.48)] md:min-w-[calc(330px*0.48)] z-30"
        >
          <img
            src={iPhone}
            alt=""
            className="absolute h-[calc(210px*0.96)] w-[calc(210px*0.445)] mt-[5px] md:h-[calc(330px*0.96)] md:w-[calc(330px*0.445)] md:mt-[6.5px] left-[50%] -translate-x-[50%] z-[32] rounded-[8px] md:rounded-[15px] object-cover"
          />

          <img
            src="projects/iPhone.png"
            alt=""
            className="absolute h-full w-full z-[35] object-cover"
          />
        </motion.div>
      )}
    </div>
  );
};

export default MacIpadIphone;
