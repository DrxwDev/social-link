import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function CardImage({ src, alt, width, height }: ImageProps) {
  return (
    <Image
      priority={true}
      className="object-cover rounded-full"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
