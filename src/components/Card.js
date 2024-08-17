import React from 'react';
import '../styles/card.css';
import ReactMarkdown from 'react-markdown';


const Card = ({ posts }) => {
    // const rawHTML = posts.data.children[2].data.selftext_html;

    // console.log(posts.data.children[2].data.selftext_html);
    console.log(posts.data.selftext_html);
    return (
        <div className="posts-container">
            <div className="post-card">
                <h2 className="post-title">{posts.data.title}</h2>
                <div
                    className="post-text"
                    dangerouslySetInnerHTML={{ __html: posts.data.selftext_html || '<p>No content available</p>' }}
                />
                <a href={posts.data.url} target="_blank" rel="noopener noreferrer" className="post-url">
                    Read more
                </a>
                <div className="post-score">Score: {posts.data.score}</div>
            </div>
        </div>
    );
};

export default Card;
