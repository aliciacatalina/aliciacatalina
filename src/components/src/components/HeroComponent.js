'use strict';

import React from 'react';
require('styles/src/components/Hero.scss');

class HeroComponent extends React.Component {
  render() {
    return (
      <div className="l-hero">
        <section className="l-hero__section m-name">
          <h1>My name is <span className="l-hero__highlight">{this.props.data.hero.name}</span></h1>
        </section>
        <section className="l-hero__section m-description">
          <h1>{this.props.data.hero.description}</h1>
        </section>
        <section className="l-hero__section m-passion">
          <h1>{this.props.data.hero.passion}</h1>
        </section>
        <section className="l-hero__section m-mexico">
          <h1>{this.props.data.hero.mexico}</h1>
        </section>
        <section className="l-hero__section m-copenhagen">
          <h1>{this.props.data.hero.copenhagen}</h1>
        </section>
        <section className="l-hero__section m-contact">
          <h1>{this.props.data.hero.contact.text}</h1>
          <a href={'mailto:' + this.props.data.hero.contact.email}><div className="m-contact__item m-contact__email"></div></a>
          <a href={'http://twitter.com/' + this.props.data.hero.contact.twitter} target="_blank"><div className="m-contact__item m-contact__twitter"></div></a>
          <a href={'http://instagram.com/' + this.props.data.hero.contact.instagram} target="_blank"><div className="m-contact__item m-contact__instagram"></div></a>
        </section>
      </div>

    );
  }
}



HeroComponent.displayName = 'SrcComponentsHeroComponent';

export default HeroComponent;
