import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IssueForm from '../components/IssueForm';

interface Issue {
  _id: string;
  title: string;
  description: string;
  status: string;
}

const Issues: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetchIssues();
  }, [projectId]);

  const fetchIssues = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/issues?projectId=${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIssues(response.data);
    } catch (error) {
      console.error('Failed to fetch issues:', error);
    }
  };

  return (
    <div>
      <h2>Issues</h2>
      <IssueForm projectId={projectId!} onIssueCreated={fetchIssues} />
      <ul className="list-group">
        {issues.map((issue) => (
          <li key={issue._id} className="list-group-item">
            <h5>{issue.title}</h5>
            <p>{issue.description}</p>
            <span className="badge bg-secondary">{issue.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Issues;