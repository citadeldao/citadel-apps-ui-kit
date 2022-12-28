import React, {useState} from 'react'
import SelectedCard from '../uiKit/SelectedCard'
import CoinIcon from '../uiKit/CoinIcon'
import '../../assets/styles/panels/selectedCardPanel.css'

const SelectedCards = () => {
    const [radio, setRadio] = useState('')

    const radioChangeHandler = (e) => {
        setRadio(e.target.value)
    }

    return (
        <div className='selected-cards-panel'>
            <SelectedCard 
                label="A day" 
                amount="177.67" 
                amountColor="#3A5EE6" 
                bgColor="#F4F6FF" 
                id='day'  
                changed={(e) => radioChangeHandler(e)} 
                value='day' 
                isSelected={radio === 'day'}
                selectedColor="#F1EEFF"
                borderColor="#7C63F5"
            />
            <SelectedCard 
                label="7 days" 
                amount="210.99" 
                amountColor="#3A5EE6" 
                bgColor="#F4F6FF" 
                id='7day'
                changed={(e) => radioChangeHandler(e)} 
                value='7day' 
                isSelected={radio === '7day'}
                selectedColor="#F1EEFF"
                borderColor="#7C63F5"
            />
            <SelectedCard 
                label="14 days" 
                amount="222.09" 
                amountColor="#3A5EE6" 
                bgColor="#E4F3F5" 
                id='14day' 
                deadline="14" 
                icon={<CoinIcon icon='osmosis' color='#5639E0' size='small'/>}
                changed={(e) => radioChangeHandler(e)} 
                value='14day' 
                isSelected={radio === '14day'}
                selectedColor="#B7F6FF"
                borderColor="#00BFDB"
            />
        </div>
    )
}

export default SelectedCards