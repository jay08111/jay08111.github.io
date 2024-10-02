const TableOfContents = ({ headings }) => {
  console.log(headings, "headings");
  return (
    <nav className="table-of-contents">
      <ul>
        {headings.map((heading, index: number) => (
          <li key={index} style={{ marginLeft: `${heading.level - 1}em` }}>
            <a href={`#${heading.text.replace(/\s+/g, "-")}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default TableOfContents;
