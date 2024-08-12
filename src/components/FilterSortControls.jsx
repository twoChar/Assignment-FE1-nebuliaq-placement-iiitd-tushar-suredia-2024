import React from 'react';

const FilterSortControls = ({ filter, setFilter, sortConfig, setSortConfig }) => {
  const handleFilterChange = (e) => {
    setFilter({ ...filter, text: e.target.value });
  };

  const handleSideChange = (e) => {
    const side = e.target.value;
    setFilter({ ...filter, side });
    setSortConfig({ ...sortConfig, key: null, side });
  };

  const handleMetricChange = (e) => {
    setSortConfig({ ...sortConfig, key: e.target.value });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by service name..." 
        value={filter.text} 
        onChange={handleFilterChange} 
      />
      <select onChange={handleSideChange} value={filter.side}>
        <option value="both">Filter by Side (Both)</option>
        <option value="client">Client</option>
        <option value="server">Server</option>
      </select>
      <select onChange={handleMetricChange} disabled={filter.side === 'both'} value={sortConfig.key || ''}>
        <option value="">Sort by Metric</option>
        <option value="requests">Requests</option>
        <option value="rate">Rate</option>
        <option value="p75">p75</option>
        <option value="p90">p90</option>
        <option value="p99">p99</option>
        <option value="error">Error</option>
      </select>
    </div>
  );
};

export default FilterSortControls;
