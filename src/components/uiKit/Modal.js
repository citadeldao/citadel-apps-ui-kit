import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ReactPortal from './ReactPortal';
import IconButton from './IconButton';

import '../../assets/styles/uiKit/modal.scss';

const Modal = (props) => {
    const {
        show,
        title,
        description,
        borderRadius,
        panel = 'main',
        width,
        onClose = () => {},
        canClose = true
    } = props;
    return (
        <ReactPortal to={`.${panel}-panel`}>
            <div
                style={props.style}
                className={classNames('modal', { 'modal--active': show}, props.className)}
            >

                <div className="modal__body" style={{ width: width}}>
                    <div className="modal__header">
                        <div className="modal__title">
                            {title}
                        </div>
                        {canClose &&
                            <IconButton
                                icon="xmark-circle"
                                iconColor="#A8C3E1"
                                className="modal__close"
                                iconHoverColor="#173296"
                                onClick={onClose}
                            />
                        }
                    </div>
                    <div className="modal__content">
                        {description && <div className="modal__description">{description}</div>}
                        {props.children}
                    </div>
                </div>
                <div
                    className={'modal__backdrop'}
                    onClick={() => canClose && onClose}
                    style={{ borderRadius: borderRadius }}
                />
            </div>
        </ReactPortal>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    panel: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Modal;