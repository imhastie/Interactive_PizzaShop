import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* Desktop */}
      <div className="fixed inset-0 -z-50 hidden md:block">
        <Image
          src="/images/main-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="fixed inset-0 -z-50 block md:hidden">
        <Image
          src="/images/mobile-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
    </>
  );
}
