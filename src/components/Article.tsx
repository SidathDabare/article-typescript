import React from 'react'
import { Card, Button } from 'react-bootstrap'
import IArticleInterface from '../typings/ArticleInterface'
import { Link } from 'react-router-dom'


interface ArticleProps {
    article: IArticleInterface,

}

const Article = ({ article }: ArticleProps) => {
    return (
        <Card
            style={{ maxWidth: '17rem', height: '30rem', margin: "0px 2px", position: "relative" }}
        >
            <Card.Img
                variant="top" src={article.imageUrl}
                style={{
                    height: "10rem",
                    minHeight: "10rem",
                    width: "17rem",
                    backgroundSize: "contain"

                }}
            />
            <Card.Body className='px-2 card-title'>
                <Card.Title>{article.title}</Card.Title>
                <div className='card-content'>
                    <p >{article.summary}</p>
                </div>

                <div style={{ position: "absolute", height: "5rem", marginTop: "1rem", bottom: "5px" }}>

                    <Card.Text style={{ margin: "3px 0px" }}>
                        Published at : {article.publishedAt.slice(0, 10)}
                    </Card.Text>
                    <Link to={`/${article.id}`}><Button variant="primary">Read more...</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Article