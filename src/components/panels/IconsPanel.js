import React, { useState } from 'react';
import { copyToClipboard } from '../helpers/copyToClipboard';
import Icon from '../uiKit/Icon';

import iconList from '../../assets/icons.json';
import '../../assets/styles/panels/iconsPanel.css';
import Input from '../uiKit/Input';

const IconsPanel = () => {
    const [query, setQuery] = useState('');

    const iconsCount = iconList.length;
    const filteredIconsPaths = iconList.filter(path => path.includes(query));

    return (
        <div className='icons-panel'>
            <h2>Icons</h2>

            <Input
                type="search"
                textColor='#59779A'
                value={query}
                placeholder={`Search ${iconsCount} icons...`}
                onChange={setQuery}
                style={{ marginBottom: 24 }}
            />
            <div className='icons-container'>
                {filteredIconsPaths.map((path) => (
                    <div
                        key={path}
                        className='icons-container__item'
                        title="Click to copy to clipboard"
                        onClick={() => copyToClipboard(path)}
                    >
                        <Icon name={path}/>
                        <p>{path}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconsPanel;