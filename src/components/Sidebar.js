import React, { useState, Fragment } from 'react';
import DownloadPhotoIcon from '../components/DownloadPhotoIcon';
import { store } from '../store';
import { setInfo } from '../actions';

const Sidebar = (props) => {

    const[active, setActive] = useState(props);
    
    const dispatchAction = (e, val) => {
        const activeState = localStorage.setItem('active', val);
        setActive({ active: activeState });
        const active = document.querySelector('.active');
        if(active){
          active.classList.remove('active');
        }
        e.currentTarget.parentNode.classList.add('active');
        store.dispatch(setInfo(val))
      }
        return (
            <Fragment>
                 <nav className="vertical" data-aos="fade-right">
                    <ul className="photo-list">
                    <h4 className="photo-list-header">My Photos <i className="far fa-images"></i></h4>
                        <li className={props.active === 'one' ? 'active' : ''}><a className="nav-link" href="#one" onClick={(e) => dispatchAction(e, 'one')}>Bonita Misty Morning</a></li>
                        <li className={props.active === 'two' ? 'active' : ''}><a className="nav-link" href="#two" onClick={(e) => dispatchAction(e, 'two')}>Bonita Early Morning</a></li>
                        <li className={props.active === 'three' ? 'active' : ''}><a className="nav-link" href="#three" onClick={(e) => dispatchAction(e, 'three')}>Bonita Sun</a></li>
                        <li className={props.active === 'four' ? 'active' : ''}><a className="nav-link" href="#four" onClick={(e) => dispatchAction(e, 'four')}>Bonita Reflection</a></li>
                        <li className={props.active === 'five' ? 'active' : ''}><a className="nav-link" href="#five" onClick={(e) => dispatchAction(e, 'five')}>Bonita Trolly</a></li>
                        <li className={props.active === 'six' ? 'active' : ''}><a className="nav-link" href="#six" onClick={(e) => dispatchAction(e, 'six')}>Bonita Bridge</a></li>
                        <li className={props.active === 'seven' ? 'active' : ''}><a className="nav-link" href="#seven" onClick={(e) => dispatchAction(e, 'seven')}>Bonita Wonder</a></li>
                        <li className={props.active === 'eight' ? 'active' : ''}><a className="nav-link" href="#eight" onClick={(e) => dispatchAction(e, 'eight')}>Bonita Thoughts</a></li>
                        <li className={props.active === 'nine' ? 'active' : ''}><a className="nav-link" href="#nine" onClick={(e) => dispatchAction(e, 'nine')}>DJ Tech Set</a></li>
                        <li className={props.active === 'ten' ? 'active' : ''}><a className="nav-link" href="#ten" onClick={(e) => dispatchAction(e, 'ten')}>DJ Tech Set II</a></li>
                        <li className={props.active === 'eleven' ? 'active' : ''}><a className="nav-link" href="#eleven" onClick={(e) => dispatchAction(e, 'eleven')}>DJ Tech Set III</a></li>
                        <li className={props.active === 'twelve' ? 'active' : ''}><a className="nav-link" href="#twelve" onClick={(e) => dispatchAction(e, 'twelve')}>Loft Couple</a></li>
                    </ul>
                    <ul className="info-toggle-list">
                        <li><a href="#!" onClick={(e) => props.handleSideBarClick(e, 'Camera Info')}><i className="fas fa-info-circle"></i></a></li>
                        <li><a href="#!" onClick={(e) => props.handleSideBarClick(e, 'Comments')}><i className="fas fa-comments"></i></a></li>
                        <li><a href="#!" onClick={(e) => props.handleSideBarClick(e, 'Share')}><i className="fas fa-share-alt"></i></a></li>
                        <DownloadPhotoIcon
                            handlePhotoDownload={(e) => dispatchAction(e, 'photo')}
                        />
                    </ul>
                    </nav>
            </Fragment>
        ); 
}

export default Sidebar;
