import Link from "next/link";
import Text from "./Text";

interface LinkProps {
  id: number;
  text: string;
}

export default function CardLink({ id, text }: LinkProps) {
  return (
    <div
      id={`${id}`}
      className="bg-[var(--customGrey700)] w-full py-3 rounded-lg"
    >
      <Link href="#">
        <Text textStyles="text-white font-bold text-[.9rem]" text={text} />
      </Link>
    </div>
  );
}
