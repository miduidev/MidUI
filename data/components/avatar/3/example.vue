<template>
    <div className="flex items-center space-x-3">
        <!-- Small -->
        <div
            className="flex items-center justify-center p-2 cursor-pointer size-8 bg-gray-300 rounded-full select-none">
            <span className="text-base text-gray-600 font-semibold">MU</span>
        </div>

        <!-- Medium -->
        <div
            className="flex items-center justify-center p-2 cursor-pointer size-12 bg-gray-300 rounded-full select-none">
            <span className="text-2xl text-gray-600 font-semibold">MU</span>
        </div>

        <!-- Large -->
        <div
            className="flex items-center justify-center p-2 cursor-pointer size-16 bg-gray-300 rounded-full select-none">
            <span className="text-3xl text-gray-600 font-semibold">MU</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Avatar'
}
</script>
