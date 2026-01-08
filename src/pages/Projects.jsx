import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="page">
      <h2>Projects</h2>
      <p>Show projects here with links later.</p>
      <Link to="/projects/tip-calculator">Tip Calculator</Link>
      <ul>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
}
