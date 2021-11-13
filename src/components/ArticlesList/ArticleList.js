import Article from "../Article/Article";
import React, { useState } from "react";
import ToggleColorButton from "../ToggleColorButton/ToggleColorButton";

const ArticleList = () => {
    const [titleColor, setTitleColor] = useState('black');

    const changeTitleColor = (color) => {
        setTitleColor(color);
    }

    return (
        <div className="articles">
            <ToggleColorButton click={() => changeTitleColor('purple')} />

            <Article
                title="Article 1"
                color={titleColor}
                titleClick={() => changeTitleColor('red')}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Article>
            <Article
                title="Article 2"
                color={titleColor}
                titleClick={() => changeTitleColor('green')}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Article>
            <Article
                title="Article 3"
                color={titleColor}
                titleClick={() => changeTitleColor('yellow')}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Article>
        </div>
    )
}

export default ArticleList;