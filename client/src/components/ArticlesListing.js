import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticlesListing = (props) => {
  return (
    <aside className='articles-list-container'>
      <ul>
        {props.articles.map((article, i) => {
          return (
            <ArticleListItem
              key={`article${article.id}`}
              id={article.id}
              title={article.title}
              content={article.content}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default ArticlesListing;
