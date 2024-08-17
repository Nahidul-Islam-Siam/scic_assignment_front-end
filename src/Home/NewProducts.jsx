import { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";

export default function NewProducts({ product = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 8;

  const applyFiltersAndSort = useCallback(() => {
    setIsLoading(true);

    const filtered = product
      .filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((item) => (selectedBrand ? item.brandName === selectedBrand : true))
      .filter((item) =>
        selectedCategory ? item.category === selectedCategory : true
      )
      .filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]);

    const sorted = filtered.sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "date-newest")
        return new Date(b.creationDate) - new Date(a.creationDate);
      return 0;
    });

    setFilteredProducts(sorted);
    setIsLoading(false);
  }, [
    product,
    searchTerm,
    selectedBrand,
    selectedCategory,
    priceRange,
    sortOption,
  ]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      applyFiltersAndSort();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [applyFiltersAndSort]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (currentPage > 1) {
      pageNumbers.push(
        <button
          key="prev"
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-4 py-2 m-1 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          aria-label="Go to previous page"
        >
          Previous
        </button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-4 py-2 m-1 border rounded-lg ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
          } transition`}
          aria-label={`Go to page ${i}`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pageNumbers.push(
        <button
          key="next"
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-4 py-2 m-1 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          aria-label="Go to next page"
        >
          Next
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="container mx-auto pt-16 px-4">
      <h2 className="font-bold text-3xl text-gray-800 pb-6">New Products</h2>

      <div className="flex  gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />

        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
          className="p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          <option value="">All Brands</option>
          {Array.isArray(product) &&
            [...new Set(product.map((item) => item.brandName))].map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
        </select>

        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          <option value="">All Categories</option>
          {Array.isArray(product) &&
            [...new Set(product.map((item) => item.category))].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min price"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
          <input
            type="number"
            placeholder="Max price"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          />
        </div>

        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          <option value="" disabled className="text-gray-400">
            Sort by
          </option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="date-newest">Date Added: Newest First</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-500">Loading products...</div>
      ) : currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        <div className="text-center text-gray-500">No products found.</div>
      )}

      <div className="flex justify-center mt-8 space-x-1">
        {renderPageNumbers()}
      </div>
    </div>
  );
}
