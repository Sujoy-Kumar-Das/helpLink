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
        color: "rgba(255, 255, 255, 0.7)",
        textDecoration: "none",
        fontSize: "0.9rem",
      }}
    >
      {text}
    </Link>
  );
}
