<template>

    <div>Search Page</div>

</template>


<script>
import { ref } from 'vue'
export default {
    setup(){
        const searchTerm = ref('')


        return {
            searchTerm
        }
    }
}
</script>
<style scoped></style>