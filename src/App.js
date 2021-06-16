import './App.css';
import 'boxicons'
import TextField from "@material-ui/core/TextField";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.PNG";
import img4 from "./images/img4.PNG";
import imgavatar1 from "./images/imgavatar1.jpg";
import imgavatar2 from "./images/imgavatar2.jpg";
import imgavatar from "./images/imgavatar.jpg";
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';


function App() {
  return (
    <div  >


      <div className="navbar">
        <div className="dropbox-logo">
          <box-icon type='logo' name='dropbox' size="55px" color="rgb(24, 24, 102)" />
        </div>
        <div className="search">
          <div className="search-logo">
            <box-icon name='search' color="grey" size="30px" ></box-icon>
          </div>
          <TextField
            id="standard-basic"
            label="Search your content"
            className="search-input"
            autoComplete="off"
          />
        </div>
        <div style={{ marginRight: "30px" }}>
          <box-icon name='bell' size="35px" animation='tada-hover' color="rgb(24, 24, 102)"></box-icon>
        </div>
        <Avatar alt="avatar" src={imgavatar}>A</Avatar>
      </div>



      <div className="hero-section">
        <div className="left-section">
          <div className="left-section-content">
            <p className="left-heading1">Home</p><br />
            <p className="left-heading2">Files</p><br />
            <p className="left-heading3">Paper</p><br />
            <p className="left-heading4">Showcase</p>
          </div>

          <img src={img3} style={{width:"200px", height:"150px",marginTop:"250px",marginLeft:"50px",boxShadow:" 0 1px 4px white, 0 4px 20px rgb(0 0 0 / 50%)" }} alt=""></img>
          <div style={{ color: "white", marginTop: "10px",marginLeft:"100px", fontFamily:"poppins" }} >
              <h3 >Some Text</h3>
              </div>
        </div>


        <div className="centre-section">
          <div className="home-heading">Home</div>
          <div className="centre-home-content">
            <img src={img1} style={{ marginTop: "30px", height: "215px", width: "220px",boxShadow:" 0 1px 4px rgb(0 0 0 / 10%), 0 4px 20px rgb(0 0 0 / 50%)" }} alt=""></img>
            <div style={{ display: "flex", flexDirection: 'column', color: "black", margin: "50px", fontFamily: "sans-serif" }} >
              <h2 >Project</h2>
              <p style={{ color: "gray", marginTop: "10px", width: "350px" }}>This is a Selection Task for Full Stack Internship. Made by Ashwin Jagarwal. </p><br />
              <div style={{ width: "350px", backgroundColor: "rgb(191, 203, 235)", color: "rgb(24, 24, 102)", borderRadius: "5px" }}>
                <Checkbox
                  color="default"
                />
                This is a test text @asdfg hjklpo</div><br />
              <div style={{ width: "350px", backgroundColor: "rgb(191, 203, 235)", color: "rgb(24, 24, 102)", borderRadius: "5px" }}>
                <Checkbox
                  color="default"
                />
                This is a test text @qwerty uiop</div>
            </div>
          </div><br /><br />

          <div style={{ display: "flex", flexDirection: 'row', color: "black", fontFamily: "sans-serif" }} >
            <h2 style={{ marginRight: "400px" }}>Recent</h2>
            <div style={{ padding: "5px" }}>
              <box-icon name='grid-small' animation='burst-hover' size="40px" border='circle' color="rgb(24, 24, 102)"></box-icon>
            </div>
            <div style={{ padding: "5px", marginRight: "40px" }}>
              <box-icon name='list-ul' animation='burst-hover' size="40px" border='circle' color="rgb(24, 24, 102)"></box-icon>
            </div>
            <div style={{ padding: "5px" }}>
              <box-icon type='solid' name='add-to-queue' animation='burst-hover' size="40px" border='circle' color="rgb(24, 24, 102)"></box-icon>
            </div>
          </div><br />


          <div className="recent-folder" style={{ display: "flex", flexDirection: 'row', fontFamily: "sans-serif", borderRadius: "10px" }} >
            <box-icon name='folder' type='solid' size="40px" animation='tada-hover' color="rgb(191, 203, 235)" ></box-icon>
            <div style={{ margin: "15px", fontSize: "15px", marginRight: "450px" }}>Project abc</div>
            <div style={{ margin: "15px", fontSize: "15px" }}>Folder</div>
          </div><br />

          <div className="recent-music" style={{ display: "flex", flexDirection: 'row', fontFamily: "sans-serif", borderRadius: "10px" }} >
            <box-icon name='music' type='solid' size="40px" animation='tada-hover' color="orange" ></box-icon>
            <div style={{ margin: "15px", fontSize: "15px", marginRight: "455px" }}>Some Text</div>
            <div style={{ margin: "15px", fontSize: "15px" }}>Music</div>
          </div><br />

          <div className="recent-album" style={{ display: "flex", flexDirection: 'row', fontFamily: "sans-serif", borderRadius: "10px" }} >
            <box-icon name='photo-album' type='solid' size="40px" animation='tada-hover' color="orange" ></box-icon>
            <div style={{ margin: "15px", fontSize: "15px", marginRight: "455px" }}>Some text</div>
            <div style={{ margin: "15px", fontSize: "15px" }}> Picture </div>
          </div>

        </div><div style={{ width: "3px", height: "100vh", backgroundColor: "gray", marginLeft: "20px" }}></div>




        <div className="right-section">
          <img src={img2} style={{ height: "150px", width: "150px", marginLeft: "40px", marginBottom: "50px", marginTop: "100px",boxShadow:" 0 1px 4px rgb(0 0 0 / 10%), 0 4px 20px rgb(0 0 0 / 40%)"  }} alt=""/>
          <div style={{ color: "black", fontFamily: "sans-serif", marginLeft: "80px" }} >
            <h2 >Some text</h2>
            <p style={{ color: "gray", marginTop: "10px" }}>Some more Sample. </p><br />


          </div>
          <img src={img4} style={{ marginLeft: "80px" }} alt=""/><br />
          <div style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "80px"

          }}>
            <div style={{ margin: "10px" }}>
              <box-icon name='link-alt' size="40px" animation='flashing-hover' color="darkblue" ></box-icon></div>
            <div style={{ margin: "10px" }}>
              <box-icon name='dots-vertical-rounded' size="40px" animation='flashing-hover' color="darkblue" ></box-icon></div>
            <div style={{ margin: "10px" }}>
              <box-icon name='play' size="40px" animation='flashing-hover' color="darkblue" ></box-icon></div>
          </div><br /><br />

          <AvatarGroup max={4}>
            <Avatar alt="avatar1" src={imgavatar} />
            <Avatar alt="avatar2" src={imgavatar1} />
            <Avatar alt="avatar3" src={imgavatar2} />
            <Avatar alt="avatar4" src={imgavatar} />
            <Avatar alt="avatar5" src={imgavatar} />
          </AvatarGroup><br />
          <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{margin:"10px"}}><Avatar alt="avatar6"  src={imgavatar2} ></Avatar></div>
          <div style={{margin:"10px"}}><TextField placeholder="Write Comment" style={{width:"200px"}}></TextField></div>
          </div> 



        </div>
        

      </div>


    </div>
  );
}

export default App;
