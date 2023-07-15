
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-4">
                <div class="animate-pulse flex space-x-4">
                    
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>

                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
                <div class=" animate-pulse rounded bg-slate-700 h-16 max-w-sm w-full mt-4"></div>
            </div>

        </>
    )
  }