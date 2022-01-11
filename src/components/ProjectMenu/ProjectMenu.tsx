import React, { useState } from 'react';
import { EPageName, pages } from '../../consts';
import UeurSelectNav from '../UeurSelectNav/UeurSelectNav';
import './style.css';


export function ProjectMenu() {
  const [pagePath, pagePathSet] = useState<EPageName>(EPageName.MAIN);

  function handler(ev: any) {
    const val: string = ev.target.value;
    pagePathSet(val as EPageName)
  }

  pages.options.forEach(op => op.callback = handler)

  return (
    <div className={'header'}>
      <div>{pagePath}</div>
      <UeurSelectNav data={pages}/>
    </div>
  )
}
