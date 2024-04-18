<template>
    <div className="flex flex-col bg-slate-950 text-white min-h-screen">
        <Navbar />
        <section className="p-6">
            <slot />
        </section>
    </div>
</template>