import axios from "axios";
import { Toolbar } from "@/components/Toolbar";
import { useState,useEffect } from "react";
import Pagination from '@/components/Pagination';
import { paginate } from '@/components/Paginate';



export const getStaticProps = async ()=>{
    const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=100&apiKey=6aa3a664cb254c79835764892ea11faf`)
  return {
  props: {
  news: data.data
  }
  };
  };
  
  export default function Home({ news }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
   
    const onPageChange = (page) => {
      setCurrentPage(page);
      window.scrollTo(0,0);
    };
    const paginatedPosts = paginate(news.articles, currentPage, pageSize);
  
      return (
        <>
          <Toolbar />
  
          <div class="container mx-auto">
            <h1 class="text-center">Technology News</h1>
            <div class="card-group" >
              <div class="row">
                {paginatedPosts.map((ne) => {
                  return (
  
                    <div class="card col-4">
                      <img class="card-img-top" src={ne.urlToImage} alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title">{ne?.title}</h5>
                        <p class="card-text">{ne?.description}</p>
                        <a href={ne.url} target='_blank' class="btn btn-primary">{ne.source.name}</a>
                      </div>
                    </div>
  
  
                  )
                })}
              </div>
            </div>
          </div>
          <Pagination
         items={news.totalResults} 
         currentPage={currentPage} 
         pageSize={pageSize} 
         onPageChange={onPageChange}
          />
          
        </>
      );
    };