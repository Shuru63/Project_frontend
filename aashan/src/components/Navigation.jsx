import React, { useState } from 'react';
import './Nav_footer.css';
import Logo from '../project_material/logovecto.png';

const Navigation = () => {
    // State to track visibility of dropdowns
    const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
   
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
                    <div className='nav-link'>
                        <ul className={showMedia?'nav-ul ':'nav-ul nav-hide'}>
                            <li className='nav-item'onClick={()=> setMedia(!showMedia)}>
                                Home
                            </li>
                            <li className='nav-item' onClick={()=> setMedia(!showMedia)}>
                                About
                            </li>
                            <li className='nav-item' onClick={() => setServicesDropdownVisible(!servicesDropdownVisible)}>
                                <div className=''> Services <span className="material-symbols-outlined">
                                    {servicesDropdownVisible ? "expand_less" : "expand_more"}
                                </span>
                                {servicesDropdownVisible && (
                                    <ul className='drop-down'>
                                        <li className='drop-item' onClick={()=> setMedia(!showMedia)}>
                                            Services 1
                                        </li>
                                        <li className='drop-item' onClick={()=> setMedia(!showMedia)}>
                                            Services 2
                                        </li>
                                    </ul>
                                )}
                                </div> 
                            </li>
                            <li className='nav-item' onClick={()=> setMedia(!showMedia)}>
                                workout
                            </li>
                            <li className='nav-item' onClick={()=> setMedia(!showMedia)}>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className='sub'>
                        <button className='sub-btn'>subscribe</button>
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
