import axios from 'axios';
import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ProductDetails = () => {
    const {user} = useAuth();

    const [email , setEmail] = useState(user.email);
    const [name , setName] = useState(user.displayName);
    const [phone , setPhone] = useState('');
    const [address , setAddress] = useState('');

    const {id} = useParams();
    const [product , setProduct] = useState({});
    useEffect( () => {
        axios.get(`https://immense-thicket-11021.herokuapp.com/product/${id}`)
        .then(result => {
            setProduct(result.data);
        })
    } , [id]);
    const {img , title , desc , price} = product;

    //handle buy now form
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handlePhoneNum = e => {
        setPhone(e.target.value);
    }

    const handleAddress = e => {
        setAddress(e.target.value);
    }

    const handleSubmit = e => {
        
        const order = {
            email,
            productId : id,
            name, 
            phone,
            address,
            status: false,
        }
        axios.post('https://immense-thicket-11021.herokuapp.com/order', { order })
        .then( res => {
            console.log(res);
        })
        // console.log(phone , address , name , email);
        e.preventDefault();
    }
    return (
        <>
            <Header></Header>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={img} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <h1 className="text-start">{title}</h1>
                        <h4 className="text-start">Price: ${price}</h4>
                        <p className="text-start">{desc}</p>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleEmail} value={email} type="email" className="form-control mb-2" placeholder="Your Email"/>
                            <input onChange={handleName} value={name} type="text" className="form-control mb-2" placeholder="Your Name"/>
                            <input onBlur={handlePhoneNum} type="number" className="form-control mb-2" placeholder="Your Phone Number"/>
                            <textarea  onBlur={handleAddress} type="text" className="form-control mb-2" placeholder="Your Address"></textarea>
                            <button className="btn btn-danger" type="submit">Buy Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ProductDetails;