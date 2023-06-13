// interface is created to make parameter cleaner.
import React from "react";

// interface arenot Object Literals.
interface Props {
  pCode: number;
  //   adding ?: is optional chaining => implies it is optional.  if this is not applied all the argument value has to be satisfied.
  pName?: string;
  qty?: number;
}

//traditional way: const Product:React.FC<{pCode:number,pName:string,qty:number}>
const Product: React.FC<Props> = (props) => {
  return (
    <div>
      {props.pCode} - {props.pName} -{props.qty}
    </div>
  );
};

export default Product;
