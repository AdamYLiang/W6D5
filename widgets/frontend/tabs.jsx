import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tabId: 0, contents: { 0: "first", 1: "second", 2: "third" }};
  }

  changeTab(idx) {
    this.setState({ tabId: idx });
  }

  render () {

    const tabHeader = ["one", "two", "three"];
    const tabs = tabHeader.map( (header, idx) => {
    
      return (<p className="tabs" onClick={this.changeTab.bind(this, idx)} key={idx}>{header}</p>)
    })


    return (
    <>
      <section className="MainTabSection">
        <div className="TabHeaders">
          {tabs}
        </div>
        <div className="TabContent">
          {this.state.contents[this.state.tabId]}
        </div>
      </section>
    </>
    )
  
  }
}

export default Tabs;