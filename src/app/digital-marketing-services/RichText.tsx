/** Renders plain text: blank-line separated paragraphs, "- " lines as a list. */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((block, i) => {
        const lines = block.split("\n");
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i}>
              {lines.map((l) => (
                <li key={l}>{l.slice(2)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </>
  );
}
