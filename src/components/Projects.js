import React, {useEffect} from 'react';
import '../css/Projects.css';

export default function Projects() {

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f2';
  }, []);

  return (
    <div id="soon">
      <h1>Coming Soon!</h1>
    </div>
    
  );
}
