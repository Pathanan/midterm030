import React from 'react'

export default function Home() {
    return (
        <div>
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
                                            
                                            {/* /.post */}
                                            {/* Post */}
                                            
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
