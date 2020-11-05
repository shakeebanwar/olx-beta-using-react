import React from 'react';
import sliderPic from '../images/slider.jpg'
import camera1 from '../images/camera1.jpg'
import camera2 from '../images/camera2.jpg'
import headphone1 from '../images/headphone1.jpg'
import headphone2 from '../images/headphone2.jpg'
import slider2 from '../images/slider2.jpg'
import Header from "./header"
import Footer from "./footer"

function HomePage() {

  return (
   

    <div className="home-page">
       <Header/>

      <img className="slider" src={slider2} alt="" />

      <br />
      <br />
      <div className="container">

        <h4>Fresh recommendations</h4>
     

        <div>
         
          <div className="shell">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={camera1} alt="Product" className="img-responsive" />
                    </div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 2,38,0000</h3>
                      </div>

                      <div className="card-footer">
                       Handy Camera Hd
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={headphone1} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>RS 5,0000</h3>
                      </div>

                      <div className="card-footer">
                    Sony Headphone
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={camera2} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 10,0000</h3>
                      </div>

                      <div className="card-footer">
                       Canon Camera
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={headphone2} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 20,0000</h3>
                      </div>

                      <div className="card-footer">
                        
                        
                        New Headphone

                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>




        <div>
         
          <div className="shell">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={camera1} alt="Product" className="img-responsive" />
                    </div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 2,38,0000</h3>
                      </div>

                      <div className="card-footer">
                       Handy Camera Hd
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={headphone1} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>RS 5,0000</h3>
                      </div>

                      <div className="card-footer">
                    Sony Headphone
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={camera2} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 10,0000</h3>
                      </div>

                      <div className="card-footer">
                       Canon Camera
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={headphone2} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 20,0000</h3>
                      </div>

                      <div className="card-footer">
                        
                        
                        New Headphone

                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>


        <div>
         
          <div className="shell">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={camera1} alt="Product" className="img-responsive" />
                    </div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 2,38,0000</h3>
                      </div>

                      <div className="card-footer">
                       Handy Camera Hd
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={headphone1} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>RS 5,0000</h3>
                      </div>

                      <div className="card-footer">
                    Sony Headphone
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={camera2} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 10,0000</h3>
                      </div>

                      <div className="card-footer">
                       Canon Camera
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="heartsvg">

                      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                    </div>
                    <div className="wsk-cp-img">
                      <br />
                      <img src={headphone2} alt="Product" className="img-responsive" /></div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span className="featured">Featured</span>
                      </div>
                      <div className="title-product">
                        <h3>Rs 20,0000</h3>
                      </div>

                      <div className="card-footer">
                        
                        
                        New Headphone

                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>

      <Footer/>
   
    </div>
    





  )
}

export default HomePage