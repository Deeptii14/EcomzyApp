import React from "react";
import Layout from "../components/layout/Layout";
import useCategory from "../components/hooks/useCategory";
import { Link } from "react-router-dom";
const Categories1 = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3 " key={c._id}>
              <Link
                className="btn btn-secondary text-light gy-3 m-4"
                to={`/category1/${c.slug}`}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories1;
