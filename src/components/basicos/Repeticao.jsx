import React  from 'react'
import products from '../../data/products'

export default props => {

function getProdutosListItem(){
    return products.map(prod => {
        return <li key={prod.id}>
            {prod.id} - {prod.nome} - R$ {prod.preco}
            </li>
    })
}

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )

}