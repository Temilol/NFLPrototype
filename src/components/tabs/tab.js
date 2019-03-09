import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Tab,Tabs} from '@material-ui/core';
import './tab.css'


// class NavWithTabs extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//        <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <Tab label="Item One" component={Link} to="/one" />
//             <Tab label="Item Two" component={Link} to="/two" />
//           </Tabs>
//         </AppBar>
//
//         <Switch>
//           <Route path="/one" component={PageShell(ItemOne)} />
//           <Route path="/two" component={PageShell(ItemTwo)} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//
//     );
//   }
// }

// export default NavWithTabs
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);
