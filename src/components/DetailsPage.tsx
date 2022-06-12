
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import IArticleInterface from '../typings/ArticleInterface'


function DetailsPage() {
  let { id } = useParams();
  useEffect(() => {
    getArticle()
  }, [id])

  const [articles, setArticles] = useState<IArticleInterface | null>(null)

  const getArticle = async () => {

    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)

      if (response.ok) {
        let article = await response.json()
        setArticles(article)
        // console.log(article)
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <h3 className='my-4 text-center'>{articles?.title}</h3>
      <ul style={{ listStyle: 'none' }}>

        <div className='d-flex justify-content-between'>
          <img style={{ maxWidth: '50%', maxHeight: '400px' }} src={articles?.imageUrl} alt='' />
          <div style={{ maxWidth: '45%', maxHeight: '400px' }}>{articles?.summary}</div>
        </div>
        <div className='d-flex align-items-center mt-5 justify-content-between col-sm-10 col-md-6'>
          <li><a href={articles?.url}>Read more.....</a></li>
          <li>Details From: <span className='text-weight-bold'>{articles?.newsSite}</span></li>
          <li>{articles?.publishedAt.slice(0, 10)}</li>
        </div>


      </ul>
    </Container>
  )
}

export default DetailsPage