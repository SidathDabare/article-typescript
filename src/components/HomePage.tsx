import React, { useEffect } from 'react'

export interface IHomePageProps { }


const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

    const fetchData =async () => {
        try {
            const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (response.ok) {
                let article = await response.json()
                console.log(article);
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    })
  return (
    <div>Home Page</div>
  );
}

export default HomePage;