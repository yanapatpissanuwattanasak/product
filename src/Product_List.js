import Product_Card from "./Product_Card"
import { products } from "./Product"
function Product_List(){
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width : '100%',
            flexwrap : 'wrap',
        }}>
        <List_product product = {products} />
        
    </div> 
    )
}
export  function List_product(props){
    const products =  props.product
    console.log(products)
    const list_products = products.map((item) => {
        
        // console.log(title,discription,image)
        return (
            <div style={{width : '450px', padding:'10px'}}>
                <Product_Card products = {item}/>
            </div>
               
        )
    }
    

    )
    console.log(list_products)
    return <div style={{
        display: 'flex',
       
        width : '100%',
        flexwrap : 'wrap',
        }}> {list_products} </div>
}
export default Product_List