import Link from "next/link";

export default function FooterLinkCompo({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      style={{
        color: "text.secondary",
        textDecoration: "none",
        fontSize: "0.9rem",
      }}
    >
      {text}
    </Link>
  );
}
