import Image from "next/image";

export default function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">

      {/* Basil */}
      <Image
        src="/images/basilpot-bg.png"
        alt=""
        width={250}
        height={250}
        className="
          absolute
          top-[2%]
          right-[1%]
          w-[12vw]
          h-auto
        "
      />

      {/* Tomato Sauce */}
      <Image
        src="/images/tomato-bg.png"
        alt=""
        width={250}
        height={250}
        className="
          absolute
          top-[4%]
          right-[14%]
          w-[10vw]
          h-auto
        "
      />

      {/* Flour Bowl */}
      <Image
        src="/images/flour-bg.png"
        alt=""
        width={250}
        height={250}
        className="
          absolute
          top-[22%]
          right-[3%]
          w-[9vw]
          h-auto
        "
      />

      {/* Mushrooms */}
      <Image
        src="/images/mushpot-bg.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          top-[48%]
          right-[4%]
          w-[12vw]
          h-auto
        "
      />

      {/* Dough Board */}
      <Image
        src="/images/dough-bg.png"
        alt=""
        width={500}
        height={500}
        className="
          absolute
          bottom-[-5%]
          right-[-3%]
          w-[24vw]
          h-auto
        "
      />
    </div>
  );
}