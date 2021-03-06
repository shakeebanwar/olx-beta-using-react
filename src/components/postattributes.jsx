import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useHistory } from "react-router";
import './post.css';
import firebase from '../config/firebase'




class Attributes extends Component {

    
    

    constructor() {
        super()
        this.state = {
            condition: "",
            conditionStatus : "",
            titlevalue: "",
            type : "",
            typestatus : "",
            descriptionvalue: "",
            price: "",
            state: "",
            file: "",
            file2: "",
            file3: "",
            file4: "",
            file5: "",
            file6: "",
            file7: "",
            file8: "",
            file9: "",
            file10: "",
            file11: "",
            file12: "",


        }


    }


    conditionState = (setclass)=>{



        this.setState({ condition: setclass ,conditionStatus : setclass })

      
        
        
    }
   

  typeState = (setclass)=>{
    

    this.setState({ type: setclass ,typestatus : setclass  })

    

  }









    saveImages = (e, imgno) => {



        console.log("file object is ", e.name)




        var ref = firebase.storage().ref().child(`images/${e.name}`).put(e)


        //get link uploaded image

        ref.on('state_changed', function (snapshot) {

        }, function (error) {

        }, () => {

            ref.snapshot.ref.getDownloadURL().then((downloadURL) => {

                if (imgno == 1) {


                    this.setState({
                        file: downloadURL
                    })
                    console.log("condition 1 is true", downloadURL)

                }

                else if (imgno == 2) {


                    this.setState({
                        file2: downloadURL
                    })

                    console.log("condition 2 is true", downloadURL)
                }

                else if (imgno == 3) {


                    this.setState({
                        file3: downloadURL
                    })

                    console.log("condition 3 is true", downloadURL)
                }



                else if (imgno == 4) {


                    this.setState({
                        file4: downloadURL
                    })

                    console.log("condition 4 is true", downloadURL)
                }


                else if (imgno == 5) {


                    this.setState({
                        file5: downloadURL
                    })

                    console.log("condition 5 is true", downloadURL)
                }

                else if (imgno == 6) {


                    this.setState({
                        file6: downloadURL
                    })

                    console.log("condition 6 is true", downloadURL)
                }


                else if (imgno == 7) {


                    this.setState({
                        file7: downloadURL
                    })

                    console.log("condition 7 is true", downloadURL)
                }


                else if (imgno == 8) {


                    this.setState({
                        file8: downloadURL
                    })

                    console.log("condition 8 is true", downloadURL)
                }

                else if (imgno == 9) {


                    this.setState({
                        file9: downloadURL
                    })

                    console.log("condition 9 is true", downloadURL)
                }


                else if (imgno == 10) {


                    this.setState({
                        file10: downloadURL
                    })

                    console.log("condition 10 is true", downloadURL)
                }

                else if (imgno == 11) {


                    this.setState({
                        file11: downloadURL
                    })

                    console.log("condition 11 is true", downloadURL)
                }

                else if (imgno == 12) {


                    this.setState({
                        file12: downloadURL
                    })

                    console.log("condition 12 is true", downloadURL)
                }

                console.log("my state is ", this.state)


            });
        });







    }




    postAdd = () => {

     
        let condition = this.state.condition;
        let titlevalue = this.state.titlevalue;
        let descriptionvalue = this.state.descriptionvalue;
        let price = this.state.price;
        let state = this.state.state;
        let type = this.state.type;

        firebase.database().ref('/').child("post").push({
            condition : condition,
            type : type,
            titlevalue : titlevalue,
            descriptionvalue : descriptionvalue,
            price : price,
            state : state,
            img1 : this.state.file,
            img2 : this.state.file2,
            img3 : this.state.file3,
            img4 : this.state.file4,
            img5 : this.state.file5,
            img6 : this.state.file6,
            img7 : this.state.file7,
            img8 : this.state.file8,
            img9 : this.state.file9,
            img10 : this.state.file10,
            img11 : this.state.file11,
            img12 : this.state.file12,


        })

        this.props.history.push('/')

        console.log("Successfully post")
        
    }

