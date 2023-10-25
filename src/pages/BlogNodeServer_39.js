import { useState, useEffect } from 'react'; //useState用來存資料;useEffect用來抓資料(他們是一組的)

let api_url=`http://localhost:5000/api/card_39`;

const BlogNodeServer_39 = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogFromNodeServer=async () => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            console.log('blogs data', data);
            setBlogs(data);
        } catch(error){
        console.log(error);
    }
}
    useEffect(()=>{
        fetchBlogFromNodeServer();
    }, []);

  return (
       <section className="blogs">  
    <div className="section-title">
      <h2>Blogs From Node Server</h2>
      <h3> WangLin Chung,211410039 </h3>
    </div>
    <div className="blogs-center">
        {blogs.map((item)=>{
            const { id,img, remote_url, title, category, descrip} = item;
            return(
                <article  key={id} className="blog">
                <img
                  src={img}
                  alt="Coffee photo"
                  className="img blog-img"
                />
                <div className="blog-content">
                  <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
                  <h3>{title}</h3>
                  <p>{descrip}</p>
                  <a href="#">read more</a>
                </div>
              </article>
            )
        })}
    </div>
  </section>
  )
}

export default BlogNodeServer_39