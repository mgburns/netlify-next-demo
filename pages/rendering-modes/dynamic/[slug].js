export default function Dynamic({ title, description }) {
  console.log("Rendering dynamic page component", title, description);
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
  console.log("dynamic::getStaticProps", params);
  return {
    props: {
      title: "Dynamic + ISR",
      description: `This page ("/${
        params.slug
      }") was rendered dynamically at build time, (exports \`getStaticProps\` and \`getStaticPaths\` functions with \`fallback\` set to 'blocking').\nLast updated at ${new Date()}`,
    },
  };
}

export function getStaticPaths() {
  console.log("dynamic::getStaticPaths");
  return {
    paths: ["/rendering-modes/dynamic/a", "/rendering-modes/dynamic/b"],
    fallback: "blocking",
  };
}
