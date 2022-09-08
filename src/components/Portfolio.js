import React from 'react'
import '../css/Style.css'

export default function Portfolio() {
  return (
    <div className='D'>
     <h1 style ={{textAlign:'center'}} className='H'>Portfolio</h1>
     <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Profile Image */}
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="profile-user-img img-fluid img-circle" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/118194685_2373476762955072_6951415280686442329_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHubln7qajnNXB79-A8e8Iw7HVcrucEUi7sdVyu5wRSLunQP8G3JHRcdJjB67G8zCDNcwBU71V_Zk6yJq555wMl&_nc_ohc=MnCmDshmwPoAX9uPCFD&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_4BpbYG1PmuTwOp5I63Qaa9CrKw_uiznl_txO8Q_g0_w&oe=63266AF2" alt="User profile picture" />
                                    </div>
                                    <h3 className="profile-username text-center">Pathanan Charoenklang</h3>
                                    <p className="text-muted text-center">🎸🎶</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>Followers</b> <a className="float-right">207</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Following</b> <a className="float-right">198</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Friends</b> <a className="float-right">400</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* About Me Box */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">About Me</h3>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                    <strong><i className="fas fa-book mr-1" /> Education</strong>
                                    <p className="text-muted">
                                        BURAPHA UNIVERUNIVERSITY
                                    </p>
                                    <hr />
                                    <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
                                    <p className="text-muted">Trat Thailand</p>
                                    <hr />

                                    <hr />
                                    <strong><i className="far fa-file-alt mr-1" /> Notes</strong>
                                    <p className="text-muted">สวัสดีครับอาจารย์ขอคะแนนสวยๆนะครับ</p>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Profile</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                                        
                                    </ul>
                                </div>{/* /.card-header */}
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            {/* Post */}
                                            <div className="post">
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-1/118194685_2373476762955072_6951415280686442329_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_eui2=AeHubln7qajnNXB79-A8e8Iw7HVcrucEUi7sdVyu5wRSLunQP8G3JHRcdJjB67G8zCDNcwBU71V_Zk6yJq555wMl&amp;_nc_ohc=MnCmDshmwPoAX9uPCFD&amp;_nc_ht=scontent.fbkk21-1.fna&amp;oh=00_AT_1sidqn1aagxvgclKk0kB0AHwBnfWumHeL1DPmQ1W53g&amp;oe=63292242" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#">Pathanan Charoenklang</a> </h6>
                                                       
                                                    </span>
                                                    <h6 className='A'> <span className="description">13:30 PM today</span> </h6>
                                                </div>
                                                {/* /.user-block */}
                                                <p>
                                                <img height={500} width={500} src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/118194685_2373476762955072_6951415280686442329_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHubln7qajnNXB79-A8e8Iw7HVcrucEUi7sdVyu5wRSLunQP8G3JHRcdJjB67G8zCDNcwBU71V_Zk6yJq555wMl&_nc_ohc=MnCmDshmwPoAX9uPCFD&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_4BpbYG1PmuTwOp5I63Qaa9CrKw_uiznl_txO8Q_g0_w&oe=63266AF2" />

                                                    <div dir="auto" style={{ textAlign: 'start' }}>Name | Pathanan Charoenklang</div>
                                                    <div dir="auto" style={{ textAlign: 'start' }}>Nickname | Earth</div>
                                                    <div dir="auto" style={{ textAlign: 'start' }}>Birthday| 18/09/2001</div>
                                                    <div dir="auto" style={{ textAlign: 'start' }}>Address| Trat Thailand</div>
                                                    <div dir="auto" style={{ textAlign: 'start' }}>Hobby | play guitar🎸</div>
                                                    <div dir="auto" style={{ textAlign: 'start' }}>Education | burapha university</div>
                                                    


                                                </p>
                                                <h6 className='C'> <p>
                                                    <a href="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1" /> Share</a>
                                                    <a href="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1" /> Like</a>
                                                     <span className="float-left">
                                                        <a href="#" className="link-black text-sm">
                                                            <i className="far fa-comments mr-1" /> like (650)
                                                            <i className="far fa-comments mr-1" /> Comments (540)
                                                        </a>
                                                    </span> 
                                                </p> </h6>
                                                <input className="form-control form-control-sm" type="text" placeholder="Type a comment" />
                                            </div>
                                            {/* /.post */}
                                            {/* Post */}
                                            <div className="post clearfix">
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-1/118194685_2373476762955072_6951415280686442329_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_eui2=AeHubln7qajnNXB79-A8e8Iw7HVcrucEUi7sdVyu5wRSLunQP8G3JHRcdJjB67G8zCDNcwBU71V_Zk6yJq555wMl&amp;_nc_ohc=MnCmDshmwPoAX9uPCFD&amp;_nc_ht=scontent.fbkk21-1.fna&amp;oh=00_AT_1sidqn1aagxvgclKk0kB0AHwBnfWumHeL1DPmQ1W53g&amp;oe=63292242" alt="User Image" />
                                                    <span className="username">
                                                    <h6 className='A'>  <a href="#">Pathanan Charoenklang</a> </h6>
                                                        
                                                    </span>
                                                    <h6 className='A'>  <span className="description"> 14.00 today</span> </h6>
                                                </div>
                                                {/* /.user-block */}
                                                <p>
                                                <h1 className='A'> คะแนนเต็มจะไปไหน </h1>
                                                </p>
                                                <form className="form-horizontal">
                                                    <div className="input-group input-group-sm mb-0">
                                                        <input className="form-control form-control-sm" placeholder="Response" />
                                                        <div className="input-group-append">
                                                            <button type="submit" className="btn btn-danger">Send</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* /.post */}
                                            {/* Post */}
                                            <div className="post">
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-1/118194685_2373476762955072_6951415280686442329_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_eui2=AeHubln7qajnNXB79-A8e8Iw7HVcrucEUi7sdVyu5wRSLunQP8G3JHRcdJjB67G8zCDNcwBU71V_Zk6yJq555wMl&amp;_nc_ohc=MnCmDshmwPoAX9uPCFD&amp;_nc_ht=scontent.fbkk21-1.fna&amp;oh=00_AT_1sidqn1aagxvgclKk0kB0AHwBnfWumHeL1DPmQ1W53g&amp;oe=63292242" alt="User Image" />
                                                    <span className="username">
                                                    <h6 className='A'><a href="#">Pathanan Charoenklang</a> </h6>
                                                        
                                                    </span>
                                                    <h6 className='A'> <span className="description"> 5 days ago</span> </h6>
                                                </div>
                                                {/* /.user-block */}
                                                <div className="row mb-3">
                                                    <div className="col-sm-6">
                                                        <img className="img-fluid" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/118016519_915638182291395_7342344425713725276_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFhrN3GBNeWU4j7GDSI6EWVw2eC2iUUAM7DZ4LaJRQAzpufqvsF1jISRqEEOpLcHdWhqEQzywE_QrV2XalOsLa7&_nc_ohc=AH5TwJ0MhOEAX_0biQ6&tn=Qu5H6yt9OL_9T4x2&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_7Ysde2ezUUfGmYmxiEKOTLRJ0Qho3mjH0l1NfhQS54w&oe=632734E6" alt="Photo" />
                                                    </div>
                                                    {/* /.col */}
                                                    <div className="col-sm-6">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <img className="img-fluid mb-3" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.18169-9/21728222_1947372908875639_4105030235702943503_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEa-VuHHIgt3rfyN3RDEVw9fM8pImAW-e18zykiYBb57Q0KiOSKWbi42C5u8VHMNN5rcKH37Dc-xBiYWhABqwfx&_nc_ohc=sBohAqpKMwQAX89Z_Rj&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT9xDHh2Y5okZH1sQ3cs4vO9cho4UtvAcIzwtBUnJtmz0A&oe=6325F604" alt="Photo" />
                                                                <img height={500} width={180} className="img-fluid" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.18169-9/21743278_1947373015542295_4529076131409839079_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGU0WPPcNVyM421tFu0tni7_KaoTzZ6r5T8pqhPNnqvlOzaTKvkDBcJbQOMGK6_ZkeliK5Q15qlCHaXwTeYdC3h&_nc_ohc=t1vy8_H9WH0AX8gIxFk&tn=Qu5H6yt9OL_9T4x2&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT8ciUQvA0wxyFgbp5J-PHvzuDyEzzVnkxSJqgCDHdO44g&oe=63260442" />
                                                            </div>
                                                            {/* /.col */}
                                                        </div>
                                                        {/* /.row */}
                                                    </div>
                                                    {/* /.col */}
                                                </div>
                                                {/* /.row */}
                                                <h6 className='C'> <p>
                                                    <a href="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1" /> Share</a>
                                                    <a href="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1" /> Like</a>
                                                    <span className="float-left">
                                                        <a href="#" className="link-black text-sm">
                                                        <i className="far fa-comments mr-1" /> like (1,564,846)
                                                            <i className="far fa-comments mr-1" /> Comments (1,436,615)
                                                        </a>
                                                    </span>
                                                </p> </h6>
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Blackpink_Lisa_GMP_240622.png/240px-Blackpink_Lisa_GMP_240622.png" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#"></a>lalalalisa_m</h6>
                                                    </span>
                                                    <h6 className='A' > <span className="description">ว้ายยยย หล่อจัด</span> </h6>
                                                </div>
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jennie_Kim_from_BLACKPINK_PUBG_210321_%28cropped%29.jpg/640px-Jennie_Kim_from_BLACKPINK_PUBG_210321_%28cropped%29.jpg" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#"></a>jennierubyjane</h6>
                                                    </span>
                                                    <h6 className='A' > <span className="description">รูปนี้เกินไป ใจไม่ค่อยดี❤️❤️</span> </h6>
                                                </div>
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://kpopnews.atsit.in/th/wp-content/uploads/2021/10/blackpink-jisoo-e0b8a1e0b8b9e0b8a5e0b884e0b988e0b8b2e0b8aae0b8b8e0b897e0b898e0b8b4e0b89be0b8b5-2021-e0b899e0b8b1e0b881e0b981e0b8aae0b894.jpg" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#"></a>sooyaaa__</h6>
                                                    </span>
                                                    <h6 className='A' > <span className="description"></span>ใครไหวไปก่อนเลยยย </h6>
                                                </div>
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://files.vogue.co.th/uploads/GettyImages-1343638260.jpg" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#"></a>roses_are_rosie</h6>
                                                    </span>
                                                    <h6 className='A' > <span className="description"></span>😘😘😘 </h6>
                                                </div>
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/191792503_3076941259220619_1619627825429849925_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4CGdEEUHEHlwDrrEGFD_KOmo9-JxmD_A6aj34nGYP8KennC-NTdH8bQOYahdFFVEskDAnu90U2QqvI62BG7yN&_nc_ohc=ARo193WKq6cAX9Uvzbb&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_gaXXlxli5EAz6K4CU3AEy8cUlV3OLKo5wYu_AXd0XUg&oe=6307C744" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#"></a>ไพฑูรย์ ศรีนิล</h6>
                                                    </span>
                                                    <h6 className='A' > <span className="description"></span>หล่อ เก่งมากครับ</h6>
                                                </div>
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="https://gumlet.assettype.com/ejan%2F2022-03%2Fa5f2a8cf-307f-47b9-b0e1-930bb08095c4%2F10.jpg?auto=format%2Ccompress&w=400&dpr=2.6&format=webp" alt="User Image" />
                                                    <span className="username">
                                                       <h6 className='A'> <a href="#"></a>jacksonwang852g7</h6>
                                                    </span>
                                                    <h6 className='A' > <span className="description"></span>เทียบนายไม่ติดเลยว่ะ เพื่อนหล่อจัด👍</h6>
                                                </div>
                                                
                                            </div>
                                            {/* /.post */}
                                        </div>
                                        
                                                   
                                                
                                            
                                        
                                    </div>
                                    {/* /.tab-content */}
                                </div>{/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
    </div>
  )
}
