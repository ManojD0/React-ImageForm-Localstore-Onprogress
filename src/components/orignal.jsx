import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import '../assets/style.css'



class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update:'',
      FormDatas: [],
     item:[],
      Last_name:'',
      first_name:'',
      email:'',
      Phone:'',
      address:'',
      country:'',
      state:'',
      city:'',
      img:'',
      User_id:''
     
    };
  }




imaSave=()=>{
  var imm=this.state.img

  var reader = new FileReader();
var fileToRead =imm.files[0];

reader.addEventListener("loadend", function() {
 
   var ityt= reader.result;
   console.log("fhfghj",ityt)
});

  reader.readAsText(fileToRead)

}




  createAccount=()=>{
  
    // var file = fileInput.files.item(0);
    // var reader = new FileReader();

    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  
var tbClients=[]
var data='';
var x='';
var y='';

  //  var img = new Image();
  //  img.src = this.state.img
  //  img.load = ()=> {
  //   var canvas = document.createElement('canvas');
  //   document.body.appendChild(canvas);
  //   var context = canvas.getContext('2d');
  //   context.drawImage(img, 0, 0);
  //   var data = context.getImageData(x, y, img.width, img.height).data;
  //  };

    var client = {ID : 32,
       Name : this.state.Last_name,
      first__name :this.state.first_name,
      Email:this.state.email,
      Phone:this.state.Phone,
      address:this.state.address,
      country:this.state.country,
      state:this.state.state,
      city:this.state.city,
key:i,

      img:this.state.img
    };
       
       tbClients.push(client);
       
       localStorage.setItem( i, 
       
       JSON.stringify(tbClients)); 
       
       window.location.reload();
       
       return true;


  }


  componentDidMount() {

    document.getElementById('file').addEventListener('change', (e) => {
      alert("img")
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // convert file to base64 String
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

        this.setState({img:`data:image/png;base64,${base64String}`})
        // store file
        // localStorage.setItem('wallpaper', );
        // display image
        //  document.body.style.background = `url(data:image/png;base64,${base64String})`;
      };
      reader.readAsDataURL(file);
    });
    


  }

  






  
  allStorage=()=> {
   
    // var keys='';
    // var i='';
    //     keys = Object.keys(localStorage),
    //     i = keys.length;
       
    // while ( i-- ) {
    //      values.push(JSON.parse( localStorage.getItem(i) ));
    // }
    // console.log("fbdfh",values )
    // return values;


}

deleteAccount=(id)=>{
  localStorage.removeItem(id);
  window.location.reload();
 }


updateAccount=(item)=>{
 
  this.setState({
     update: true ,
    first_name:item.first__name,
    Last_name:item.Name,
  
    email:item.Email,
    Phone:item.Phone,
    address:item.address,
    country:item.country,
    state:item.state,
    city:item.city,
    

  });

}

encodeImageFileAsURL=(element)=> {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)















    
  }
  reader.readAsDataURL(file);
}









  render() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;
     


    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    console.log("iooooooooou", values);














    return (
      <React.Fragment>
        <div className="login-form">
          <h2 className="text-center">Registration Form</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Firstname"
              name="first_name"
              onChange={(e) => this.setState({ first_name: e.target.value })}
              defaultValue={this.state.first_name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="Last_name"
              placeholder="Lastname"
              onChange={(e) => this.setState({ Last_name: e.target.value })}
              defaultValue={this.state.Last_name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              defaultValue={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              name="Phone"
              onChange={(e) => this.setState({ Phone: e.target.value })}
              defaultValue={this.state.Phone}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Adderss"
              name="address"
              onChange={(e) => this.setState({ address: e.target.value })}
              defaultValue={this.state.address}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control form-control-sm"
              name="country"
              onChange={(e) => this.setState({ country: e.target.value })}
            >
              <option>Country</option>
              <option defaultValue={this.state.country}>IND</option>
              <option defaultValue={this.state.country}>USA</option>
            </select>{" "}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              name="state"
              onChange={(e) => this.setState({ state: e.target.value })}
              defaultValue={this.state.state}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              onChange={(e) => this.setState({ city: e.target.value })}
              defaultValue={this.state.city}
            />
          </div>

          <div classname="form-group">
            <label htmlFor="img">Profile image:</label>
            <input
              type="file"
              id="file"
              name="img"
              accept="image/png,image/jpeg"
              onChange={e => {
                // Creating Ref URL
                e.preventDefault()
                const { files } = e.target
                const localImageUrl = window.URL.createObjectURL(files[0])

                /* Convert to file from  

var file = new File([localImageUrl], "name");


*/

                console.log('hgjhsgjaghd', localImageUrl)
              
              }}

            />
          </div>

          <div className="form-group"></div>

          <div className="form-group">
            {this.state.update == true ? (
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={() => this.createAccount()}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={() => this.createAccount()}
              >
                Save
              </button>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Cancel
            </button>
          </div>
        </div>

        <div className="container">
          <h2>Registration List</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Image</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {values.map((item) => {
              
                  return (
                    <tr>
                      <td>{item[0].first__name}{item[0].Name}</td>
                      <td>{item[0].Email}</td>
                      <td>{item[0].Phone}</td>
                      <td>          <img src={item[0].img}   style={{height:"100px",width:"100px"}}/></td>
                      <td>{item[0].country}</td>

                      <td>{item[0].state}</td>
                      <td>{item[0].city}</td>
                      <td>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={() => this.updateAccount(item[0])}
                        >
                          Edit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={() => this.deleteAccount(item[0].key)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
