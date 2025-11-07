import React from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
// import useAxios from "../hooks/UseAxios";

const CreateAProduct = () => {
  const { user } = useAuth();
//   const axiosInstance = useAxios();
const axiosSecure = useAxiosSecure();
  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    console.log(title, image, price_min, price_max);

    const newProduct = {
      title,
      image,
      price_min,
      price_max,
      email: user?.email,
      seller_name: user?.displayName,
    };


    axiosSecure.post("/products", newProduct).then((data) => {
      console.log(data.data);
    });
    // axios.post("http://localhost:3000/products", newProduct).then((data) => {
    //   console.log(data.data);
    //   if (data.data.insertedId) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your Product has been Created.",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   }
    // });
  };
  return (
    <div>
      <form onSubmit={handleCreateAProduct} className="">
        <fieldset className="fieldset w-1/3 mx-auto px-4 py-6 bg-white rounded-md border-2 border-gray-200 mt-36">
          <label className="label">Name</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Enter your Name"
          />
          <label className="label">Image</label>
          <input
            type="text"
            className="input w-full"
            name="image"
            placeholder="Enter your Image"
          />
          <label className="label">Min Price</label>
          <input
            type="text"
            name="price_min"
            className="input w-full"
            placeholder="Place Your Minimum Price"
          />
          <label className="label">Max Price</label>
          <input
            type="text"
            name="price_max"
            className="input w-full"
            placeholder="Place Your Maximum Price"
          />
          <button className="btn btn-neutral mt-4 ">Add a Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
