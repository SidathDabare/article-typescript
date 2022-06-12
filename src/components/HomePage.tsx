import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import IArticleInterface from '../typings/ArticleInterface'
import Article from './Article'


const HomePage = () => {
    const [articles, setArticles] = useState<IArticleInterface[]>([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (response.ok) {
                let data = await response.json()
                setArticles(data)
                console.log(data);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <h1 className='my-3'> Spaceflight news</h1>
            <Row className='p-0 mx-0'>
                {articles.map((article, i) => (<  Article article={article} key={i} />)

                )}
            </Row>
        </Container>
    );
}

export default HomePage;