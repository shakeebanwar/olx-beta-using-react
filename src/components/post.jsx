import React from 'react';
import AppRouter from '../config/router';
import './post.css';

function Post() {
  return (

    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <i id="arrow" className="fas fa-arrow-left" />
          <div className="container-fluid">
            <a id="olx" className="navbar-brand" href="#"><svg width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
                </path>
              </svg></a>
          </div>
        </nav>
        <h4>POST YOUR AD</h4>
        <div id="con1" className="container">
          <h5>CHOOSE A CATEGORY</h5>
          {/* Default dropright button */}
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-building" style={{fontSize: '15px'}} />
              &nbsp; Industries
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Sale: Houses &amp; Apartments
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Rent: Houses &amp; Apartments
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Lands &amp; Plots
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Rent: Shops &amp; Offices
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Sale: Shops &amp; Offices
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PG &amp; Guest Houses
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-car" style={{fontSize: '15px'}} />
              &nbsp; Cars
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cars
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Commercial &amp; Other Vehicles
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Spare Parts
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bed" style={{fontSize: '15px'}} />
              &nbsp; Furniture
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sofa &amp; Dining
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Beds &amp; Wardrobes
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home Decor &amp; Garden
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kids Furniture
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Household Items
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-briefcase" style={{fontSize: '15px'}} />
              &nbsp; Jobs
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Data entry &amp; Back office
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sales &amp; Marketing
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                BPO &amp; Telecaller
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Driver
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Office Assistent
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Delivery &amp; Collection
              </button>
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Teacher
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cook
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Receptionest &amp; Front offices
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Operator &amp; Technician
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                IT Engineer &amp; Developer
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hotel &amp; Travel Executive
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Accountant
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Designer
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Jobs
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-tv" style={{fontSize: '15px'}} />
              &nbsp; Electronics &amp; Appliances
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                TVs,Video-Audio
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kitchen &amp; Other Appliances
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Computers &amp; Laptops
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cameras &amp; Lenses
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Games &amp; Entertainment
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fridges
              </button>
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Computer Accessories
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hard Disks,Printers &amp; Monitors
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ACs
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Washing Machines
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-mobile-alt" style={{fontSize: '17px'}} />
              &nbsp; Mobiles
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mobile Phones
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Accessories
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tablets
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-motorcycle" style={{fontSize: '15px'}} />
              &nbsp; Bikes
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Motorcycles
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Scooters
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Spare Parts
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Bicycles
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-guitar" style={{fontSize: '15px'}} />
              &nbsp; Books,Sports &amp; Hobbies
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Books
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Gym &amp; Fitness
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Musical Instruments
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sports Equipments
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Hobbies
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-tshirt" style={{fontSize: '15px'}} />
              &nbsp; Fashion
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Men
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Women
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kids
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-cat" style={{fontSize: '15px'}} />
              &nbsp; Pets
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fishes &amp; Aquarium
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pet Foods &amp; Accessories
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dogs
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Pets
              </button>
            </div>
          </div>
          <br />
          <div id="drop" className="btn-group dropright">
            <button type="button" id="but" className="btn  dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-people-carry" style={{fontSize: '15px'}} />
              &nbsp; Services
              <i id="arrowright" className="fas fa-chevron-right" />
            </button>
            <div className="dropdown-menu dm">
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electronics &amp; Computer
              </button>
              <br />
              <button type="button" id="but" className="btn dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Education &amp; Classes
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Drivers &amp; Taxi
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Health &amp; Beauty
              </button>
              <br />
              <button type="button" id="but" className="btn  dropdown st" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Services
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <footer>
          <div id="con2" className="container-fluid">
            <div className="container">
              <p className="footerp1">Sitemap</p>
              <p className="footerp2">Free Classified in Pakistan . @2006-2020 OLX </p>
            </div>
          </div>
        </footer>
      </div>


  )
}

export default Post