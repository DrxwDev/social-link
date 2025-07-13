import CardImage from "./CardImage";
import CardLink from "./CardLink";
import Text from "./Text";

const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

export default function Card() {
  return (
    <article className="w-[21rem] max-w-md sm:w-[25rem] sm:max-w-xl bg-[var(--customGrey800)] p-6 sm:px-9 sm:py-10  rounded-xl flex flex-col items-center justify-center">
      <div>
        <CardImage
          src="/jessica.jpeg"
          alt="User Image"
          width={90}
          height={90}
        />
      </div>
      <div className="mt-6 mb-5 flex flex-col gap-5  text-center">
        <div className="flex flex-col gap-1">
          <Text
            text="Jessica Randall"
            textStyles="text-2xl text-white font-semibold"
          />
          <Text
            text="London, United Kingdom"
            textStyles="text-[var(--customGreen)] font-bold text-[0.85rem]"
          />
        </div>
        <div>
          <Text
            text='"Front-end developer and avid reader."'
            textStyles="text-white font-[400] text-[0.92rem]"
          />
        </div>
      </div>
      <div className="text-center w-full flex flex-col gap-4">
        {links.map((text, id) => (
          <CardLink key={id} id={id} text={text} />
        ))}
      </div>
    </article>
  );
}
