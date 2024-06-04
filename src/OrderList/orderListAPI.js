import axios from 'axios';

const API_BASE_URL ="https://localhost/wordpress/wp-json/wc/v3/";
let defaultHeaders = {
  params: {},
  withCredentials: true,
  auth: {
      username: "ck_5603c6477159f6a1a5f95ceece848d50447f73e0",
      password: "cs_cd37c8e2f68919a3f5c881fdfb42412dad24ab8f"
  }
};


// Fetch all orders
export const getAllOrderList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}orders`,);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


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

export const postAllOrderList = async () => {
    try {
      const response = await axios.post(`localhost/wordpress/wp-json/wc/v3/orders`,data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };




// Replace these with your actual API keys
const consumerKey = 'ck_a923e2da3ad20a23e3b62de287db67af232db022';
const consumerSecret = 'cs_54e8830e3122a5019beb24459a97a4161c7cc025';

const woocommerceClient = axios.create({
  baseURL: 'http://localhost/wordpress/wp-json/wc/v3',
  auth: {
    username: consumerKey,
    password: consumerSecret,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});



export default woocommerceClient;

