import React, { useEffect } from 'react'
import "./orderList.css"
import woocommerceClient, { getAllOrderList, postAllOrderList } from './orderListAPI'

export const OrderList = () => {
    // useEffect(()=>{
    //     getAllOrderList()
    // },[])


    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await woocommerceClient.get('/products');
          // setProducts(response.data);
        } catch (error) {
          // setError(error);
        } finally {
          // setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555"
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US"
      },
      line_items: [
        {
          product_id: 93,
          quantity: 2
        },
        {
          product_id: 22,
          variation_id: 23,
          quantity: 1
        }
      ],
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00"
        }
      ]
    };

    const fetchProducts = async () => {
      try {
        const response = await woocommerceClient.post('/products',data);
        // setProducts(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };
    const POST=()=>{
      fetchProducts()
    }
  return (
    <div onClick={POST}>post</div>
  )
}
