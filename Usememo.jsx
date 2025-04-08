import React, { useState, useMemo } from 'react';

const FilteredListComponent = ({ items, filter }) => {
    console.time('test')
    const filteredItems = useMemo(() => {
        console.log('Filtering items...');
        return items.filter(item => item.includes(filter));
    }, [items, filter]);
    console.timeEnd('test')
    return (
        <ul>
            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

const UseMemo = () => {
    const [filter, setFilter] = useState('');
    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter items..."
            />
            <FilteredListComponent items={items} filter={filter} />
        </div>
    );
};

export default UseMemo;
