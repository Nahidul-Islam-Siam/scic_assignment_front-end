/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function NewProducts({ product = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // [min, max] price
  const [sortOption, setSortOption] = useState(""); // "price-asc", "price-desc", "date-newest"
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 8;

  // Debounce search input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      applyFiltersAndSort();
    }, 300); // 300ms debounce time

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, selectedBrand, selectedCategory, priceRange, sortOption]);

  const applyFiltersAndSort = () => {
    setIsLoading(true);
    const filtered = Array.isArray(product)
      ? product
          .filter((item) =>
            item.productName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((item) =>
            selectedBrand ? item.brandName === selectedBrand : true
          )
          .filter((item) =>
            selectedCategory ? item.category === selectedCategory : true
          )
          .filter(
            (item) =>
              item.price >= priceRange[0] && item.price <= priceRange[1]
          )
      : [];

    const sorted = filtered.sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "date-newest")
        return new Date(b.creationDate) - new Date(a.creationDate);
      return 0;
    });

    setFilteredProducts(sorted);
    setIsLoading(false);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 m-1 border ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          aria-label={`Go to page ${i}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border"
        />

        {/* Brand Filter */}
        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
          className="mb-4 p-2 border"
        >
          <option value="">All Brands</option>
          {Array.isArray(product) &&
            [...new Set(product.map((item) => item.brandName))].map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
        </select>

        {/* Category Filter */}
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="mb-4 p-2 border"
        >
          <option value="">All Categories</option>
          {Array.isArray(product) &&
            [...new Set(product.map((item) => item.category))].map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
        </select>

        {/* Price Range Filter */}
        <div className="mb-4">
          <input
            type="number"
            placeholder="Min price"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="p-2 border"
          />
          <input
            type="number"
            placeholder="Max price"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="p-2 border"
          />
        </div>

        {/* Sorting */}
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="mb-4 p-2 border"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="date-newest">Date Added: Newest First</option>
        </select>

        {/* Product Grid */}
        {isLoading ? (
          <div>Loading products...</div>
        ) : currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {currentProducts.map((item) => (
              <ProductCard
                key={item._id}
                productImage={item.productImage}
                productName={item.productName}
                description={item.description}
                ratings={item.ratings}
                price={item.price}
                brandName={item.brandName}
                creationDate={item.creationDate}
                category={item.category}
              />
            ))}
          </div>
        ) : (
          <div>No products found.</div>
        )}

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">{renderPageNumbers()}</div>
      </div>
    </div>
  );
}
