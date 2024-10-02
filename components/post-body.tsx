import Giscus from "./Giscus";
import markdownStyles from "./markdown-styles.module.css";
import TableOfContent from "./tableContent";

type Props = {
  content: string;
};

function extractHeadings(content: string) {
  const headings = [];
  const lines = content.split("\n");

  lines.forEach((line) => {
    const match = line.match(/<h([1-6])>(.*?)<\/h[1-6]>/); // Match headings
    const id = createId(line);

    const regex = /h1(.*?)h1/;

    if (match) {
      const level = match[1].length; // Heading level
      headings.push({ level, text: id.replace(regex, "$1").trim() });
    }
  });

  return headings;
}

// Function to create an ID from heading text
const createId = (text: string) => {
  return text.replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

// Example function to render Markdown with IDs for headings
const renderMarkdownWithIds = (markdownContent: string) => {
  const headingRegex = /<h([1-6])>(.*?)<\/h[1-6]>/g;

  return markdownContent.replace(headingRegex, (match, level, text) => {
    const id = createId(text);
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
};

const PostBody = ({ content }: Props) => {
  const _headings = extractHeadings(content);
  const _contentWithIds = renderMarkdownWithIds(content);

  console.log(_contentWithIds, "_contentWithIds");
  return (
    <>
      <TableOfContent headings={_headings} />
      <main className="flex">
        <div className="max-w-2xl mx-auto">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: _contentWithIds }}
          />
        </div>
      </main>
      <Giscus />
    </>
  );
};

export default PostBody;
