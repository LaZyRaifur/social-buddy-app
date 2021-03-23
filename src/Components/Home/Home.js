import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';

const Home = () => {

    const [post,setPost] = useState([]);
    const [comment,setComment] = useState([]);
    const [info,setInfo] = useState([]);

    // hook for post component
    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    
    // for comment
    useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/comments')
       .then(res=>res.json())
       .then(data=>setComment(data))
    },[])


    // function to combine post and comment base in ID
    const merge = (post,comment) => {
        const temp = [];
        post.forEach((x)=>{
            comment.forEach((y)=>{
                if(x.id == y.id){
                    let cName = y.name;
                    let cEmail = y.email;
                    let cBody = y.body;
                    temp.push({...x, cName, cEmail, cBody});
                }
            });
        });
        return temp;
    };


    useEffect(()=>{
        setInfo(merge(post,comment))
        console.log(info)
    },[post,comment]);

    return (
        <div>
            
         {
            info.map((each)=><Post Key={each.id} data={each}></Post>)
         }
        </div>
    );
};

export default Home;