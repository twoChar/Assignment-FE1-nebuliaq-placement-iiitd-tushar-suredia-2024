import React, { useState, useMemo } from 'react';
import TableRow from './TableRow';
import FilterSortControls from './FilterSortControls';
import '../App.css';

const ServiceMetricsTable = ({ data }) => {
  const [filter, setFilter] = useState({ text: '', side: 'both' });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending', side: 'client' });

  const filteredData = useMemo(() => {
    return data.filter(service => 
      service.service.toLowerCase().includes(filter.text.toLowerCase()) &&
      (filter.side === 'both' || (filter.side === 'client' && service.client) || (filter.side === 'server' && service.server))
    );
  }, [data, filter]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return filteredData.sort((a, b) => {
      const sideA = a[sortConfig.side][sortConfig.key];
      const sideB = b[sortConfig.side][sortConfig.key];
      const compare = sideA < sideB ? -1 : sideA > sideB ? 1 : 0;
      return sortConfig.direction === 'ascending' ? compare : -compare;
    });
  }, [filteredData, sortConfig]);

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
            <th>Type</th>
            <th>Requests</th>
            <th>Rate</th>
            <th>P75</th>
            <th>P90</th>
            <th>P99</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(service => (
            <TableRow key={service.service} service={service} filter={filter} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceMetricsTable;
