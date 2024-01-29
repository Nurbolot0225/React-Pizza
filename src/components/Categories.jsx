import { useState } from 'react'

const Categories = ({ value, onChangeCategory }) => {
    const categoryTitle = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const addCategory = (index) => {
        onChangeCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                {categoryTitle.map((item, index) => (
                    <li key={index} onClick={() => addCategory(index)} className={value === index ? 'active' : ''}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories