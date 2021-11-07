export default function SSR({ title, description }) {
  console.log("Rendering SSR page component", title, description);
  return (
    <div>
      <h2>{title}</h2>
      {description.split("\n").map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  console.log("ssr::getServerSideProps");
  return {
    props: {
      title: "Server Side Rendered (SSR)",
      description: `This page was rendered dynamically at run time (exports \`getServerSideProps\` function).\nLast updated at ${new Date()}`,
    },
  };
}
