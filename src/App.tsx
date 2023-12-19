import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import Item from "./Item/Item";
import Main from "./Item/Main";
import Pagination from "./Pagination/Pagination"
import "./App.css"

// npm i --save 
// TypeScript vite

// Кастом хуки(отделение логики от интерфейса)
// React api
// React Roater DOM

function App() {
  const [items, setItems] = useState<{ id: number, thumbnail: string, title: string, description: string, price: number }[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {//Получение товаров из api с помощью axios
      try {
        const response = await axios.get(`https://dummyjson.com/products?skip=${(currentPage - 1) * 12}&limit=${12}`);
        setItems(response.data.products);
        setTotalItems(response.data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="App">
      <Header />
      <h2>Список товаров</h2>
      <Main>
        {items.map((item) => <Item key={item.id} data={item} />)}
      </Main>
      <Pagination data={{ totalPage: totalItems }}/>
      <Footer />

    </div>
  );
}

export default App;
