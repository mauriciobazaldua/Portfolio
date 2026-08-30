// Lightweight inline-markup formatter for case-study prose fields (body
// paragraphs, highlights, quotes, item bodies, the header subtitle) —
// content stays authored as plain strings in the content collection, but
// can mark up feature/product names and one accent-colored emphasis phrase
// without switching those fields over to raw HTML or a full markdown
// pipeline. Content is author-controlled (this repo's own case-study
// copy), not user input, so `set:html`-ing the result is safe.
//
// Supported markers, order matters (== before ** before single *, so a
// double-asterisk pair is never partially consumed by the single-* pass):
//   ==text==  -> <span class="text-emphasis">text</span>  (accent color,
//                for the one punchiest phrase in a line — beyond bold)
//   **text**  -> <strong>text</strong>                    (feature/product
//                names, so a reader can scan and land on what was built)
//   *text*    -> <em>text</em>                             (inline quoted
//                reactions set apart from surrounding prose)
export function formatInline(text: string): string {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped
    .replace(/==(.+?)==/g, '<span class="text-emphasis">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}
