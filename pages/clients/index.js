import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{pathname:'clients/[id]', query:{client.id}}}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
