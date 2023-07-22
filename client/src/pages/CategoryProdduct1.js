import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const CategoryProdduct1 = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [cart, setCart] = useCart();
  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);
  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/products/product-category/${params.slug}`
      );
      setproducts(data?.products);
      setcategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h3 className="text-center mt-3">Category - {category?.name}</h3>
      <h5 className="text-center">{products?.length} Result found </h5>
      <div className="row">
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/products/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  {p.description.substring(0, 30)}....
                </p>
                <p className="card-text ">Rs. {p.price}</p>
                <div className="flex justify-evenly">
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => {
                      setCart([...cart, p]);
                      toast.success("Item added to cart 👍");
                    }}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProdduct1;
