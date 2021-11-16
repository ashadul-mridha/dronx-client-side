import React from 'react';
import { Link } from 'react-router-dom';


const AllProducts = ({addProduct}) => {

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="bg-danger py-3">
                    <h1>All Products</h1>
                </div>
            </div>
            <div className="col-md-12 my-2">
                <Link to={addProduct} className="btn btn-danger text-start">Add products</Link>
                <table className="table table-striped table-hover my-3">
                    <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;