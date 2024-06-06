import GuideImage from "@/assets/guide.png";
import Image from "next/image";

export default function Guide() {
  return (
    <div id="guide-nav" className="mt-[100px]">
      <h4 className="text-2xl font-bold text-neutral-700 text-center dark:text-neutral-100 font-mono mb-5">
        Guide:
      </h4>
      <p className="font-mono text-neutral-700 dark:text-neutral-200">
        - Harambe kills Pepe
      </p>
      <p className="font-mono text-neutral-700 dark:text-neutral-200">
        - Pepe kills Hector
      </p>
      <p className="font-mono text-neutral-700 dark:text-neutral-200">
        - Hector kills Harambe
      </p>
      <Image
        src={GuideImage}
        alt="Guide"
        width={200}
        className="m-auto mt-10"
      />
    </div>
  );
}
