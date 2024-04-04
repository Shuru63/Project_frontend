import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Usernav from '../components/userdashboard/Usernav'
import user from '../project_material/user.jpg';
import food1 from '../project_material/food1.jpeg';
import food2 from '../project_material/food2.jpeg';
import food3 from '../project_material/food3.jpeg';
import trianer from '../project_material/trainer.jpeg';
import trianer1 from '../project_material/trainer2.jpeg';
import './useradmin.css'
import CanvasJSReact from '@canvasjs/react-charts';
import { useState } from 'react'
const UserAdmin = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Activity"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 71 },
        { x: 60, y: 68 },
        { x: 70, y: 38 },
        { x: 80, y: 92, indexLabel: "Highest" },
        { x: 90, y: 54 },
        { x: 100, y: 60 },
        { x: 110, y: 21 },
        { x: 120, y: 49 },
        { x: 130, y: 36 }
      ]
    }]
  }
  return (
    <div>

      <div className='user-admin'>
        <div className='user-cover'>
          <Usernav toggleSidebar={toggleSidebar} />
          <div className='all-dash'>
            <div className={isNavbarOpen ? 'dash-cover-open' : 'dash-cover'}>
              <div className='all-content'>
                <div className='heart-card'>
                  <div className='user-card'>
                    <span class="material-symbols-outlined">
                      relax
                    </span>
                    <h6>110</h6>
                    <p>Heart-rate</p>
                  </div>
                  <div className='user-card'>
                    <span class="material-symbols-outlined">
                      local_fire_department
                    </span>
                    <h6>65</h6>
                    <p>calories-burn</p>
                  </div>
                  <div className='user-card'>
                    <span class="material-symbols-outlined">
                      directions_run
                    </span>
                    <h6>2.5km</h6>
                    <p>Running</p>
                  </div>
                  <div className='user-card'>
                    <span class="material-symbols-outlined">
                      brightness_4
                    </span>
                    <h6>8 hour</h6>
                    <p>Seelping</p>
                  </div>
                </div>
                <div className='chart'>
                  <div className='bar-chart'>
                    <CanvasJSChart options={options} className="pie-chart" />
                  </div>

                </div>

                <div className='food'>
                  <div className='food-head'>
                    <h5>Recommonded Food</h5>
                  </div>
                  <div className='food-cover'>
                    <div className='food-card'>
                      <div className='food-img'>
                        <img src={food1} alt="" />
                      </div>
                      <div className='food-name'>
                        <h6>Fresh Veggies</h6>
                        <p>7 days</p>
                        <p>Only dinner time</p>
                      </div>
                    </div>
                    <div className='food-card'>
                      <div className='food-img'>
                        <img src={food1} alt="" />
                      </div>
                      <div className='food-name'>
                        <h6>Fresh Fruits</h6>
                        <p>7 days</p>
                        <p>Morning time</p>
                      </div>
                    </div>
                    <div className='food-card'>
                      <div className='food-img'>
                        <img src={food1} alt="" />
                      </div>
                      <div className='food-name'>
                        <h6>Fresh Fruits jucies</h6>
                        <p>7 days</p>
                        <p>After non-time</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='last-user'>
                  <div className='trainer'>
                    <h5>Popular Trainer</h5>
                    <div className='trainer-cover'>
                      <div className='trainer-card'>
                        <img src={trianer} alt="" />
                        <h6>Rishu mehta</h6>
                        <p>Gym expert</p>
                      </div>
                      <div className='trainer-card'>
                        <img src={trianer1} alt="" />
                        <h6>ShivamAcharya</h6>
                        <p>Gym expert</p>
                      </div>
                    </div>
                  </div>
                  
                    <div className='boost'>
                      <h5>Output</h5>
                      <div className='two-output'>
                        <span class="material-symbols-outlined">
                          relax
                        </span>
                        <h6>110</h6>
                        <p>Heart-rate</p>
                      </div>
                      <div className='two-output'>
                        
                        <span class="material-symbols-outlined">
                          relax
                        </span>
                        <h6>110</h6>
                        <p>Heart-rate</p>
                      </div>
                    </div>
                  </div>
                </div>
             
              <div className='profile'>
                <div className='portfolio-cover'>
                  <div className='top-port'>
                    <p>Profile</p>
                    <span class="material-symbols-outlined">
                      more_horiz
                    </span>
                  </div>
                  <div className='profile-description'>
                    <div className='user-img'>
                      <img src={user} alt="picture" />
                    </div>
                    <div className='user-name'>
                      <h6>Shubham</h6>
                      <p>Shubham@gmauil.com</p>
                    </div>
                    <div className='weight'>

                      <div className='weight1'>
                        <h6>65kg</h6>
                        <p>Weight</p>
                      </div>
                      <div className='weight1'>
                        <h6>178cm</h6>
                        <p>Height</p>
                      </div>
                      <div className='weight1'>
                        <h6>20</h6>
                        <p>age</p>
                      </div>
                    </div>
                    <div className='clender'>
                      <Calendar
                        onChange={onChange}
                        value={date}

                      />
                    </div>
                    <div className='shedule'>
                      <h6>Schedule</h6>
                      <div className='fitness'>
                        <div>
                          <p>Fitness</p>
                          <h6>Training Yoga class</h6>
                        </div>


                        <div>
                          <span class="material-symbols-outlined">
                            more_horiz
                          </span>
                          <p>22 march</p>
                        </div>
                      </div>
                      <div className='fitness'>
                        <div> <p>Fitness</p>
                          <h6>Training Yoga class</h6></div>


                        <div>
                          <span class="material-symbols-outlined">
                            more_horiz
                          </span>
                          <p>22 march</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAdmin
