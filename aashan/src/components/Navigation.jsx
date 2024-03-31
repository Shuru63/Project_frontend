import React, { useState } from 'react';
import './Nav_footer.css';
import Logo from '../project_material/logovecto.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // State to track visibility of dropdowns

   
    const [showMedia, setMedia] = useState(false)
    return (
        <div>
            <div className='navigation'>
                <div className='nav'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='mob-sub'>
                        <button className='sub-btn'>subscribe</button>
                    </div>
                    <button className="navbar-toggler " onClick={() => setMedia(!showMedia)} type="button" data-toggle="collapse" data-target="#navbarsExample09"
                      aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation" >{showMedia ?
                        (<span class="material-symbols-outlined">
                          dangerous
                        </span>) : (<span class="material-symbols-outlined">
                          menu
                        </span>)}
                    </button>
                    <div className='navlink'>
                        <ul className={showMedia?'nav-ul ':'nav-ul nav-hide'}>
                         <li className='navitem'onClick={()=> setMedia(!showMedia)}>
                           <Link to='/' >     Home</Link>
                            </li>
                            <li className='navitem' onClick={()=> setMedia(!showMedia)}>
                                About
                            </li>
                            <li className='navitem' onClick={()=> setMedia(!showMedia)}>
                                Services
                            </li>
                            <li className='navitem' onClick={()=> setMedia(!showMedia)}>
                                workout
                            </li>
                            <li className='navitem' onClick={()=> setMedia(!showMedia)}>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className='sub'>
                     <Link to='/register'> <button className='sub-btn'>subscribe</button></Link>  
                    </div>
                    <div className='search'>
                        <div className='search-bar'>
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
