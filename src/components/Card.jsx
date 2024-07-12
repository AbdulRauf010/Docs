import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({ data, reference }) => {
    
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-60 h-72 flex-shrink-0 rounded-[40px] bg-zinc-900/90 text-white p-10 overflow-hidden">
      <FaFileAlt />

      <p className="text-sm pt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center  justify-between  px-8 py-3 mb-3">
          <h5>{data.size}</h5>
          {data.close ? <IoIosClose /> : <FaDownload />}
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full p-3 bg-green-600 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
