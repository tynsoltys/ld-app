import React, { Component } from 'react';

const ArticleListItem = (props) => {
  return (
    <article key={props.id}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </article>
  );
};

export default ArticleListItem;
