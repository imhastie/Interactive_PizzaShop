import Image from "next/image";
import { ReactNode } from "react";

type BackgroundProps = {
  desktopSrc: string;
  mobileSrc?: string;
  children?: ReactNode;
};

export default function Background({
  desktopSrc,
  mobileSrc,
  children,
}: BackgroundProps) {
  return (
    <>
      {/* Desktop */}
      <div
        className="object-cover
    -z-10"
      >
        <Image src={desktopSrc} alt="" fill priority className="object-cover" />
      </div>

      {/* Mobile */}
      <div className="inset-0 -z-50 block md:hidden">
        <Image
          src={mobileSrc ?? desktopSrc}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
    </>
  );
}
