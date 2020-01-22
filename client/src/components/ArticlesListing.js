import React, { Component } from 'react';
import ArticleListItem from './ArticleListItem';
import { articleGenerator } from '../utils/utils';

class ArticlesListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      activeArticle: 3
    };
  }

  componentDidMount() {
    // fake call to api for articles
    let fakeArticles = articleGenerator(9);
    this.setState({ articles: fakeArticles });
  }

  render() {
    return (
      <aside className='articles-list-container'>
        <ul>
          {this.state.articles.map((article, i) => {
            return (
              <ArticleListItem
                key={`article${article.id}`}
                article={article}
                activeArticle={this.state.activeArticle}
              />
            );
          })}
        </ul>
      </aside>
    );
  }
}

export default ArticlesListing;
