import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

           <section classname="description">
            <p>
            Plan and organize your personal and corporate events with ease.
            Our Event Planner helps you create memorable events.   
            </p>
            <button classname="get-started-button">
                Get Started
                </button>
            </section>
        
            {/* Event categories section */}
            <section className="events_categories">
                 {/* Three event categories  */}
                <ul>
                    <h2>Personal Events</h2>
                    <li>Birthday Parties</li>
                    <li>Weddings</li>
                    <li>Anniversaries</li>
                    <li>Graduation Parties</li>
                </ul>

                <ul>
                    <h2>Corporate Events</h2>
                    <li>Meetings</li>
                    <li>Conferences</li>
                    <li>Team Building</li>
                    <li>Company Parties</li>
                </ul>

                <ul>
                    <h2>Special Events</h2>
                    <li>Family Gatherings</li>
                    <li>Community Events</li>
                    <li>Celebrations</li>
                    <li>School Events</li>
                </ul>
                </section>

                {/* Event planner features section */}
                    <section className="features">

                    <h1>Features</h1>

                    <ul>
                        <li>Easy Event Planning</li>
                        <li>Customizable Event Packages</li>
                        <li>Professional Event Management</li>
                        <li>Guest Management</li>
                        <li>Event Scheduling</li>
                    </ul>
                </section>
                
                  {/* Testimonials section */}
                    <section className="testimonials">
                    <h1>Testimonials</h1>

                    <div>
                        <h2>Amazing Event Planning Service!</h2>
                        <p>They helped us organize our event smoothly and professionally.</p>
                        <p>- Maria Santos</p>
                    </div>

                    {/* Second testimonial */}
                    <div>
                        <h2>Highly Recommended!</h2>
                        <p>The event planner made our celebration easy and memorable.</p>
                        <p>- Juan Dela Cruz</p>
                    </div>

                    {/* Third testimonial */}
                    <div>
                        <h2>Greate Services!</h2>
                        <p>Everything was well organized and the service was excellent.</p>
                        <p>- Ana Reyes</p>
                    </div>
                </section>

                {/* Contact section */}
                <section className="contact">
                        <h2>Contact Us</h2>

                         {/* contact form */}
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                </section>
                 </div>
         );
    };

export default EventPlanner;
        
