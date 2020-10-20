import React, { lazy, Suspense } from "react"

const LazyMd = lazy(() => import("./LazyMd"));

const LazyItem = () => (
	<div>
		<Suspense fallback={<p>loading ...</p>} >
			<LazyMd test={"test"}/>
		</Suspense>
	</div>
)

export default LazyItem