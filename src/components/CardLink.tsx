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
      className="bg-[var(--customGrey700)] w-full py-3 rounded-lg hover:cursor-pointer transition-all duration-200"
    >
      <Link href="#">
        <Text
          textStyles="text-white font-bold hover:text-[var(--customGreen)] text-[.9rem] hover:text[var(--customGreen)] transition-all duration-200"
          text={text}
        />
      </Link>
    </div>
  );
}
