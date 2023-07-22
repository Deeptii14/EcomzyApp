import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import toast from "react-hot-toast";
import TextArea from "antd/es/input/TextArea";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState("");
  const [categories, setCategories] = useState([]);
  const [photo, setphoto] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Shipping, setshipping] = useState("");
  const [category, setCategory] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/products/single-product/${params.slug}`
      );
      setname(data.products.name);
      setId(data.products._id);
      setPrice(data.products.price);
      setdescription(data.products.description);
      setQuantity(data.products.Quantity);
      setCategory(data.products.category._id);
      setshipping(data.products.Shipping);
    } catch (error) {
      console.log(error);
      toast.error("somethimg went Wrong");
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  //get category
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category !");
    }
  };
  useEffect(() => {
    getAllcategory();
  }, []);

  //handle delete buttton
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/products/product-delete/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  //handle Create button
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("Quantity", Quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.put(
        `/api/v1/products/update-product/${id}`,
        productData
      );
      if (data?.success) {
        console.log(data);
        toast.error(data?.message);
      } else {
        toast.success("product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while updating product");
    }
  };
  return (
    <>
      <Layout>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h1 className="center">Update product</h1>
              <div className="m-1 w-75">
                <Select
                  bordered={false}
                  placeholder="Select  a category"
                  size="large"
                  showSearch
                  className="form-control"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  +{" "}
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
                <div className="mt-4">
                  <label className="btn btn-outline-secondary col-md-12">
                    {photo ? photo.name : "upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setphoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="mb-3">
                  {photo ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="img"
                        height={"200px"}
                        className="img img-responsive"
                      ></img>
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/v1/products/product-photo/${id}`}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      ></img>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    placeholder="Write a name"
                    className="form-control"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <TextArea
                    type="text"
                    value={description}
                    placeholder="Write a description"
                    className="form-control"
                    onChange={(e) => setdescription(e.target.value)}
                  ></TextArea>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={price}
                    placeholder="Write a Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    value={Quantity}
                    placeholder="Write a quantity"
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Select
                    bordered={false}
                    size="large"
                    showSearch
                    placeholder="Select Shipping"
                    className="form-select mb-3"
                    onChange={(value) => setshipping(value)}
                    value={Shipping ? "yes" : "No"}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <button
                    className="btn btn-secondary m-1 bg-color-black}"
                    onClick={handleUpdate}
                  >
                    Update Product
                  </button>
                  <button
                    className="btn btn-danger m-1 bg-color-black}"
                    onClick={handleDelete}
                  >
                    Delete a Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UpdateProduct;
