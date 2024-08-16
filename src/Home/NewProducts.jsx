import ProductCard from "./ProductCard";


export default function NewProducts() {

  const productsData = [
    {
      productName: "Wireless Mouse",
      productImage: "https://i.ibb.co/6nZR9z6/image.png",
      description: "A high-precision wireless mouse with ergonomic design.",
      price: 29.99,
      category: "Electronics",
      ratings: 4.5,
      creationDate: "2024-07-20T14:00:00Z",
      brandName: "Logitech"
    },
    {
      productName: "Bluetooth Headphones",
      productImage: "https://i.ibb.co/jbNFGRt/image.png",
      description: "Noise-canceling Bluetooth headphones with 20-hour battery life.",
      price: 79.99,
      category: "Electronics",
      ratings: 4.7,
      creationDate: "2024-07-22T10:30:00Z",
      brandName: "Sony"
    },
    {
      productName: "Smart Watch",
      productImage: "https://i.ibb.co/8NGQMW0/image.png",
      description: "Feature-packed smart watch with fitness tracking capabilities.",
      price: 149.99,
      category: "Electronics",
      ratings: 4.6,
      creationDate: "2024-07-25T09:00:00Z",
      brandName: "Apple"
    },
    {
      productName: "Gaming Laptop",
      productImage: "https://i.ibb.co/pbdd84k/image.png",
      description: "High-performance gaming laptop with advanced graphics card.",
      price: 1199.99,
      category: "Computers",
      ratings: 4.8,
      creationDate: "2024-08-01T15:45:00Z",
      brandName: "Asus"
    },
    {
      productName: "Ergonomic Office Chair",
      productImage: "https://i.ibb.co/Y7WSMJ4/Stock-Cake-Cozy-Home-Office-1723792212.jpg",
      description: "Comfortable office chair with adjustable features.",
      price: 199.99,
      category: "Furniture",
      ratings: 4.4,
      creationDate: "2024-08-05T11:20:00Z",
      brandName: "Herman Miller"
    },
    {
      productName: "4K Television",
      productImage: "https://i.ibb.co/kJr6T6L/image.png",
      description: "Ultra HD 4K television with smart features and HDR support.",
      price: 499.99,
      category: "Electronics",
      ratings: 4.9,
      creationDate: "2024-08-10T18:00:00Z",
      brandName: "Samsung"
    },
    {
      productName: "Bluetooth Speaker",
      productImage: "https://i.ibb.co/RCHRKjs/image.png",
      description: "Portable Bluetooth speaker with high sound quality.",
      price: 49.99,
      category: "Electronics",
      ratings: 4.6,
      creationDate: "2024-08-12T13:00:00Z",
      brandName: "JBL"
    },
    {
      productName: "Leather Wallet",
      productImage: "https://i.ibb.co/tsrWPxC/Stock-Cake-Leather-Wallet-Held-1723792332.jpg",
      description: "Stylish leather wallet with multiple card slots.",
      price: 59.99,
      category: "Accessories",
      ratings: 4.3,
      creationDate: "2024-08-14T08:15:00Z",
      brandName: "Fossil"
    },
    {
      productName: "Digital Camera",
      productImage: "https://i.ibb.co/kMSzkv0/image.png",
      description: "High-resolution digital camera with multiple shooting modes.",
      price: 799.99,
      category: "Electronics",
      ratings: 4.7,
      creationDate: "2024-08-16T17:30:00Z",
      brandName: "Canon"
    },
    {
      productName: "Fitness Tracker",
      productImage: "https://i.ibb.co/WHVYxcs/image.png",
      description: "Wearable fitness tracker with heart rate monitoring.",
      price: 89.99,
      category: "Electronics",
      ratings: 4.5,
      creationDate: "2024-08-18T12:00:00Z",
      brandName: "Fitbit"
    },
    {
      productName: "Coffee Maker",
      productImage: "https://i.ibb.co/WHVYxcs/image.png",
      description: "Automatic coffee maker with programmable settings.",
      price: 69.99,
      category: "Home Appliances",
      ratings: 4.4,
      creationDate: "2024-08-20T14:00:00Z",
      brandName: "Nespresso"
    },
    {
      productName: "Smartphone",
      productImage: "https://i.ibb.co/ZWxW973/image.png",
      description: "Latest smartphone with advanced features and high performance.",
      price: 699.99,
      category: "Electronics",
      ratings: 4.8,
      creationDate: "2024-08-22T10:45:00Z",
      brandName: "Samsung"
    },
    {
      productName: "Gaming Console",
      productImage: "https://i.ibb.co/qg81LTC/image.png",
      description: "Latest gaming console with a library of popular games.",
      price: 399.99,
      category: "Electronics",
      ratings: 4.7,
      creationDate: "2024-08-25T16:00:00Z",
      brandName: "Sony"
    },
    {
      productName: "Kitchen Blender",
      productImage: "https://i.ibb.co/FnR2Qt3/image.png",
      description: "High-speed kitchen blender with multiple blending modes.",
      price: 89.99,
      category: "Home Appliances",
      ratings: 4.6,
      creationDate: "2024-08-28T13:30:00Z",
      brandName: "Ninja"
    },
    {
      productName: "Electric Toothbrush",
      productImage: "https://i.ibb.co/P4YrSt7/image.png",
      description: "Rechargeable electric toothbrush with multiple brushing modes.",
      price: 59.99,
      category: "Health & Personal Care",
      ratings: 4.5,
      creationDate: "2024-08-30T09:00:00Z",
      brandName: "Oral-B"
    },
    {
      productName: "Air Fryer",
      productImage: "https://i.ibb.co/CsX5k7p/image.png",
      description: "Healthy air fryer with adjustable temperature control.",
      price: 119.99,
      category: "Home Appliances",
      ratings: 4.8,
      creationDate: "2024-09-02T11:15:00Z",
      brandName: "Philips"
    },
    {
      productName: "Tablet",
      productImage: "https://i.ibb.co/bBqhBL0/image.png",
      description: "Versatile tablet with high-resolution display and long battery life.",
      price: 349.99,
      category: "Electronics",
      ratings: 4.6,
      creationDate: "2024-09-05T14:00:00Z",
      brandName: "Apple"
    },
    {
      productName: "Portable Charger",
      productImage: "https://i.ibb.co/42dps5P/image.png",
      description: "Compact portable charger with fast charging capabilities.",
      price: 29.99,
      category: "Accessories",
      ratings: 4.4,
      creationDate: "2024-09-08T10:30:00Z",
      brandName: "Samsung"
    },
    {
      productName: "Home Security Camera",
      productImage: "https://i.ibb.co/yXxkdQL/image.png",
      description: "Smart home security camera with motion detection.",
      price: 129.99,
      category: "Electronics",
      ratings: 4.7,
      creationDate: "2024-09-10T12:00:00Z",
      brandName: "Samsung"
    },
    {
      productName: "Electric Kettle",
      productImage: "https://i.ibb.co/Bj8Cqss/image.png",
      description: "Fast boiling electric kettle with auto shut-off feature.",
      price: 39.99,
      category: "Home Appliances",
      ratings: 4.3,
      creationDate: "2024-09-12T15:30:00Z",
      brandName: "Cuisinart"
    },
    {
      productName: "Wireless Earbuds",
      productImage: "https://i.ibb.co/8xfY82m/image.png",
      description: "Comfortable wireless earbuds with noise cancellation.",
      price: 79.99,
      category: "Electronics",
      ratings: 4.6,
      creationDate: "2024-09-15T08:45:00Z",
      brandName: "Havit"
    },
    {
      productName: "Office Desk",
      productImage: "https://i.ibb.co/SQMqJsy/image.png",
      description: "Spacious office desk with built-in storage.",
      price: 249.99,
      category: "Furniture",
      ratings: 4.4,
      creationDate: "2024-09-18T13:00:00Z",
      brandName: "Ikea"
    },
    {
      productName: "Digital Thermometer",
      productImage: "https://i.ibb.co/98ZsgSc/image.png",
      description: "Accurate digital thermometer for quick temperature readings.",
      price: 19.99,
      category: "Health & Personal Care",
      ratings: 4.4,
      creationDate: "2024-09-20T11:30:00Z",
      brandName: "Baseus"
    },
    {
      productName: "Noise-Canceling Headphones",
      productImage: "https://i.ibb.co/gPBYhTY/image.png",
      description: "Premium noise-canceling headphones with superior sound quality.",
      price: 249.99,
      category: "Electronics",
      ratings: 4.8,
      creationDate: "2024-09-22T10:00:00Z",
      brandName: "Samsung"
    },
    {
      productName: "High-Speed Blender",
      productImage: "https://i.ibb.co/S3nWGH3/image.png",
      description: "High-speed blender for smoothies and purees.",
      price: 149.99,
      category: "Home Appliances",
      ratings: 4.6,
      creationDate: "2024-09-25T14:00:00Z",
      brandName: "Panasonic"
    },
    {
      productName: "Compact Refrigerator",
      productImage: "https://i.postimg.cc/mkKbX8cG/image.png",
      description: "Space-saving compact refrigerator with freezer compartment.",
      price: 219.99,
      category: "Home Appliances",
      ratings: 4.5,
      creationDate: "2024-09-28T09:15:00Z",
      brandName: "Walton"
    },
    {
      productName: "Cordless Drill",
      productImage: "https://i.ibb.co/VHws58m/image.png",
      description: "Versatile cordless drill with multiple speed settings.",
      price: 89.99,
      category: "Tools",
      ratings: 4.7,
      creationDate: "2024-10-01T13:30:00Z",
      brandName: "DeWalt"
    },
    {
      productName: "Laptop Stand",
      productImage: "https://i.ibb.co/p2jLhp4/image.png",
      description: "Adjustable laptop stand for ergonomic typing.",
      price: 29.99,
      category: "Office Supplies",
      ratings: 4.3,
      creationDate: "2024-10-03T11:00:00Z",
      brandName: "Baseus"
    },
    {
      productName: "Wireless Keyboard",
      productImage: "https://i.ibb.co/p2jLhp4/image.png",
      description: "Slim wireless keyboard with quiet keys.",
      price: 49.99,
      category: "Electronics",
      ratings: 4.4,
      creationDate: "2024-10-05T15:00:00Z",
      brandName: "Logitech"
    },
    {
      productName: "Wall Mounted Shelves",
      productImage: "https://i.postimg.cc/Bn59xhNK/Stock-Cake-Wall-mounted-Plant-Shelves-1723795530.jpg",
      description: "Stylish wall-mounted shelves for home decor and storage.",
      price: 99.99,
      category: "Furniture",
      ratings: 4.5,
      creationDate: "2024-10-07T10:30:00Z",
      brandName: "Wayfair"
    },
    {
      productName: "Digital Scale",
      productImage: "https://i.postimg.cc/mZF8KPML/image.png",
      description: "Accurate digital scale for precise measurements.",
      price: 24.99,
      category: "Health & Personal Care",
      ratings: 4.4,
      creationDate: "2024-10-10T12:00:00Z",
      brandName: "Walton"
    },
    {
      productName: "Outdoor Grill",
      productImage: "https://i.postimg.cc/tJ2TBq9L/image.png",
      description: "Heavy-duty outdoor grill with multiple burners.",
      price: 399.99,
      category: "Outdoor",
      ratings: 4.6,
      creationDate: "2024-10-12T14:30:00Z",
      brandName: "Amazon"
    },
    {
      productName: "Electric Blanket",
      productImage: "https://i.postimg.cc/GpCCs0CY/image.png",
      description: "Cozy electric blanket with adjustable heat settings.",
      price: 89.99,
      category: "Home Appliances",
      ratings: 4.5,
      creationDate: "2024-10-15T16:00:00Z",
      brandName: "Amazon"
    },
    {
      productName: "Yoga Mat",
      productImage: "https://i.postimg.cc/YCwrQLNh/image.png",
      description: "Durable yoga mat with non-slip surface.",
      price: 39.99,
      category: "Sports & Outdoors",
      ratings: 4.4,
      creationDate: "2024-10-18T09:45:00Z",
      brandName: "Rfl"
    },
    {
      productName: "Travel Backpack",
      productImage: "https://i.postimg.cc/c1n6YWqk/image.png",
      description: "Versatile travel backpack with multiple compartments.",
      price: 119.99,
      category: "Accessories",
      ratings: 4.6,
      creationDate: "2024-10-20T12:30:00Z",
      brandName: "Hiking"
    },
    {
      productName: "Electric Screwdriver",
      productImage: "https://i.postimg.cc/nhzJ4KjV/image.png",
      description: "Compact electric screwdriver with rechargeable battery.",
      price: 59.99,
      category: "Tools",
      ratings: 4.5,
      creationDate: "2024-10-23T10:00:00Z",
      brandName: "Walton"
    },
    {
      productName: "Smart Home Hub",
      productImage: "https://i.postimg.cc/X7Kc0h8q/image.png",
      description: "Central hub for controlling smart home devices.",
      price: 129.99,
      category: "Electronics",
      ratings: 4.7,
      creationDate: "2024-10-25T14:00:00Z",
      brandName: "Amazon"
    },
    {
      productName: "Automatic Pet Feeder",
      productImage: "https://i.postimg.cc/bJY4QkwH/image.png",
      description: "Programmable pet feeder with automatic portion control.",
      price: 89.99,
      category: "Pet Supplies",
      ratings: 4.6,
      creationDate: "2024-10-27T11:30:00Z",
      brandName: "PetSafe"
    },
    {
      productName: "Digital Photo Frame",
      productImage: "https://i.postimg.cc/YSCJFQ9N/image.png",
      description: "Digital photo frame with slideshow functionality.",
      price: 79.99,
      category: "Electronics",
      ratings: 4.4,
      creationDate: "2024-10-30T13:00:00Z",
      brandName: "Nikon"
    },
    {
      productName: "Stand Mixer",
      productImage: "https://i.postimg.cc/nV40HCVn/image.png",
      description: "High-power stand mixer with multiple attachments.",
      price: 299.99,
      category: "Home Appliances",
      ratings: 4.8,
      creationDate: "2024-11-02T09:30:00Z",
      brandName: "Walton"
    },
   
  ];
  
      
    
  return (
    <div >
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>
                New Products {productsData.length}
            </h2>
            <div className='grid grid-cols-1 place-items-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
{productsData.map((item,index)=>(
    <ProductCard
    key={index}
    productImage={item.productImage}
    productName={item. productName}
    description={item.description}
    ratings={item.ratings}
    price={item.price}
    brandName={item.brandName}
    creationDate={item.creationDate}
    category={item.category}
    />
))}
            </div>
        </div>
    </div>
  )
}


