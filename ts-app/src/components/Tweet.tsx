interface Props {
  pCode: number;
  pName?: string;
  qty?: number;
}
const Product: React.FC<Props> = (props) => {
  return (
    <div>
      {props.pCode} - {props.pName} -{props.qty}
    </div>
  );
};

export default Product;
