import React from 'react';
import '../App.css';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Progress
} from 'reactstrap';
import classnames from 'classnames';
import { useAuth0 } from "../react-auth0-spa";
import GoalList from './GoalList';
import Dashboard from './Dashboard';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="tab-div">
      <Nav vertical>
      <p>Menu</p>
      
        <NavItem>
          <NavLink className={classnames({
            active: activeLink === '1'
          })}
            onClick={() => {
              toggle('1');
            }}>
              Dashboard 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink                         
            className={classnames({
            active: activeTab === '2'
            })}
            onClick={() => {
            toggle('2');
            }}>
            Goals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink                         
          className={classnames({
          active: activeTab === '3'
          })}
          onClick={() => {
          toggle('3');
          }}>
          Social
        </NavLink>
        </NavItem>
        </Nav>
    </div>
  );
}

export default Example;