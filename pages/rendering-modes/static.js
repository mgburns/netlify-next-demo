export default function Static() {
  console.log("Rendering Static page component");
  return (
    <div>
      <h2>Static</h2>
      <p>This page was rendered statically at build time (No initial props).</p>
    </div>
  );
}
