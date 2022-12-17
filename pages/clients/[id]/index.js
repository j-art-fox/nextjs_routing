import { useRouter } from "next/router";
import React from "react";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Client's Project's Page</h1>
    </div>
  );
};

export default ClientProjectsPage;
