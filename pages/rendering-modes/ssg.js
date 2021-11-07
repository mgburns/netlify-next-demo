export default function SSG({ title, description }) {
  console.log("Rendering SSG page component", title, description);
  return (
    <div>
      <h1>{title}</h1>
      {description.split("\n").map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  console.log("ssg::getStaticProps");
  return {
    props: {
      title: "Static Site Generation (SSG)",
      description: `This page was rendered dynamically at build time (exports \`getStaticProps\` function).\nLast updated at ${new Date()}`,
    },
  };
}
