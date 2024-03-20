import './categories.style.css'
import { Link } from 'react-router-dom'


const Categories=()=>{
 const category = [{name: 'MENS'},{name: 'WOMENS'},{name: 'SUNGLASSES'},{name: 'PRESCRIPTION LENSE'},{name: 'FUNKY'},{name: 'STYLISH'},{name: 'UNISEX'}]
    

    return(<div className="product-container">
    {category.map((cat)=>{return(<div className='cat'><Link className='product-link'>{cat.name}</Link></div>)})}


    </div>) 

    
}











export default Categories;