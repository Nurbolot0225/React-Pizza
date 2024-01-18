import Header from './components/Header.jsx'
import Sort from './components/Sort.jsx'
import Categories from './components/Categories.jsx'
import './scss/app.scss'
import PizzaBlock from './components/PizzaBlock/PizzaBlock.jsx'

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlock />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
