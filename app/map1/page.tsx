'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../_components/Map'), { ssr: false });

export default function Map1() {
  return (
    <main className="relative">
      <DynamicMap center={[37.81, 29.034]} zoom={13} />
    </main>
  );
}
