import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FAQ',
   
    Svg: require('@site/static/img/FAQ.svg').default,
    
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/my-website/docs/faq/">1.What is Max-Optics？</a>{"\n"}
        </div>
        {/* <a href="http://localhost:3000/my-website/docs/faq/">1.What is Max-Optics？</a>{"\n"} */}
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/my-website/docs/faq/faq1">2.How to install Max-Optics？</a>
        </div>
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/my-website/docs/faq/faq2">3.How to obtain a license？</a>
        </div>
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/my-website/docs/faq/faq3">4.How to Obtaining Technical Support?</a>
        </div>

      </>
    ),
    
    
  },
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/docs\tutorial\mode\fde">1.what is FDE?</a>
        </div>
  
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\fdtd">2.what is FDTD?</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\eme">3.what is EME?</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\material">4.how to set material?</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\t1">5.how to simulation?</a>
        </div>
       
        
      </>
    ),
  },
  
  {
    title: 'How do I',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/docs\tutorial\mode\fde">1.How to call up the command used？（待）</a>
        </div>
  
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\fdtd">2.做一个例子，从mo.sdk.doc到knowledge base的item?（待）</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\eme">3.How to creaat by GUI?（待）</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\material">4.How to create by SDK？（待）</a>
        </div>
        
       
        
      
      </>
    ),
  },

  {
    title: 'Example Library',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="http://localhost:3000/docs\tutorial\mode\fde">1.Photonic integrated circuit 待</a>
        </div>
  
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\fdtd">2.Grating待</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\eme">3.Metamaterial待</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\material">4.PD(by GUI)待</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\t1">5.PD(by SDK)待</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\mode\eme">6.MOD(by GUI)待</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\material">7.MOD(by SDK)待</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\t1">8.Lasers待</a>
        </div>
        
        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\t1">9.Optical scattering and far-field radiation待</a>
        </div>
       
      </>
    ),
  },

  {
    title: 'More',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
