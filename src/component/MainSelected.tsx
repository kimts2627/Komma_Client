import React from 'react';
import selected from '../modules/selected';
import plus from '../img/list-button.png'

interface SelectedProps {
  isListBarOpen: boolean;
  handleList: () => void;
}

const MainSelected: React.FC<SelectedProps> = ({ isListBarOpen, handleList }) => {

  return(
    <aside className={isListBarOpen ? 'selectedBar' : 'selectedBar hide'}>
      <div className={isListBarOpen ? 'selectedButton' : 'selectedButton hide'} onClick={handleList}>
        <img src={plus} alt='' />
      </div>
      <div className='selectedList'>

      </div>
    </aside>
  );
}

export const SingleList: React.FC = () => {

  return(
    <div></div>
  );
}

export default MainSelected
