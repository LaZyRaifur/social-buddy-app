import React from 'react';
import Comment from '../Comment/Comment';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Post = (props) => {
    const {id,title,body,cEmail,cName} = props.data;
    return (
        <div className="facebook-wrap">
            <div className="header">
                <div className="avatar">
                    <img src="http://booproweb.com/img/booproweb-logo2.png" alt=""/>

                </div>
                <div className="fullname">
                     {id}
                </div>
                <div><small>Shared  <a href="#">Connected</a>.</small> 
                 </div>  
                 <br/> 
                 <div className="date">
                     <a href="#">25 September 2021</a>
                     </div> 
                     <div className="shared-form">
                         <small><a href="#">YouTube</a></small>
                     </div>
                     <div className="users-ico">
                         <a href="#"><i className="fa fa-users"></i></a>
                         <a href="#"><i className="fa fa-caret-down"></i></a>

                     </div>
                     <div className="elipsis">
                         <i className="fa fa-ellipsis-h"></i>

                     </div>
            </div>
            <div className="main-share">
                <div className="youtube-thumb">
                    <img src="https://external.fbeg4-1.fna.fbcdn.net/safe_image.php?d=AQB4z0HChC3PSGAN&w=111&h=111&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FhZ92_xPKSq8%2Fmaxresdefault.jpg&cfs=1&upscale=1&_nc_hash=AQDURUnxiE-RrYek" alt=""/>

                </div>
                <div className="yt-link-name">
                    {title}

                </div>
                <div className="yt-description">
                    <p>
                        {body}
                    </p>

                </div>
                <br/>
                <div className="yt-link">
                    JsonApiPlaceholder

                </div>
                <div className="footer-actions">
                    <div className="far fa-thumbs-up">
                    
                        Like

                    </div>
                    <div className="fb-comments">
                        <i className="far fa-comment"></i>
                        Comment

                    </div>
                    <div className="fb-share">
                        <i className="fa fa-share-square-o fa-lg"></i>
                        Share

                    </div>

                </div>

            </div>
           
           {/* comment section */}

           <div className="comment-section">
               <div className="fa-cm-avatar">
                   <img src="http://booproweb.com/img/booproweb-logo2.png" alt=""/>

               </div>
               <div className="fa-ppl-like">
               <i class="far fa-thumbs-up"></i>
                   raifurrahim, Hridoy Khan,Shuvo and another 100,480 people

               </div>
               <div className="footer-comment">
                   <div className="fa-bottom-bar">
                       <div className="fa-cm-input">
                          
                           <Comment name={cName}> <input type="text" placeholder="comment here"/></Comment>

                       </div>
                   </div>
                   <div className="footer-cm-icons">
                       <i className="fa fa-smile-o"></i>
                       <i className="fa fa-camera-retro"></i>
                       <i className="fa fa-picture-o"></i>
                       <i className="fa fa-sticky-note-o"></i>

                   </div>

               </div>

           </div>
        </div>
    );
};

export default Post;