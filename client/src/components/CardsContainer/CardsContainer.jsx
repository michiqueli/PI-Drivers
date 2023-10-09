import { getModDrivers } from "../../redux/sliceDrivers";
import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CardsContainer() {

  const modDrivers = useSelector(getModDrivers);
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(modDrivers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedDrivers = modDrivers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={style.container}>
      {displayedDrivers.map(driver => (        
        <Card
          key={driver.id}
          name={driver.name}
          lastName={driver.lastname}
          teams={driver.teams}
          image={driver.image}
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