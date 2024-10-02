const TableOfContents = ({ headings }) => {
  return (
    <nav className="table-of-contents">
      <ul>
        {headings.map((heading: { text: string }, index: number) => (
          // style={{ marginLeft: `${heading.level - 1}em` }}
          <li key={index}>
            <a href={`#${heading.text}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default TableOfContents;
