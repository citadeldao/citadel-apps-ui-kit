import React, { useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import BigNumber from 'bignumber.js';

import '../../assets/styles/uiKit/editAmount.scss';

const EditAmount = (props) => {
    const { data, setValue, value, text, saveValue, className = '' } = props
    const [edit,setEdit] = useState(false)
    const [edited,setEdited] = useState(false)
    const [errors,setErros] = useState(false)
    const minValue = props.minValue || 0.000001
    const maxValue = props.maxValue || 10000000
    const checkAmount = (val) => {
        if(+val > maxValue){
            setErros('max')
        }else if(+val < minValue && val.length){
            setErros('min')
        }else{
            setErros(false)
        }
        // eslint-disable-next-line 
        val = val.replace(/[^0-9\.]/g, '')
        if(val.split(".").length - 1 !== 1 && val[val.length-1] === '.') return
        if(value === 0 && val.length === 2 && val[1] !== '.' && val[1] === '0'){
            setValue(val[0]);
        }else if(val[0] === '0' && val[1] !== '.'){
            setValue(BigNumber(val).toFixed())
        } else {
            setValue(val);
        }
    }
    const editMode = () => {
        setEdit(false);
        setEdited(true);
        if(errors === 'min'){
            setValue(minValue);
        }else if(errors === 'max'){
            setValue(maxValue);
        }
        setErros(false)
        saveValue();
        setTimeout(() => {setEdited(false);}, 1000);
    }
    const handleEdit = () => {
        if(errors === 'min'){
            setValue(minValue);
        }else if(errors === 'max'){
            setValue(maxValue);
        }
        setErros(false)
        if(edit){
            setEdit(false); 
            saveValue()
        }else{
            if(!edited){
                setEdit(true)
            } 
            setEdited(false);
        }
    }
    return (
        <div className={`edit-amount-block-outer ${className}`} style={props.style}>
            <div className='edit-amount-block'>
                <div className='edit-amount-row'>
                    <p className='edit-amount-text'>
                        {text}
                    </p>
                    <div className='row'>
                        { edit ? 
                            <div className='edit-amount-input-container'>
                                <div className='token-input'>
                                    <input 
                                        value={value} 
                                        onBlur={() => editMode()} 
                                        onChange={(e) => checkAmount(e.target.value)} 
                                        onFocus={(e) =>  {if(+value === 0){ e.target.value=''}}}
                                        onWheel={(e) => e.target.blur()}
                                    />
                                    <p className='input-currency'>{data.code}</p>
                                </div>
                            </div> :
                            <div className='row'>
                                <h3 className='edit-card-balance'>{value}</h3>
                                <span className='edit-card-net'>{data.code}</span>
                            </div>
                        }
                        <div className='edit-amount-btn'>
                            <Button 
                            onClick={handleEdit} 
                            textColor='#5639E0'  
                            type='small'
                            bgColor='#C6D1FF'>{edit ? 'Save' : 'Edit'}</Button>
                        </div>
                    </div>
                
                </div>
            </div>
            {errors && 
            <div className='row' id='amount-error'>
                <div className='amount-error__circle'>
                    <Icon name='alarm-octagon' color='#EA2929' width='16px'/>
                </div>
                <p>{ errors === 'max' ? "The amount exceeds the maximum" : "The amount exceeds the minimum"}</p>
            </div>}
        </div>
    )
}

export default EditAmount