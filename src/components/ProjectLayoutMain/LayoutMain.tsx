import React from 'react';
import './style.css';
import { ProjectMenu } from '../ProjectMenu/ProjectMenu';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { EPageName, pages } from '../../consts';
import NxcaPage from '../../pages/NxcaPage/NxcaPage';
import { MvroPage } from '../../pages/MvroPage/MvroPage';

function fnPath(pageName: string) {
  return pages.options.find(el => el.value === pageName)?.subValue || ''
}

function LayoutMain() {
  return (
    <div className="main">
      <ProjectMenu/>
      <div className={'body'}>
        {/* routes */}
        <Switch>
          <Route exact path={fnPath(EPageName.MAIN)}>
            <div>Главная</div>
          </Route>
          <Route exact path={fnPath(EPageName.NXCA)}>
            <NxcaPage/>
          </Route>
          <Route exact path={fnPath(EPageName.MVRO)}>
            <MvroPage/>
          </Route>
          <Redirect to={fnPath(EPageName.MAIN) || '/'}/>
        </Switch>
      </div>
    </div>
  )
}

export default LayoutMain;
