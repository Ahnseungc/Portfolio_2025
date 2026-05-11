/** fullDescription 블록을 Apple body 17px / 1.47 로 렌더 */
export function ProjectBody({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\n+/);

  return (
    <div className="space-y-0">
      {blocks.map((block, i) => {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        const isList = lines.length > 0 && lines.every((l) => l.startsWith("•"));

        if (isList) {
          return (
            <ul key={i} className="mt-8 list-none space-y-3 first:mt-0">
              {lines.map((line, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-ink"
                >
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-apple-primary"
                    aria-hidden
                  />
                  <span>{line.replace(/^•\s*/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="mt-8 text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-apple-ink first:mt-0"
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}
