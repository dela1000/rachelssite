import loading from 'src/assets/loading.png';

const Loading = () => {
  return (
    <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center">
      <img src={loading} alt="Loading" className="w-11 h-11 animate-spin" />
    </div>
  );
};

export default Loading;
