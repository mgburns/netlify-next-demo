export default function ISR({ title, description }) {
  console.log("Rendering ISR page component", title, description);
  if (!title && !description) {
    console.log("Missing title and description, rendering loading message");
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{title}</h2>
      {description.split("\n").map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  console.log("isr::getStaticProps", params);
  return {
    props: {
      title: "Incremental Static Regeneration (ISR)",
      description: `This page ("/${
        params.slug
      }") was rendered dynamically at build time, and will be regenerated at run time every 30 seconds (exports \`getStaticProps\` function with \`revalidate\` set to 30).\nLast updated at ${new Date()}`,
    },
    revalidate: 30,
  };
}

export function getStaticPaths() {
  console.log("isr::getStaticPaths");
  return {
    paths: ["/rendering-modes/isr"],
    fallback: "blocking",
  };
}
