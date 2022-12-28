import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../assets/styles/uiKit/formGroup.scss';

const FormGroup = (props) => {
    const {
        title,
        description,
        error,
        errorText,
        inline = false,
        className,
        style,
    } = props;

    return (
        <div
            className={classNames(
                'form-group',
                { 'form-group--inline': inline },
                className,
            )}
            style={style}
        >
            {title &&
                <h2 className="form-group__title">{title}</h2>
            }
            {description &&
                <p className="form-group__description">{description}</p>
            }
            <div className='form-group__content'>
                {props.children}
            </div>
            {error &&
                <p className="form-group__error">{errorText}</p>
            }
        </div>
    );
};

FormGroup.propTypes = {
    inline: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default FormGroup;