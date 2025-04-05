<script>
    import ChooseItem from './ChooseItem.vue';
</script>

<template>
    <div class="choose">
        <ChooseItem text='Let me choose some settings for my colour palette!' path='options' />
        <ChooseItem text='Just give me a random colour palette!' path='generate' />
    </div>
</template>