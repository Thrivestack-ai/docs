import React from 'react';
import intro from './intro.module.css';

export default function IntroDiagram(){
  return (
    <div className={intro.container}>
    <div className={`${intro.line} ${intro.line1}`}></div>
    <div className={`${intro.line} ${intro.line2}`}></div>
    
    <div className={`${intro.box} ${intro.box1}`}>
      <span className={intro.dot}>0</span>
      <div className={intro.content}>
      <h1>Set Up an Account</h1>
      <a href="/getting-started/self-serve/start-here" className={intro.learn_more}>Learn more</a>
      </div>
    </div>
    
    <div className={`${intro.box} ${intro.box2}`}>
      <span className={`${intro.dot} ${intro.get_started_color}`}>1</span>
      <div className={`${intro.capsule} ${intro.product_color}`}>
        <span>Product Engineering</span>
      </div>
       <div className={intro.content}>
      <h1>Build Self-Serve</h1>
      <a href="/getting-started/self-serve/overview" className={intro.learn_more}>Learn more</a>
         </div>
    </div>
    
    <div className={`${intro.box} ${intro.box3}`}>
      <span className={`${intro.dot} ${intro.get_started_color}`}>2</span>
      <div className={`${intro.capsule} ${intro.growth_color}`}>
        <span>Growth & Data Analytics</span>
      </div>
       <div className={intro.content}>
      <h1>Analyze Customer Journey</h1>
      <a href="/getting-started/analyze/instrumentation/overview" className={intro.learn_more}>Learn more</a>
         </div>
    </div>
  </div>
  );
}