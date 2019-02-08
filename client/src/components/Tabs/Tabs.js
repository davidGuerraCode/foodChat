import React, { Component } from 'react';
import style from './Tabs.module.css';

class Tabs extends Component {
  componentDidMount = () => {};

  routeHandler = event => {
    const url = event.target.dataset.path;

    this.props.routeHandler(url);
  };

  render() {
    const { tabs } = this.props;
    const tabsName = tabs.map((tab, index) => (
      <p key={index} className={style['tab']} onClick={this.routeHandler} data-path={tab.path}>
        {tab.name}
      </p>
    ));

    return <div className={style['tabs-container']}>{tabsName}</div>;
  }
}

export default Tabs;
