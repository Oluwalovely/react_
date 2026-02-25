import React, { useState } from 'react';
import { useFormik } from 'formik';

const AddProductPage = () => {
    const [image, setimage] = useState(null)

    const handleFileChange=(e)=>{
        console.log(e.target.files);
        
    }
  const formik = useFormik({
    initialValues: {
      productName: '',
      productPrice: '',
      productQuantity: ''
    },
    validate: values => {
      const errors = {};
      
      // Product Name validation
      if (!values.productName) {
        errors.productName = 'Product name is required';
      } else if (values.productName.length < 3) {
        errors.productName = 'Product name must be at least 3 characters';
      }
      
      // Product Price validation
      if (!values.productPrice) {
        errors.productPrice = 'Product price is required';
      } else if (isNaN(values.productPrice)) {
        errors.productPrice = 'Price must be a number';
      } else if (parseFloat(values.productPrice) <= 0) {
        errors.productPrice = 'Price must be greater than 0';
      }
      
      // Product Quantity validation
      if (!values.productQuantity) {
        errors.productQuantity = 'Product quantity is required';
      } else if (isNaN(values.productQuantity)) {
        errors.productQuantity = 'Quantity must be a number';
      } else if (!Number.isInteger(parseFloat(values.productQuantity))) {
        errors.productQuantity = 'Quantity must be a whole number';
      } else if (parseInt(values.productQuantity) < 0) {
        errors.productQuantity = 'Quantity cannot be negative';
      }
      
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here
      console.log('Product added:', values);
      alert('Product added successfully! (check console)');
      resetForm();
    }
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Add New Product</h2>
              
              <form onSubmit={formik.handleSubmit}>
                {/* Product Name Field */}
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    id="productName"
                    name="productName"
                    type="text"
                    className={`form-control ${
                      formik.touched.productName && formik.errors.productName ? 'is-invalid' : ''
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.productName}
                    placeholder="Enter product name"
                  />
                  {formik.touched.productName && formik.errors.productName && (
                    <div className="invalid-feedback">{formik.errors.productName}</div>
                  )}
                </div>

                {/* Product Price Field */}
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price ($)
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      id="productPrice"
                      name="productPrice"
                      type="number"
                      step="0.01"
                      className={`form-control ${
                        formik.touched.productPrice && formik.errors.productPrice ? 'is-invalid' : ''
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.productPrice}
                      placeholder="0.00"
                    />
                    {formik.touched.productPrice && formik.errors.productPrice && (
                      <div className="invalid-feedback">{formik.errors.productPrice}</div>
                    )}
                  </div>
                </div>

                {/* Product Quantity Field */}
                <div className="mb-3">
                  <label htmlFor="productQuantity" className="form-label">
                    Product Quantity
                  </label>
                  <input
                    id="productQuantity"
                    name="productQuantity"
                    type="number"
                    className={`form-control ${
                      formik.touched.productQuantity && formik.errors.productQuantity ? 'is-invalid' : ''
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.productQuantity}
                    placeholder="Enter quantity"
                    min="0"
                  />
                  {formik.touched.productQuantity && formik.errors.productQuantity && (
                    <div className="invalid-feedback">{formik.errors.productQuantity}</div>
                  )}
                </div>


                <input type="file" name="" onChange={(e)=>handleFileChange(e)} />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Adding Product...' : 'Add Product'}
                </button>
              </form>

              {/* Back to Products Link (optional) */}
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">← Back to Products</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;