<template>
    <div
        class="border-2 border-[#D32F2F] bg-[#111111] px-5 py-3 gap-[10px] rounded-[10px] flex items-center justify-start min-w-max">
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.125 9.6875L10 11.5625M10 11.5625L11.875 13.4375M10 11.5625L11.875 9.6875M10 11.5625L8.125 13.4375M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                stroke="#D32F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <p class="text-[#D32F2F] text-[16px]">
            This is an error variant of the alert!
        </p>
    </div>
</template>

<script>
export default {
    name: 'ErrorAlert'
}
</script>
