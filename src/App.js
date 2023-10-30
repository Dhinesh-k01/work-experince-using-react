import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchItems = async () => {
    const response = await fetch(url);
    const fetchData = await response.json();
    setData(fetchData);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return (
      <section className='section-loading'>
        <h2>loading...</h2>
      </section>
    );
  }

  const { company, title, duties, dates } = data[value];
  return (
    <section className='section loading'>
      <div className='title'>
        <h2>Experince</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {data.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`job-btn ${index === value && 'active-btn'} `}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/*job infos */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );

  return (
    <div className='App'>
      <h2>Tabs</h2>
    </div>
  );
}

export default App;
