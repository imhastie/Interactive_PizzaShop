import Image from "next/image";

type Props = {
  step: string;
  title: string;
  description: string;
  image: string;
};

export default function HowItWorksCard({
  step,
  title,
  description,
  image,
}: Props) {
  return (
    <div
      className="
        relative

        w-[200px]
        h-[280px]

        rounded-[28px]

        border-[3px]
        border-[#8b5a2b]

        bg-[#fdf5b8]

        flex
        flex-col
        items-center

        px-6
        pt-10

        shadow-[0_6px_0_#8b5a2b]
        hover:shadow-[0_10px_0_#8b5a2b]
        transition-all
        duration-200
        hover:-translate-y-2
      "
    >
      {/* Step Badge */}
      <div
        className="
          absolute
          -top-4
          left-4

          w-12
          h-12

          rounded-full

          bg-[#7b3f16]

          border-2
          border-[#fdf5b8]

          flex
          items-center
          justify-center

          text-white
          font-black
        "
      >
        {step}
      </div>

      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="w-28 h-28 object-contain"
      />

      <h3
        className="
          mt-5

          text-center

          text-[#4b2a15]
          font-black
          text-base
          uppercase
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4

          text-center

          text-[#6b4a2f]
          text-sm
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
}
