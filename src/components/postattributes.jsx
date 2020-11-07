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
            titlevalue : "",
            descriptionvalue : "",
            price : "",
            state : "",
            file : "",
            file2 : "",
            file3 : "",
            file4 : "",
            file5 : "",
            file6 : "",
            file7 : "",
            file8 : "",
            file9 : "",
            file10 : "",
            file11 : "",
            file12 : "",


        }


    }

    postAdd = ()=>{

       //1st image work

        //save image to database 
        var image1;
        var image2;
        var image3;
        var image4;
        var image5;
        var image6;
        var image7;
        var image8;
        var image9;
        var image10;
        var image11;
        var image12;


        var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)


        //get link uploaded image

        ref.on('state_changed', function(snapshot){
           
          }, function(error) {
            
          }, function() {
           
            ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {

                image1 = downloadURL
               
              console.log('File1  is available at', image1);
            });
          });

          this.setState({
            file : image1
        })

        console.log("state update",this.state.file)


        //   //2nd image work


        //   //save image to database 

        // var ref2 = firebase.storage().ref().child(`images/${this.state.file2.name}`).put(this.state.file2)


        // //get link uploaded image

        // ref2.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref2.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image2 = downloadURL
        //       console.log('File2 available at', image2);
        //     });
        //   });


        //   //3rd image work


        //     //save image to database 

        // var ref3 = firebase.storage().ref().child(`images/${this.state.file3.name}`).put(this.state.file3)


        // //get link uploaded image

        // ref3.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref3.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image3 = downloadURL
        //       console.log('File3 available at', image3);
        //     });
        //   });



        //   //4th image work


        //     //save image to database 

        // var ref4 = firebase.storage().ref().child(`images/${this.state.file4.name}`).put(this.state.file4)


        // //get link uploaded image

        // ref4.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref4.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image4 = downloadURL
        //       console.log('File4 available at', image4);
        //     });
        //   });



        //   //5th image work


        //     //save image to database 

        // var ref5 = firebase.storage().ref().child(`images/${this.state.file5.name}`).put(this.state.file3)


        // //get link uploaded image

        // ref5.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref5.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image5 = downloadURL
        //       console.log('File5 available at', image5);
        //     });
        //   });


        //    //6th image work


        //     //save image to database 

        // var ref6 = firebase.storage().ref().child(`images/${this.state.file6.name}`).put(this.state.file6)


        // //get link uploaded image

        // ref6.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref6.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //          image6 = downloadURL
        //       console.log('File6 available at', image6);
        //     });
        //   });



        //       //7th image work


        //     //save image to database 

        // var ref7 = firebase.storage().ref().child(`images/${this.state.file7.name}`).put(this.state.file7)


        // //get link uploaded image

        // ref7.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref7.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image7 = downloadURL
        //       console.log('File7 available at', image7);
        //     });
        //   });






        //     //8th image work


        //     //save image to database 

        // var ref8 = firebase.storage().ref().child(`images/${this.state.file8.name}`).put(this.state.file8)


        // //get link uploaded image

        // ref8.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref8.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image8 = downloadURL
        //       console.log('File8 available at', image8);
        //     });
        //   });



        //     //9th image work


        //     //save image to database 

        // var ref9 = firebase.storage().ref().child(`images/${this.state.file9.name}`).put(this.state.file9)


        // //get link uploaded image

        // ref9.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref9.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image9 = downloadURL
        //       console.log('File9 available at', image9);
        //     });
        //   });



        //    //10th image work


        //     //save image to database 

        // var ref10 = firebase.storage().ref().child(`images/${this.state.file10.name}`).put(this.state.file10)


        // //get link uploaded image

        // ref10.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref10.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image10 = downloadURL
        //       console.log('File10 available at', image10);
        //     });
        //   });



        //    //11th image work


        //     //save image to database 

        // var ref11 = firebase.storage().ref().child(`images/${this.state.file11.name}`).put(this.state.file11)


        // //get link uploaded image

        // ref11.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref11.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image11 = downloadURL
        //       console.log('File11 available at', image11);
        //     });
        //   });



          
        //    //12th image work


        //     //save image to database 

        // var ref12 = firebase.storage().ref().child(`images/${this.state.file12.name}`).put(this.state.file12)


        // //get link uploaded image

        // ref12.on('state_changed', function(snapshot){
           
        //   }, function(error) {
            
        //   }, function() {
           
        //     ref12.snapshot.ref.getDownloadURL().then(function(downloadURL) {

        //         image12 = downloadURL
        //       console.log('File11 available at', image12);
        //     });
        //   });






        let condition = this.state.condition;
        let titlevalue = this.state.titlevalue;
        let descriptionvalue = this.state.descriptionvalue;
        let price = this.state.price;
        let state = this.state.state;
        
        // firebase.database().ref('/').child("post").push({
        //     condition : condition,
        //     titlevalue : titlevalue,
        //     descriptionvalue : descriptionvalue,
        //     price : price,
        //     state : state,
        //     img1 : image1,
        //     img2 : image2,
        //     img3 : image3,
        //     img4 : image4,
        //     img5 : image5,
        //     img6 : image6,
        //     img7 : image7,
        //     img8 : image8,
        //     img9 : image9,
        //     img10 : image10,
        //     img11 : image11,
        //     img12 : image12,


        // })

        console.log("my firedata",this.state.file)
    }

    render() {
        console.log("Condition is  ", this.state.condition)
        console.log("type is  ", this.state.titlevalue)
        console.log("description is  ", this.state.descriptionvalue)
        console.log("price is  ", this.state.price)
        console.log("state is   ", this.state.state)
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
                    <h5 className="bold">SELECTED CATEGORY</h5>

                    <div className="headerline">


                    </div>

                    <br />
                    <div className="container">

                        <h5 className="bold">INCLUDE SOME DETAILS</h5>
                        <div className="container">
                            <label for="">Condition *</label>

                            <div className="rui-D-GoM">
                                <button className="rui-YHJnT" data-aut-id="opnew_used0" onClick={()=>this.setState({condition : "New"})}>New</button>
                                <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={()=>this.setState({condition : "Used"})}>Used</button
                                ></div>
                        </div>
                    </div>


                    <br />


                    <div className="container">


                        <div className="container">
                            <label for="">Type *</label>

                            <div className="rui-D-GoM">
                                <button className="rui-YHJnT" data-aut-id="opnew_used0" onClick={()=>this.setState({type : "Apple"})}>Apple</button>
                                <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={()=>this.setState({type : "Dany Tabs"})}>Dany Tabs</button>
                                <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={()=>this.setState({type : "Q Tabs"})}>Q Tabs</button>
                                <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={()=>this.setState({type : "Samsung"})}>Samsung</button>
                                <button className="rui-YHJnT" data-aut-id="opnew_used1" onClick={()=>this.setState({type : "Other Tabs"})}>Other Tabs</button>
                            </div>
                        </div>
                    </div>

                    <br />


                    <div className="container">


                        <div className="container">
                            <label for="">Add title *</label>

                            <div className="rui-D-GoM">

                                <div className="titlebox">

                                    <input value={this.state.titlevalue} type="text" maxLength={70} minLength={5} onChange = {(e)=>this.setState({titlevalue:e.target.value})} />


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

                                    <input type="text" maxLength={70} minLength={5} onChange={(e)=>this.setState({descriptionvalue : e.target.value})} />


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

                                    <input type="text" maxLength={70} minLength={5} onChange={(e)=>this.setState({price:e.target.value})} />


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

                                        <input type="file" hidden id="image1" onChange={(e)=>this.setState({file:e.target.files[0]})} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>




                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image2">

                                        <input type="file" hidden id="image2" onChange={(e)=>this.setState({file2:e.target.files[0]})} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image3">

                                        <input type="file" hidden id="image3"  onChange={(e)=>this.setState({file3:e.target.files[0]})}/>

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">
                                    <label htmlFor="image4">

                                        <input type="file" hidden id="image4"  onChange={(e)=>this.setState({file4:e.target.files[0]})} />

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

                                        <input type="file" hidden id="image5"  onChange={(e)=>this.setState({file5:e.target.files[0]})} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image6">

                                        <input type="file" hidden id="image6"  onChange={(e)=>this.setState({file6:e.target.files[0]})}/>

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image7">

                                        <input type="file" hidden id="image7"  onChange={(e)=>this.setState({file7:e.target.files[0]})} />

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image8">

                                        <input type="file" hidden id="image8"  onChange={(e)=>this.setState({file8:e.target.files[0]})} />

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

                                        <input type="file" hidden id="image9"   onChange={(e)=>this.setState({file9:e.target.files[0]})}/>

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image10">

                                        <input type="file" hidden id="image10"  onChange={(e)=>this.setState({file10:e.target.files[0]})}/>

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1">

                                    <label htmlFor="image11">

                                        <input type="file" hidden id="image11"   onChange={(e)=>this.setState({file11:e.target.files[0]})}/>

                                        <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-15D7A" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z" /></svg>



                                    </label>


                                </button>


                                <div className="e22Bu"><span>Add photo</span></div>

                            </div>


                            <div className="photos">


                                <button className="photobutton1" >

                                    <label htmlFor="image12">

                                        <input type="file" hidden id="image12"  onChange={(e)=>this.setState({file12:e.target.files[0]})} />

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
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Kashmir"})} >Azad Kashmir</a>
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Balochistan"})} >Balochistan</a>
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Islamabad"})}>Islamabad</a>
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Khyber Pakhtunkhwa"})} >Khyber Pakhtunkhwa</a>
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Northern Areas"})} >Northern Areas</a>
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Punjab"})} >Punjab</a>
                                        <a className="dropdown-item" onClick={()=>this.setState({state:"Sindh"})} >Sindh</a>

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
                        <button className="rui-3sH3b rui-2yJ_A rui-1zK8h _3bFmz rui-1cDvO" onClick={()=>this.postAdd()}>

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

