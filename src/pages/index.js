import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import feature from '../assets/images/feature.jpg';

import { graphql } from 'gatsby';

const sections = [
  { id: 'projects', name: 'Projects', icon: 'fa-th' },
  { id: 'follows', name: 'Follows', icon: 'fa-th' },
  { id: 'resume', name: 'Resume', icon: 'fa-th' },
];

export const query = graphql`
  query OtherQuery {
    allStrapiProject(sort: {fields: [priority], order: DESC}) {
      nodes {
        url
        title
        image
        description
      }
    }
    allStrapiFollow(sort: {fields: [priority], order: DESC}) {
      nodes {
        url
        title
        image
        description
      }
    }
    allStrapiLink(sort: {fields: [priority], order: DESC}) {
      nodes {
        url
        name
        icon
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SideBar
      sections={sections}
      links={data.allStrapiLink.nodes}
    />

    <div id="main">

      <section id="projects" className="two">
        <div className="container">
          <header>
            <h2>Projects</h2>
            <p>I am Shao, software engineer, agile and versitile.</p>
          </header>
          <div className="row">
            {data.allStrapiProject.nodes.map(p => {
              const image = p.image || feature;
              return (
                <div key={p.url} className="col-4 col-12-mobile">
                  <article className="item">
                    <a href={p.url} className="image fit">
                      <img src={image} alt={p.description} />
                    </a>
                    <header>
                      <h3>{p.title}</h3>
                    </header>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="follows" className="three">
        <div className="container">
          <header>
            <h2>Follows</h2>
            <p>I care about tech and other stuff.</p>
          </header>
          <div className="row">
            {data.allStrapiFollow.nodes.map(p => {
              const image = p.image || feature;
              return (
                <div key={p.url} className="col-4 col-12-mobile">
                  <article className="item">
                    <a href={p.url} className="image fit">
                      <img src={image} alt={p.description} />
                    </a>
                    <header>
                      <h3>{p.title}</h3>
                    </header>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="resume" className="four">
        <div className="container">
          <header>
            <h2>Resume</h2>
          </header>
          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://shaoqingtan.com/download/resume" className="image fit">
                  <img src={feature} alt="" />
                </a>
                <header>
                  <h3>Download from external link</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter/>
  </Layout>
);

export default IndexPage;
