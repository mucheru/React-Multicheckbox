import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicCheckbox from './features/DynamicCheckbox.tsx';

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">React Multiple Dynamic Checkboxes Example</h2>
      <DynamicCheckbox />
    </div>
  );
}

export default App;
