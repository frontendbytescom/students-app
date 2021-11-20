import Article from "../Article/Article";
import React, { useState } from "react";
import Button from "../Button/Button";
import articlesListData from '../../data/articles-list-data';

const ArticleList = () => {
    const [titleColor, setTitleColor] = useState('black');
    const [articles, setArticles] = useState(articlesListData);

    const changeTitleColor = (color) => {
        setTitleColor(color);
    }

    const deleteArticleHandler = (articleIndex) => {
        const newArticleList = [...articles];
        newArticleList.splice(articleIndex, 1);
        setArticles(newArticleList);
    }

    return (
        <div className="articles">
            <Button 
                click={() => changeTitleColor('purple')} 
                text="Toggle Color"
            />

            {articles.map((article, index) => (
                <Article
                    key={article.id}
                    title={article.title}
                    color={titleColor}
                    titleClick={() => changeTitleColor(article.color)}
                    deleteHandler={() => deleteArticleHandler(index)}
                >
                    {article.text}
                </Article>
            ))}
        </div>
    )
}

export default ArticleList;