import { useState, useEffect } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    // delay the fetching of data to show the skeleton
    setTimeout(async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setArticles(data);
    }, 5000);
  });

  return (
    <div className="article">
      <h2>Article Details</h2>

      {articles && (
        <div className="articles">
          {articles.map((article) => (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))}
        </div>
      )}

      {
        !articles &&
          // [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)
          [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme={"dark"} />)
        // <div className="skeleton">
        //   loading...
        //   {/* <div className="skeleton-avatar"></div>
        //   <div className="skeleton-author"></div>
        //   <div className="skeleton-details"></div> */}
        // </div>
      }
    </div>
  );
};

export default Articles;
