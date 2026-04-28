export function simpleMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^---$/gm, "<hr class='my-4 border-slate-200'/>")
    .replace(/^\| (.+) \|$/gm, (line) => {
      const cells = line
        .slice(2, -2)
        .split(" | ")
        .map((c) => `<td>${c.trim()}</td>`)
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/gs, (rows) => {
      const allRows = rows.trim().split("\n");
      const [header, , ...body] = allRows;
      const headerCells = header.replace(/<td>/g, "<th>").replace(/<\/td>/g, "</th>");
      const bodyRows = body.map((r) => `<tr>${r.replace(/<tr>|<\/tr>/g, "")}</tr>`).join("");
      return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
    })
    .replace(/```[\s\S]*?```/g, (block) => {
      const code = block.replace(/```\w*\n?/, "").replace(/```$/, "");
      return `<pre>${code.trim()}</pre>`;
    })
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/gs, (items) => `<ul>${items}</ul>`)
    .split(/\n{2,}/)
    .map((para) => {
      if (/^<(h[23]|ul|table|pre|hr)/.test(para.trim())) return para;
      if (para.trim() === "") return "";
      return `<p>${para.trim()}</p>`;
    })
    .join("\n");
}
