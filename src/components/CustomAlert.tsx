
function CustomAlert({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <div className="text-xl font-semibold">{message}</div>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomAlert;
