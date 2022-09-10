import React, {FC} from 'react'
import alert from './alert.svg'
import './app.css'

export const App: FC = () => {
  return (
    <div className='app'>
      <img src={alert} alt=""/>
      Hello world!
    </div>
  );
};
