import Head from 'next/head';
import DailyNasaImage from '../components/DailyNasaImage';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
        <title>NASA Daily Image</title>
        <meta name="description" content="Display the NASA daily image" />
        <link rel="icon" href="/favicon.ico" />
      
      <DailyNasaImage />
    </div>
  );
}
