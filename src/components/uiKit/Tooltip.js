import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import ReactPortal from './ReactPortal';
import '../../assets/styles/uiKit/tooltip.css';

const Tooltip = (props) => {
    const {
        className,
        style,
        children,
        text,
        width,
        position = 'top',
    } = props;
    const [tooltipX, setTooltipX] = useState(0);
    const [tooltipY, setTooltipY] = useState(0);
    const [show, setShow] = useState(false);
    const [arrowX, setArrowX] = useState('100');
    const contentRef = useRef();
    const tooltipRef = useRef();
    const customClass = classNames('tooltip', className);
    const customArrowClass = classNames('tooltip__content--arrow', `tooltip__content--arrow--${position}`);

    const setHover = () => {
        setShow(true);
        const { left, top, width, height } = contentRef.current.getBoundingClientRect();
        setTimeout(() => {
            tooltipRef.current.style.display = 'block';
            let x = left - (tooltipRef.current.offsetWidth - width) / 2;

            if (x < 0) {
                setArrowX((left + (width / 2)) - left - 4);
                setTooltipX(left);
            } else if (x + tooltipRef.current.offsetWidth > document.body.clientWidth) {
                setTooltipX(document.body.clientWidth - tooltipRef.current.offsetWidth - 20);
                setArrowX((left + (width / 2)) - (document.body.clientWidth - tooltipRef.current.offsetWidth - 20) - 4);
            } else {
                setArrowX((left + (width / 2)) - x - 4);
                setTooltipX(x);
            }

            let y = top - tooltipRef.current.offsetHeight - height / 2;

            if (y < 0) {
                setTooltipY(top + height + 16);
            } else {
                setTooltipY(y - 6);
            }
        }, 0);

        document.addEventListener('scroll', setDefault);
    };

    const setDefault = () => {
        tooltipRef.current.style.display = 'none';
        setShow(false);
        document.removeEventListener('scroll', setDefault);
    };
    return (
        <div
            className={customClass}
            style={style}
            onMouseOver={setHover}
            ref={contentRef}
            onMouseLeave={setDefault}
        >
            {show && <ReactPortal to="body">
                <div ref={tooltipRef} style={{ top: `${tooltipY}px`, left: `${tooltipX}px`, width }} className="tooltip__content">
                    {text}
                    <div className={customArrowClass} style={{ left: arrowX + 'px' }}></div>
                </div>
            </ReactPortal>}
            {children}
        </div>
    );
};

export default Tooltip;