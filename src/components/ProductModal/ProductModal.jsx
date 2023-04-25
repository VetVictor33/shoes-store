import './ProductModal.css'

export default function ProductModal({ product, handleModal }) {
    const { image, name, description, oldPrice, currentPrice } = product;
    return (
        <div className='ProductModal'>
            <div className='modal'>
                <button className='close-bt' onClick={handleModal}>X</button>
                <img className='product-img-modal' src={image} alt={name} />
                <p className='product-name'>{name}</p>
                <p className='product-description'>{description}</p>
                <div className='buy-div'>
                    <button onClick={handleModal}>Comprar</button>
                    <div className='prices'>
                        <div>
                            <p className="old-price">R${oldPrice.toFixed(2)}</p>
                            <p className="current-price">R${currentPrice.toFixed(2)}</p>
                        </div>
                        <p className="sale">6x R${(currentPrice / 6).toFixed(2)} sem juros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}