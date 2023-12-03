import React, { useState, useEffect } from "react";
import axios from 'axios'
import ReactPaginate from 'react-paginate';

import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import Item from "./Item/Item";
import Main from "./Item/Main";
import "./App.css"

// npm i --save 
// TypeScript vite
// Кастом хуки(отделение логики от интерфейса)
// React api
// React Roater DOM

function App() {
  const [items, setItems] = useState<{ id: number, thumbnail: string, title: string, description: string, price: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {//Получение товаров из api с помощью axios
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/products?skip=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`);
        setItems(response.data.products);
        setTotalItems(response.data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };


  return (
    <div className="App">
      <Header />
      <h2>Список товаров</h2>
      <Main>
        {loading && <p>Loading...</p>}
        {!loading && items.map((item) => <Item key={item.id} data={item} />)}
      </Main>
      <ReactPaginate //Добавление пагинации с помощью react-paginate
        pageCount={Math.ceil(totalItems / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
      <Footer />

    </div>
  );
}

export default App;
