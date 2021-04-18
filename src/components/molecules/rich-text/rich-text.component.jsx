const RichText = ({ document, className, mutedAnchor }) => {
  // const options = {
  //   renderMark: {
  //     [MARKS.BOLD]: (text) => <span className="font-semibold">{text}</span>,
  //   },
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (_, children) => (
  //       <p
  //         className={classNames(
  //           { "text-lg": !className },
  //           className,
  //           "text-gray-900 dark:text-gray-400 leading-8"
  //         )}
  //       >
  //         {children}
  //       </p>
  //     ),
  //     [INLINES.HYPERLINK]: (node) => (
  //       <Anchor muted={mutedAnchor} href={node.data.uri}>
  //         {node.content[0].value}
  //       </Anchor>
  //     ),
  //   },
  // }
  // return documentToReactComponents(document, options)
  return null;
};

export default RichText;