    render() {
        console.log("history",this.props.history)
        console.log("Condition is  ", this.state.condition)
        console.log("condition status is    ", this.state.conditionStatus)
        console.log("type is  ", this.state.type)
        console.log("type status is   ", this.state.typestatus)
        console.log("description is  ", this.state.descriptionvalue)
        console.log("price is  ", this.state.price)
        console.log("state is   ", this.state.state)
        console.log("file is   ", this.state.file)
        return (
            <div>


                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <i id="arrow" className="fas fa-arrow-left" onClick={()=>this.props.history.goBack()}  />
                    <div className="container-fluid" >
                        <a href = "#"  id="olx" className="navbar-brand" ><svg  width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                            <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
                            </path>
                        </svg></a>
                    </div>
                </nav>
                <h4>POST YOUR AD</h4>
                <div id="con1" className="container">
                    <h5 className="bold">SELECTED CATEGORY</h5>

                    <div className="headerline">


                    </div>

                    <br />
                    <div className="container">

                        <h5 className="bold">INCLUDE SOME DETAILS</h5>
                        <div className="container">
                            <label for="">Condition *</label>

                            <div className="rui-D-GoM">
                         

                               
                                {
                                    this.state.conditionStatus == "New" ? <button className="afterclickYHJnT" data-aut-id="opnew_used0" onClick={() => this.conditionState("New")}>New</button> :

                                    <button className="rui-YHJnT" data-aut-id="opnew_used0" onClick={() => this.conditionState("New")}>New</button>
                                }

                                {

                                    this.state.conditionStatus == "Used" ?  <button className="afterclickYHJnT" data-aut-id="opnew_used1" onClick= {() => this.conditionState("Used")}>Used</button
                                    > :  <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick= {() => this.conditionState("Used")}>Used</button
                                >
                                }
                            
                           
                                </div>
                        </div>
                    </div>


                    <br />


                    <div className="container">


                        <div className="container">
                            <label for="">Type *</label>

                            <div className="rui-D-GoM">

                                {

                                    this.state.typestatus == "Apple" ?  <button className="afterclickYHJnT" data-aut-id="opnew_used0" onClick={() => this.typeState("Apple")}>Apple</button> :

                                    <button className="rui-YHJnT" data-aut-id="opnew_used0" onClick={() => this.typeState("Apple")}>Apple</button>
                                }

                                {

                                    this.state.typestatus == "Dany Tabs" ? <button className="afterclickYHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Dany Tabs")}>Dany Tabs</button> : <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Dany Tabs")}>Dany Tabs</button>
                                }


