import Giscus from "./Giscus";
import markdownStyles from "./markdown-styles.module.css";
import TableOfContent from "./tableContent";

type Props = {
  content: string;
};

const extractHeadings = (content: string) => {
  const headings = [];
  const lines = content.split("\n");

  lines.forEach((line: string) => {
    const regEx = /<h[1-6]>(.*?)<\/h[1-6]>/;
    const match = line.match(regEx); // Match headings

    if (match) {
      const level = match[1].length; // Heading level
      headings.push({ level, text: line.replace(regEx, "$1").trim() });
    }
  });

  return headings;
};

// Example function to render Markdown with IDs for headings
const renderMarkdownWithIds = (markdownContent: string) => {
  const headingRegex = /<h([1-6])>(.*?)<\/h[1-6]>/g;

  return markdownContent.replace(
    headingRegex,
    (_, level: string, text: string) => {
      return `<h${level} id="${text}">${text}</h${level}>`;
    }
  );
};

const PostBody = ({ content }: Props) => {
  const _headings = extractHeadings(content);
  const _contentWithIds = renderMarkdownWithIds(content);

  return (
    <>
      <TableOfContent headings={_headings} />
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: _contentWithIds }}
        />
        <Giscus />
      </div>
    </>
  );
};

export default PostBody;
