import React from 'react';

const TableRow = ({ service, filter }) => {
  const { client, server } = service;
  const hasClient = !!client;
  const hasServer = !!server;

  return (
    <>
      {filter.side !== 'server' && hasClient && (
        <tr className="fat-row">
          <td rowSpan={filter.side === 'both' && hasServer ? '2' : '1'} className="service-name">
            {service.service}
          </td>
          <td className="type">Client</td>
          <td>{client.requests}</td>
          <td>{client.rate}</td>
          <td>{client.p75}</td>
          <td>{client.p90}</td>
          <td>{client.p99}</td>
          <td>{client.error}</td>
        </tr>
      )}
      {(filter.side === 'both' || filter.side === 'server') && hasServer && (
        <tr className={filter.side === 'server' ? "fat-row" : "sub-row"}>
          {filter.side === 'server' && <td className="service-name">{service.service}</td>}
          <td className="type">Server</td>
          <td>{server.requests}</td>
          <td>{server.rate}</td>
          <td>{server.p75}</td>
          <td>{server.p90}</td>
          <td>{server.p99}</td>
          <td>{server.error}</td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
