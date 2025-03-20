const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-600">Jira Clone</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to Jira Clone</h2>
        <p className="text-gray-700">
          This is your dashboard. You can start managing your projects here.
        </p>
      </div>
    </div>
  );
};

export default Home;
