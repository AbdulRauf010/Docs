import Card from "./Card";
import { useRef } from "react";

const Foreground = () => {

    const ref=useRef(null);

  const data = [
    {
      desc: "First Card",
      size: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
      
      },
    },
    {
      desc: "First Card",
      size: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
       
      },
    },
    {
      desc: "First Card",
      size: ".9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
   
      },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item,index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
