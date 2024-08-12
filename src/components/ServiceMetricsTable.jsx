import React, { useState } from 'react';
import TableRow from './TableRow';
import FilterSortControls from './FilterSortControls';

const ServiceMetricsTable = ({ data }) => {
  const [filter, setFilter] = useState({ text: '', side: 'both' });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending', side: 'client' });

  const filteredData = data.filter((service) => 
    service.service && service.service.toLowerCase().includes(filter.text.toLowerCase()) &&
    (filter.side === 'both' || (filter.side === 'client' && service.client) || (filter.side === 'server' && service.server))
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortConfig.key) {
      const sideA = a[sortConfig.side][sortConfig.key];
      const sideB = b[sortConfig.side][sortConfig.key];
      const compareSide = sideA < sideB ? -1 : sideA > sideB ? 1 : 0;
      return sortConfig.direction === 'ascending' ? compareSide : -compareSide;
    }
    return 0;
  });

  return (
    <div>
      <FilterSortControls
        filter={filter}
        setFilter={setFilter}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
      />
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Requests</th>
            <th>Rate</th>
            <th>P75</th>
            <th>P90</th>
            <th>P99</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((service) => (
            <TableRow key={service.service} service={service} filter={filter} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceMetricsTable;
