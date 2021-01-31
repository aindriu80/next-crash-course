import articleStyles from "../styles/article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
};

export default ArticleList;
