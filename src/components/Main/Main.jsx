import shoes from '../../data'
import './Main.css'

export default function Main() {
    return (
        <main className='Main'>
            <div className='products'>
                {shoes.map(shoe => {
                    console.log(shoe)
                    return (
                        <h1 key={shoe.id}>{shoe.name}</h1>
                    )
                })}
            </div>
        </main>
    )
}