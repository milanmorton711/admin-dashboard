import React, { useEffect, useState } from "react";

const Overview = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error fetching tickets:", err));
  }, []);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "Open").length;
  const inProgress = tickets.filter((t) => t.status === "In Progress").length;
  const closed = tickets.filter((t) => t.status === "Closed").length;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <div className="grid md:grid-cols-4 gap-4">
        <Card label="Total Tickets" count={total} border="border-blue-500" />
        <Card label="Open" count={open} border="border-yellow-400" />
        <Card label="In Progress" count={inProgress} border="border-purple-400" />
        <Card label="Closed" count={closed} border="border-green-500" />
      </div>

      <div className="bg-white p-4 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Issues</h2>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border-b py-2">
            <p className="font-medium">{ticket.title}</p>
            <p className="text-sm text-gray-500">Priority: {ticket.priority}</p>
            <span
              className={`inline-block px-2 py-1 text-xs rounded ${
                ticket.status === "Open"
                  ? "bg-yellow-100 text-yellow-700"
                  : ticket.status === "In Progress"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {ticket.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ label, count, border }) => (
  <div className={`bg-white p-4 rounded shadow border-t-4 ${border}`}>
    <h2 className="text-sm text-gray-600">{label}</h2>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default Overview;
