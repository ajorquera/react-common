export const MultipleComponentsTemplate = (Component: FC<any>, commonProps = {}) => ({ items }: any) => (
  <Flex flexWrap="wrap" gap={20} >
    {items?.map((item, index) => (
      <Component {...commonProps} key={index} {...item} />
    ))}
  </Flex>
)