import { useEffect, useState } from 'react'
import Categories from '../components/Categories.jsx'
import Sort from '../components/Sort.jsx'
import Skeleton from '../components/PizzaBlock/Skeleton.jsx'
import PizzaBlock from '../components/PizzaBlock/index.jsx'
import NotFound from './NotFound.jsx'

const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({
        name: 'популярности (DESC)',
        sortProperty: 'rating'
    })

    // const uri = 'https://65aba029fcd1c9dcffc6b2be.mockapi.io/items'
    // const setParams = (args) => {
    //     let params = ''
    //     args.forEach((item) => {
    //         if (item.value === 0) {
    //             return
    //         }
    //         params += `?${item.name}=${item.value}`
    //     })
    //     return params
    // }

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    useEffect( () => {
        async function fetchData() {
            try {
                // eslint-disable-next-line no-inner-declarations
                async function fetchData(){
                    setIsLoading(true)
                    const getPizzas = await fetch(`https://65aba029fcd1c9dcffc6b2be.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
                    const response = await getPizzas.json()
                    setPizzas(response)
                    setIsLoading(false)
                }
                fetchData()
            } catch (e) {
                console.log(e.message)
            }
        }

        fetchData()
        window.scrollTo(0, 0)
    }, [categoryId, sortType])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onChangeSortType={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}

export default Home