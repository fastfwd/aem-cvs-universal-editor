function MultiColumnContent({
  title = "",
  description = "",
  items = [],
  columns = 4,
  className = ""
}) {
  const totalItems = items.length;
  return /*#__PURE__*/React.createElement("div", {
    className: `container mx-auto py-10 ${className}`
  }, /*#__PURE__*/React.createElement("section", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-6xl font-serif text-primary mb-4"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "max-w-2xl mx-auto mb-4 lg:mb-10 text-primary"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} w-full max-w-7xl`
  }, items.map((item, index) => {
    const mdItemsPerRow = 2;
    const mdCurrentRow = Math.floor(index / mdItemsPerRow);
    const mdTotalRows = Math.ceil(totalItems / mdItemsPerRow);
    const isLastMdRow = mdCurrentRow === mdTotalRows - 1;
    const isLastInMdRow = (index + 1) % mdItemsPerRow === 0;
    const lgItemsPerRow = columns;
    const lgCurrentRow = Math.floor(index / lgItemsPerRow);
    const lgTotalRows = Math.ceil(totalItems / lgItemsPerRow);
    const isLastLgRow = lgCurrentRow === lgTotalRows - 1;
    const isLastInLgRow = (index + 1) % lgItemsPerRow === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: `flex flex-col justify-center text-center p-8
                                        border-b border-gray-200
                                        ${isLastMdRow ? 'md:border-b-0' : ''}
                                        ${!isLastInMdRow ? 'md:border-r' : ''}
                                        ${isLastLgRow ? 'lg:border-b-0' : ''}
                                        ${!isLastInLgRow ? 'lg:border-r' : ''}`
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-serif text-primary mb-4"
    }, item.title), /*#__PURE__*/React.createElement("p", {
      className: "text-primary text-sm"
    }, item.description));
  })))));
}
export default MultiColumnContent;