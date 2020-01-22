import React from 'react';

const ArticleListItem = ({ article, activeArticle }) => {
  return (
    <article
      key={`article${article.id}`}
      id={article.id}
      className={activeArticle === article.id ? `activeArticle` : undefined}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </article>
  );
};

export default ArticleListItem;
