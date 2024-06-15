import Image from "next/image";

export const BitcoinLightning = () => {
  return (
    <div>
      <p>Bitcoin Lightning</p>
      <Image
        priority
        src="/bitcoinlightning.png"
        alt="Bitcoin Lightning"
        width="150"
        height="150"
      />
    </div>
  );
};
