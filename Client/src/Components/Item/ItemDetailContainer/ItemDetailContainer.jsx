import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from  "../../../services/asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import styles from "./ItemDetailContainer.module.css";

//* Hacemos la logica del itemDetail

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { product_id } = useParams();

  useEffect(() => {
    getProductById(product_id)
      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      })
  }, [product_id]);

  return (
    <div>
      <Link to="/">
        <button className={styles.boton_volver} >
          Volver
        </button>
      </Link>
      
      <ItemDetail item={item}/>

    </div>

  )
};

export default ItemDetailContainer;