// [
//     {
//         img: 'https://i.ibb.co/bgG9g0v/5102.jpg',
//         title: "Jacket",
//         desc: "Men Yarn Fleece Full-Zip",
//         rating: 4,
//         price: "45.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/q7RPkrx/3378.jpg",
//         title: "Skirt",
//         desc: "Black Floral Wrap Midi Skirt",
//         rating: 2,
//         price: "55.00",
//         category: "Women's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/XszSYnq/2148235365.jpg",
//         title: "Party Wear",
//         desc: "Women's Party Wear Shoes",
//         rating: 1,
//         price: "25.00",
//         category: "Women's Footwear"
//     },
//     {
//         img: "https://i.ibb.co/bzL3Qty/2147710378-1.jpg",
//         title: "Shirt",
//         desc: "Pure Garment Dyed Cotton Skirt",
//         rating: 5,
//         price: "50.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/51ygz1b/2149745032.jpg",
//         title: "Jacket",
//         desc: "Men Yarn Fleece Full-Zip",
//         rating: 4,
//         price: "45.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/rt3NTLZ/2148884921.jpg",
//         title: "Dress",
//         desc: "Elegant Evening Dress",
//         rating: 4,
//         price: "120.00",
//         category: "Women's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/LgYDxv7/687.jpg",
//         title: "Watch",
//         desc: "Luxury Leather Watch",
//         rating: 5,
//         price: "250.00",
//         category: "Accessories"
//     },
//     {
//         img: "https://i.ibb.co/qkxSNLR/2148224947.jpg",
//         title: "Boots",
//         desc: "Leather Winter Boots",
//         rating: 4,
//         price: "85.00",
//         category: "Men's Footwear"
//     },
//     {
//         img: "https://i.ibb.co/pQWGw5p/2151046461.jpg",
//         title: "Handbag",
//         desc: "Designer Handbag",
//         rating: 5,
//         price: "200.00",
//         category: "Women's Accessories"
//     },
//     {
//         img: "https://i.ibb.co/R6QP8ND/33678.jpg",
//         title: "Belt",
//         desc: "Genuine Leather Belt",
//         rating: 3,
//         price: "35.00",
//         category: "Men's Accessories"
//     },
//     {
//         img: "https://i.ibb.co/5ny70Jk/2147957050.jpg",
//         title: "Heels",
//         desc: "High Heeled Shoes",
//         rating: 4,
//         price: "75.00",
//         category: "Women's Footwear"
//     },
//     {
//         img: "https://i.ibb.co/CzxfyMn/2150744034.jpg",
//         title: "Hat",
//         desc: "Stylish Fedora Hat",
//         rating: 4,
//         price: "40.00",
//         category: "Accessories"
//     },
//     {
//         img: "https://i.ibb.co/HCsk6gc/2150264152.jpg",
//         title: "Jeans",
//         desc: "Slim Fit Denim Jeans",
//         rating: 4,
//         price: "60.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/WpH7t4P/2147704079.jpg",
//         title: "T-Shirt",
//         desc: "Graphic Cotton T-Shirt",
//         rating: 4,
//         price: "30.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/DkpmFGG/2149670635.jpg",
//         title: "Sunglasses",
//         desc: "Polarized Sunglasses",
//         rating: 4,
//         price: "90.00",
//         category: "Accessories"
//     },
//     {
//         img: "https://i.ibb.co/rb7NfDR/2149745036.jpg",
//         title: "Winter Jacket",
//         desc: "Waterproof Insulated Jacket",
//         rating: 5,
//         price: "150.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/VSn2QD7/2147874087.jpg",
//         title: "Bracelet",
//         desc: "Gold Plated Bracelet",
//         rating: 5,
//         price: "120.00",
//         category: "Jewelry"
//     },
//     {
//         img: "https://i.ibb.co/wMBSkBr/2149263167.jpg",
//         title: "Necklace",
//         desc: "Silver Pendant Necklace",
//         rating: 5,
//         price: "85.00",
//         category: "Jewelry"
//     },
//     {
//         img: "https://i.ibb.co/5rDFxDK/2149718474.jpg",
//         title: "Coat",
//         desc: "Wool Blend Overcoat",
//         rating: 4,
//         price: "180.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/F5GzX7S/2151005726.jpg",
//         title: "Sneakers",
//         desc: "Casual Running Shoes",
//         rating: 4,
//         price: "65.00",
//         category: "Men's Footwear"
//     },
//     {
//         img: "https://i.ibb.co/wNRcdM1/2149460540.jpg",
//         title: "Scarf",
//         desc: "Cashmere Scarf",
//         rating: 5,
//         price: "55.00",
//         category: "Accessories"
//     },
//     {
//         img: "https://i.ibb.co/DbpwkCc/38473.jpg",
//         title: "Gloves",
//         desc: "Leather Winter Gloves",
//         rating: 4,
//         price: "45.00",
//         category: "Men's Accessories"
//     },
//     {
//         img: "https://i.ibb.co/59JxRMG/14987.jpg",
//         title: "Suit",
//         desc: "Tailored Business Suit",
//         rating: 5,
//         price: "450.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/ZhvNzQw/691.jpg",
//         title: "Formal Shoes",
//         desc: "Men's Leather Oxford Shoes",
//         rating: 5,
//         price: "95.00",
//         category: "Men's Footwear"
//     },
//     {
//         img: "https://i.ibb.co/p1MkKxn/2149649123.jpg",
//         title: "Earrings",
//         desc: "Diamond Stud Earrings",
//         rating: 5,
//         price: "300.00",
//         category: "Jewelry"
//     },
//     {
//         img: "/https://i.ibb.co/xMwnKrm/3316.jpg",
//         title: "Blazer",
//         desc: "Slim Fit Casual Blazer",
//         rating: 4,
//         price: "110.00",
//         category: "Men's Clothing"
//     },
//     {
//         img: "https://i.ibb.co/NWmKFqs/2149460019.jpg",
//         title: "Sandals",
//         desc: "Comfortable Summer Sandals",
//         rating: 4,
//         price: "40.00",
//         category: "Women's Footwear"
//     },
//     {
//         img: "/wallet.jpg",
//         title: "Wallet",
//         desc: "Leather Bifold Wallet",
//         rating: 4,
//         price: "45.00",
//         category: "Men's Accessories"
//     },
//     {
//         img: "/headphones.jpg",
//         title: "Headphones",
//         desc: "Wireless Noise Cancelling Headphones",
//         rating: 5,
//         price: "150.00",
//         category: "Electronics"
//     },
//     {
//         img: "/laptop.jpg",
//         title: "Laptop",
//         desc: "15-inch Gaming Laptop",
//         rating: 5,
//         price: "1200.00",
//         category: "Electronics"
//     },
//     {
//         img: "/phone.jpg",
//         title: "Smartphone",
//         desc: "Latest Android Smartphone",
//         rating: 4,
//         price: "800.00",
//         category: "Electronics"
//     },
//     {
//         img: "/tablet.jpg",
//         title: "Tablet",
//         desc: "10-inch Tablet with Stylus",
//         rating: 4,
//         price: "400.00",
//         category: "Electronics"
//     },
//     {
//         img: "/camera.jpg",
//         title: "Camera",
//         desc: "Digital SLR Camera",
//         rating: 5,
//         price: "600.00",
//         category: "Electronics"
//     },
//     {
//         img: "/blender.jpg",
//         title: "Blender",
//         desc: "High-Speed Kitchen Blender",
//         rating: 4,
//         price: "99.00",
//         category: "Home Appliances"
//     },
//     {
//         img: "/vacuum.jpg",
//         title: "Vacuum Cleaner",
//         desc: "Cordless Stick Vacuum Cleaner",
//         rating: 5,
//         price: "150.00",
//         category: "Home Appliances"
//     },
//     {
//         img: "/microwave.jpg",
//         title: "Microwave Oven",
//         desc: "Countertop Microwave with Grill",
//         rating: 4,
//         price: "120.00",
//         category: "Home Appliances"
//     },
//     {
//         img: "/refrigerator.jpg",
//         title: "Refrigerator",
//         desc: "Double Door Refrigerator",
//         rating: 5,
//         price: "900.00",
//         category: "Home Appliances"
//     },
//     {
//         img: "/washingmachine.jpg",
//         title: "Washing Machine",
//         desc: "Front Load Washing Machine",
//         rating: 5,
//         price: "700.00",
//         category: "Home Appliances"
//     }
// ];