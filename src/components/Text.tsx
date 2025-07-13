interface TextProps {
  text: string;
  textStyles?: string;
}

export default function Text({ text, textStyles }: TextProps) {
  return <p className={textStyles}>{text}</p>;
}
