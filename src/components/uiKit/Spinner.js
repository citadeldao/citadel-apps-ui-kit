import React from "react"
import '../../assets/styles/uiKit/spinner.css'
import classNames from 'classnames';

const Spinner = ({ disabled }) => {
    return (
        <span className={classNames('spinner', { 'spinner--disabled': disabled })}>
            <span className="spinner-dot spinner-dot__1"></span>
            <span className="spinner-dot spinner-dot__2"></span>
            <span className="spinner-dot spinner-dot__3"></span>
        </span>
    )
}

export default Spinner
