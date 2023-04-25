import './Product.css'

export default function Product({ product }) {
    const { image, name, description, oldPrice, currentPrice } = product;
    return (
        <div className='Product'>
            <img className='product-img' src={image} alt={name} />
            <p className='name'>{name}</p>
            <div className='prices'>
                <p className='old-price'>R${oldPrice.toFixed(2)}</p>
                <p className='current-price'>R${currentPrice.toFixed(2)}</p>
            </div>
            <p className='sale'><strong>6x R${(currentPrice / 6).toFixed(2)}</strong> sem juros</p>
        </div>
    )
}