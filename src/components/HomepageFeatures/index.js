import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


var base = 'my-website';
// const fullLink = useBaseUrl(link);

const FeatureList = [
  {
    title: 'FAQ',
   
    Svg: require('@site/static/img/FAQ.svg').default,
    
    description: (
      <>
         <hr />
        <div style={{ textAlign: 'center' }}>
          <a href="/my-website/docs/faq/">    1.What is Max-Optics? </a>
        </div>

        <hr />

        <div style={{ textAlign: 'center' }}>
          <a href="/my-website/docs/faq/faq1">    2.How to install Max-Optics?</a>
        </div>

        <hr />
        <div style={{ textAlign: 'center' }}>
          <a href="/my-website/docs/faq/faq1">test</a>
        </div>
        <hr />
       
      </>
    ),
    
    
  },
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
              <hr />

        <div style={{ textAlign: 'center' }}>
          <a href="/my-website/docs/tutorial/mode/fde">1.what is FDE?</a>
        </div>
        <hr />

  
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/fdtd">2.what is FDTD?</a>
        </div>
        <hr />

        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/eme">3.what is EME?</a>
        </div>
        <hr />


        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/material">4.how to set material?</a>
        </div>
        <hr />

        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/t1">5.how to simulation?</a>
        </div>
        <hr />

       
        
      </>
    ),
  },
  
  {
    title: 'How do I',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        
        <div style={{ textAlign: 'center' }}>
          <a href="/my-website/docs/tutorial/mode/fde">1.如何调出所用命令？（待）</a>
        </div>
  
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/fdtd">2.做一个例子,从mo.sdk.doc到knowledge base的item?（待）</a>
        </div>
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/eme">3.用GUI创建?（待）</a>
        </div>

        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/material">4.用SDK创建?（待）</a>
        </div>
        
       
        
      
      </>
    ),
  },

  {
    title: 'Example Library',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <div style={{ textAlign: 'center' }}>
          <a href="/my-website/docs/category/pic">1.PIC</a>
        </div>
  
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/fdtd">2.Grating</a>
        </div>
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/eme">3.Metamaterial</a>
        </div>

        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/material">4.PD(by GUI)</a>
        </div>
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/t1">5.PD(by SDK)</a>
        </div>
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/mode/eme">6.MOD(by GUI)</a>
        </div>

        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/material">7.MOD(by SDK)</a>
        </div>
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/t1">8.Lasers</a>
        </div>
        
        <div style={{ textAlign: 'center' }}>
        <a href="/my-website/docs/tutorial/t1">9.Optical scattering and far-field radiation</a>
        </div>
       
      </>
    ),
  },

  {
    title: 'More',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      {/* <u>This text is underlined.</u> 添加下划线 */}
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4 ')}>
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
