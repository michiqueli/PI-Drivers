import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import axios from "axios"
import { useEffect, useState } from "react";

export default function CardsContainer() {
      
  const [drivers, setDrivers] = useState([]);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:3001/drivers')
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const totalPages = Math.ceil(drivers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDrivers = drivers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={style.container}>
      {displayedDrivers.map(driver => (        
        <Card
          key={driver.id}
          name={driver.name.forename}
          lastName={driver.name.surname}
          teams={driver.teams}
          image={driver.image.url}
          id={driver.id}
        />
      ))}
      <div className={style.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}