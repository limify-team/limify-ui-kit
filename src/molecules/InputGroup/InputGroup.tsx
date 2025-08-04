export const InputGroup = () => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};
