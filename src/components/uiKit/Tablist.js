import React, { useRef } from 'react';
import '../../assets/styles/uiKit/tabs.scss';
import Tab from './Tab';

const Tablist = (props) => {
    const { active, setActive, children, type } = props;
    const headerRef = useRef();
    // check is children is dom
    const elements = children.filter(elem => typeof elem === 'object' && elem.hasOwnProperty('props'));

    const onTabClick = (e, tab) => {
        setActive(tab);
        headerRef.current.scrollLeft = e.target.offsetLeft;
    };
    return (
        <div className={type === 'button' ? 'tab' : 'line-tab'}>
            <div className={type === 'button' ? 'tab__header' : 'line-tab__header'} ref={headerRef}>
                {elements.map(elem => (
                    <Tab
                        id={elem.props.id}
                        key={elem.props.id}
                        active={active}
                        width={100 / elements.length}
                        setActive={setActive}
                        className={type === 'button' ? 'tab__button' : 'line-tab__button'}
                        onClick={(e) => onTabClick(e, elem.props.id)}
                    >{elem.props.label}</Tab>
                ))}
            </div>
            <div className={type === 'button' ? 'tab__content' : 'line-tab__content'}>
                {elements.map((child) => {
                    return child.props.id === active
                        ? child.props.children
                        : undefined;
                })}
            </div>
        </div>
    );
};

export default Tablist;