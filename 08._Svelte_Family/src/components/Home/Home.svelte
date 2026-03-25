<script>
    import { fridgeMessages } from '../../stores/fridgeStore';

</script>

{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.name || "Household"}: {fridgeMessage.message}</p>
{/each}

<!-- Referer ind i <home> i App.svelte -->
<slot></slot>

<div id="welcome-mat">
    <p>Go away!</p>
</div>

<!-- CSS styling tag, man kan også tage <p> osv -->
<style>
    #welcome-mat {
        font-weight: bold;
        color: rgb(236, 237, 237);
        background-color: brown;
        margin: 0 20em 0 20em;
        padding: 2em;
        border-radius: 0 0 2em 2em;
    }
</style>