                                {

                                    this.state.typestatus == "Q Tabs" ?    <button className="afterclickYHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Q Tabs")}>Q Tabs</button> :   <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Q Tabs")} >Q Tabs</button>
                                }
                               
                               {

                                   this.state.typestatus == "Samsung" ? <button className="afterclickYHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Samsung")}>Samsung</button> : <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Samsung")}>Samsung</button>
                               }
                                

                                {

                                    this.state.typestatus == "Other Tabs" ?   <button className="afterclickYHJnT" data-aut-id="opnew_used1" onClick={() => this.typeState("Other Tabs")}>Other Tabs</button> :  <button className="rui-YHJnT" data-aut-id="opnew_used1"  onClick={() => this.typeState("Other Tabs")}>Other Tabs</button>
                                }
                              
                                
                               
                            </div>
                        </div>
                    </div>

                    <br />


                    <div className="container">


                        <div className="container">
                            <label for="">Add title *</label>

                            <div className="rui-D-GoM">

                                <div className="titlebox">

                                    <input value={this.state.titlevalue} type="text" maxLength={70} minLength={5} onChange={(e) => this.setState({ titlevalue: e.target.value })} />


                                </div>
                                <span className="titleboxspan">
                                    A minimum length of 5 characters is required. Please edit the field. 0 / 70
                            </span>


                            </div>
                        </div>
                    </div>

                    <br />


                    <div className="container">


                        <div className="container">
                            <label for="">Description *</label>

                            <div className="rui-D-GoM">

                                <div className="description">

                                    <input type="text" maxLength={70} minLength={5} onChange={(e) => this.setState({ descriptionvalue: e.target.value })} />


                                </div>
                                <span className="titleboxspan">
                                    A minimum length of 20 characters is required. Please edit the field.0 / 4096
                             </span>


                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="headerline">


                    </div>

                    <br />

                    <div className="container">

                        <h5 className="bold">SET A PRICE</h5>

                        <div className="container">
                            <label for="">Price*</label>

                            <div className="rui-D-GoM">

                                <div className="pricetitlebox">
                                    Rs

                                {/* <div className = "pricetitleboxline">

                                </div> */}

                                    <input type="text" maxLength={70} minLength={5} onChange={(e) => this.setState({ price: e.target.value })} />


                                </div>

                                <span className="titleboxspan">
                                    This Field is Mandatory
                             </span>


                            </div>
                        </div>

                    </div>

                    <br />

                    <div className="headerline">


                    </div>


                    <div className="container">

                        <h5 className="bold">UPLOAD UP TO 12 PHOTOS</h5>


                        <div className="row">

                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image1">

                                        <input type="file" hidden id="image1" onChange={(e) => this.saveImages(e.target.files[0], 1)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>




                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image2">

                                        <input type="file" hidden id="image2" onChange={(e) => this.saveImages(e.target.files[0], 2)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image3">

                                        <input type="file" hidden id="image3" onChange={(e) => this.saveImages(e.target.files[0], 3)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">
                                    <label htmlFor="image4">

                                        <input type="file" hidden id="image4" onChange={(e) => this.saveImages(e.target.files[0], 4)} />


                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>
                        </div>


                        <div className="row">

                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image5">

                                        <input type="file" hidden id="image5" onChange={(e) => this.saveImages(e.target.files[0], 5)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image6">

                                        <input type="file" hidden id="image6" onChange={(e) => this.saveImages(e.target.files[0], 6)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image7">

                                        <input type="file" hidden id="image7" onChange={(e) => this.saveImages(e.target.files[0], 7)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image8">

                                        <input type="file" hidden id="image8" onChange={(e) => this.saveImages(e.target.files[0], 8)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>
                        </div>




                        <div className="row">

                            <div className="photos">


                                <button className="photobutton1">
                                    <label htmlFor="image9">

                                        <input type="file" hidden id="image9" onChange={(e) => this.saveImages(e.target.files[0], 9)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image10">

                                        <input type="file" hidden id="image10" onChange={(e) => this.saveImages(e.target.files[0], 10)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image11">

                                        <input type="file" hidden id="image11" onChange={(e) => this.saveImages(e.target.files[0], 11)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1" >

                                    <label htmlFor="image12">

                                        <input type="file" hidden id="image12" onChange={(e) => this.saveImages(e.target.files[0], 12)} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>
                        </div>







                    </div>

                    <br />

                    <div className="headerline">


                    </div>

                    <br />

                    <div className="container">

                        <h5 className="bold">Confirm Your Location</h5>
                        <div className="container">
                            <label for="">State *</label>

                            <div data-aut-id="locationBox" className="_16LoD"><span><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z" /></svg></span>

                                <input type="text" name="" id="" className="_1jABB" placeholder="Pakistan" />
                                <span class="dropdown">
                                    <button className="arrow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >


                                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                                    </button>


                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Kashmir" })} >Azad Kashmir</a>
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Balochistan" })} >Balochistan</a>
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Islamabad" })}>Islamabad</a>
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Khyber Pakhtunkhwa" })} >Khyber Pakhtunkhwa</a>
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Northern Areas" })} >Northern Areas</a>
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Punjab" })} >Punjab</a>
                                        <a className="dropdown-item" onClick={() => this.setState({ state: "Sindh" })} >Sindh</a>

                                    </div>
                                </span>
                            </div>
                            <span className="titleboxspan">
                                This Field is Mandatory
                             </span>


                        </div>





                    </div>

                    <br />

                    <div className="headerline">


                    </div>

                    <br />



                    <br />


                    <div className="container">
                        <button className="rui-3sH3b rui-2yJ_A rui-1zK8h _3bFmz rui-1cDvO" onClick={() => this.postAdd()}>

                            Post now
                    </button>


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
        );
    }
}


export default Attributes

