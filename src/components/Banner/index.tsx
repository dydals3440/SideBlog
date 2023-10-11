export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❌';
  return (
    <p
      className={`text-2xl font-bold text-center w-4/5 p-5 m-5 rounded-lg ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >{`${icon} ${message}`}</p>
  );
};

export default Banner;
