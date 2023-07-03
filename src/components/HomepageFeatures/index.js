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
<<<<<<< HEAD
          <a href="http://localhost:3000/my-website/docs/faq/">1.What is Max-Optics？</a>
=======
          <a href="/my-website/docs/faq/">1.What is Max-Optics？</a>{"\n"}
>>>>>>> 2a47aeb13513501893b82eb1b66daab108d4282e
        </div>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq1">2.How to install Max-Optics？</a>
        </div>
<<<<<<< HEAD
        </>
=======
       
      </>
>>>>>>> 2a47aeb13513501893b82eb1b66daab108d4282e
    ),
    },
   
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="/docs/tutorial/mode/fde">1.what is FDE?</a>
        </div>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/mode/fdtd">2.what is FDTD?</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/mode/eme">3.what is EME?</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/material">4.how to set material?</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/t1">5.how to simulation?</a>
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
<<<<<<< HEAD
          <a href="http://localhost:3000/docs\tutorial\mode\fde">1.How to call up the command used？（待）</a>
=======
          <a href="/docs/tutorial/mode/fde">1.如何调出所用命令？（待）</a>
>>>>>>> 2a47aeb13513501893b82eb1b66daab108d4282e
        </div>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/mode/fdtd">2.做一个例子，从mo.sdk.doc到knowledge base的item?（待）</a>
        </div>
        <div style={{ textAlign: 'left' }}>
<<<<<<< HEAD
        <a href="http://localhost:3000/docs\tutorial\mode\eme">3.How to create by GUI?（待）</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="http://localhost:3000/docs\tutorial\material">4.How to create by SDK ？（待）</a>
=======
        <a href="/docs/tutorial/mode/eme">3.用GUI创建?（待）</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/material">4.用SDK创建？（待）</a>
>>>>>>> 2a47aeb13513501893b82eb1b66daab108d4282e
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
          <a href="/docs/tutorial/mode/fde">1.PIC</a>
        </div>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/mode/fdtd">2.Grating</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/mode/eme">3.Metamaterial</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/material">4.PD(by GUI)</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/t1">5.PD(by SDK)</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/mode/eme">6.MOD(by GUI)</a>
        </div>

        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/material">7.MOD(by SDK)</a>
        </div>
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/t1">8.Lasers</a>
        </div>
        
        <div style={{ textAlign: 'left' }}>
        <a href="/docs/tutorial/t1">9.Optical scattering and far-field radiation</a>
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
    <div className={clsx('col col--12')}>
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
