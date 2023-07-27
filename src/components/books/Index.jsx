import { useEffect, useState } from 'react';
import Card from '../Card';
import Filter from '../filter/index';
import html from '../../database/books/html.json';
import css from '../../database/books/css.json';
import js from '../../database/books/javascript.json';
import react from '../../database/books/reactjs.json';

const Index = () => {
  const [filter, setFilter] = useState('html');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === 'html') {
      setData([...html]);
    } else if (filter === 'css') {
      setData([...css]);
    } else if (filter === 'js') {
      setData([...js]);
    } else {
      setData([...react]);
    }
  }, [filter]);

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  return (
    <div className='m-8 mt-32 lg:mt-8'>
      <Filter onStateChange={handleFilterChange} />
      <div className='flex flex-wrap gap-5'>
        {data.length > 0 ? (
          data.map((res, i) => (
            <Card
              key={res.title}
              title={res.title}
              link={res.link}
              description={res.description}
              i={i}
              img={res.img}
            />
          ))
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
