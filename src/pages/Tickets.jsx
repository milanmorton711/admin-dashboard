import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Open');
  const [priority, setPriority] = useState('Low');
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleAddTicket = async () => {
    if (!title.trim()) return;
    const newTicket = {
      title,
      status,
      priority
    };
    try {
      await axios.post('/tickets', newTicket);
      setTitle('');
      setStatus('Open');
      setPriority('Low');
      fetchTickets();
    } catch (error) {
      console.error('Add error:', error);
    }
  };

  const filteredTickets = filterStatus === 'All'
    ? tickets
    : tickets.filter(ticket => ticket.status === filterStatus);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Help Desk Dashboard</h1>

      <div className="mb-6">
        <label className="font-medium mr-2">Filter by Status:</label>
        <select
          className="p-2 border rounded"
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
      </div>

      <div className="bg-white p-4 rounded shadow mb-6 max-w-md">
        <h2 className="text-lg font-semibold mb-2">Add Ticket</h2>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="mb-2">
          <label className="block font-medium mb-1">Status:</label>
          <select
            className="w-full p-2 border rounded"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block font-medium mb-1">Priority:</label>
          <select
            className="w-full p-2 border rounded"
            value={priority}
            onChange={e => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <button
          onClick={handleAddTicket}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Ticket
        </button>
      </div>

      <div>
        {filteredTickets.length > 0 ? (
          <ul className="space-y-3">
            {filteredTickets.map(ticket => (
              <li key={ticket.id} className="border p-4 rounded shadow bg-white">
                <p><strong>Title:</strong> {ticket.title}</p>
                <p><strong>Status:</strong> {ticket.status}</p>
                <p><strong>Priority:</strong> {ticket.priority}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default Tickets;
