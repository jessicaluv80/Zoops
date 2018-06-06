import React, { Component } from 'react';



class Home extends Component {
        render() {
                return (
                        <body>
                        <div>
                                <div className="flex-container1" >
                                        <img src="ZoopZ-JH_Revised.jpg" alt="ZoopZ-logo" />

                                        <header classname="App-header">
                                                ZoopZ  For  All  Ages</header> 
                                                <h6> Let Zoopz help you find fun places and activities for all family fun and events </h6>

                                        <h3> </h3>
                                </div>
                                <div className="flex-container2" >

                                        <p> Enter information below to let Zoops help you have Family Fun!</p>

                                </div>
                                <div>
                                        <div className="flex-container3" >

                                                <form>
                                                        <label>
                                                                Indoor:
                                                                           <input type="radio" qty="indoor" />
                                                        </label>
                                                        <label>
                                                                Outdoor:
                                                                                <input type="radio" age="outdoor" />
                                                        </label>
                                                        <label>
                                                                Zip Code:
                                                                                <input type="text" zip="zip" />
                                                        </label>

                                                        <input type="submit" submit="Submit" />
                                                </form>

                                        </div>
                                </div>
                                <div>

                                        <div> <img src="https://i.ytimg.com/vi/aDtNgcuiYb8/maxresdefault.jpg" alt="Lagoon pic1" width="32" height="32" /> </div>

                                        <div> <img src="https://i.ytimg.com/vi/4i7f8Q6ZHJk/maxresdefault.jpg" alt="Waterpark1" width="32" height="32" /> </div>

                                        <div> <img src="https://i.ytimg.com/vi/sDVcuEDLkDs/maxresdefault.jpg" alt="Waterpark2" width="32" height="32" /> </div>

                                        <div> <img src="https://s3-media2.fl.yelpcdn.com/bphoto/XEcXzsWa5cCjhnmlQxnT1A/ls.jpg" alt="Storybook Cafe" width="32" height="32" /> </div>

                                        <div> <img src="https://img.grouponcdn.com/deal/b5dLAPmfJpmGkzDuKaGv1L/visit_salt_lake__connect_pass_-800x480/v1/c700x420.jpg" alt="zoo" width="32" height="32" /> </div>

                                        <div> <img src="https://static.rootsrated.com/image/upload/s--zc3ER8SK--/t_rr_large_natural/qw1eoppc79gxdbiej6jb.jpg" alt="Disc gateway" width="32" height="32" /> </div>
                                </div>
                        </div>
</body>
                )
        }
}

export default Home;