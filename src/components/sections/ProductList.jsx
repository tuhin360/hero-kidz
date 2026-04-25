// components/sections/ProductList.jsx
"use client";

import { useState, useMemo } from "react";
import ProductCard from "../cards/ProductCard";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";

const ProductList = ({ initialProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
    sortBy: "default",
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories from products
  const categories = useMemo(() => {
    const cats = new Set(
      initialProducts.map((p) => p.category).filter(Boolean),
    );
    return Array.from(cats);
  }, [initialProducts]);

  // Filter and Search Logic
  const filteredProducts = useMemo(() => {
    let filtered = [...initialProducts];

    // Search by title
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category,
      );
    }

    // Filter by min price
    if (filters.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= Number(filters.minPrice),
      );
    }

    // Filter by max price
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= Number(filters.maxPrice),
      );
    }

    // Filter by rating
    if (filters.rating) {
      filtered = filtered.filter(
        (product) => product.ratings >= Number(filters.rating),
      );
    }

    // Sorting
    if (filters.sortBy === "price_low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price_high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "rating") {
      filtered.sort((a, b) => b.ratings - a.ratings);
    } else if (filters.sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return filtered;
  }, [initialProducts, searchTerm, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      rating: "",
      sortBy: "default",
    });
    setSearchTerm("");
  };

  const hasActiveFilters =
    Object.values(filters).some((v) => v !== "" && v !== "default") ||
    searchTerm;

  return (
    <div>
      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2"
          >
            <FaFilter />
            Filters
            {hasActiveFilters && (
              <span className="bg-primary text-white text-xs rounded-full px-2 py-0.5">
                {Object.values(filters).filter(
                  (v) => v !== "" && v !== "default",
                ).length + (searchTerm ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
             


              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="default">Default</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              
              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Minimum Rating
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange("rating", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="2">2+ Stars</option>
                  <option value="1">1+ Stars</option>
                </select>
              </div>
            </div>

            {/* Filter Actions */}
            {hasActiveFilters && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <FaTimes size={12} />
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="text-sm text-gray-500">
          Showing {filteredProducts.length} of {initialProducts.length} products
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found matching your criteria.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
