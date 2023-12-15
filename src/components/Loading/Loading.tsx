import loading from 'src/assets/loading.png';

const Loading = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center min-w-fit">
      <img src={loading} alt="Loading" className="w-11 h-11 animate-spin" />
    </div>
  );
};

export default Loading;
