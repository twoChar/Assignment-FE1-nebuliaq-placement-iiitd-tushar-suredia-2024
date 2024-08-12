// tablerow.jsx
import React from 'react';

const TableRow = ({ service, filter }) => {
  const hasClient = service.client;
  const hasServer = service.server;

  return (
    <>
      {filter.side !== 'server' && hasClient && (
        <tr>
          <td rowSpan={filter.side === 'both' && hasServer ? '2' : '1'}>{service.service}</td>
          <td>{service.client.requests}</td>
          <td>{service.client.rate}</td>
          <td>{service.client.p75}</td>
          <td>{service.client.p90}</td>
          <td>{service.client.p99}</td>
          <td>{service.client.error}</td>
        </tr>
      )}
      {(filter.side === 'both' || filter.side === 'server') && hasServer && (
        <tr>
          {filter.side === 'server' && <td>{service.service}</td>}
          <td>{service.server.requests}</td>
          <td>{service.server.rate}</td>
          <td>{service.server.p75}</td>
          <td>{service.server.p90}</td>
          <td>{service.server.p99}</td>
          <td>{service.server.error}</td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
