import React, { Suspense } from "react";

const LazyMap = React.lazy(() => import("../components/Map"));

const MVPPage = () => {
  const isSSR = typeof window === "undefined";

  return (
    <>
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMap />
        </Suspense>
      )}
    </>
  );
};

export default MVPPage;
