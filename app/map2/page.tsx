'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../_components/Map'), { ssr: false });

export default function Map2() {
  return (
    <main className="relative">
      <DynamicMap center={[37.85, 32.39]} zoom={13} />
    </main>
  );
}
