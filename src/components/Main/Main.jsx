import shoes from '../../data'
import Product from '../Product/Product'
import './Main.css'

export default function Main() {
    return (
        <main className='Main'>
            <div className='products'>
                {shoes.map(shoe => {
                    return (
                        <Product key={shoe.id} product={shoe} />
                    )
                })}
            </div>
        </main>
    )
}