<script>
    let { name, familySheep, isGirl, onShowLove, onEatCookie, drinkPantry = $bindable() } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let fridgeMessageInput = $state("");

    function handleSubmitFridgeMessage() {
        const fridgeMessageToCreate = {
            name,
            message: fridgeMessageInput
        };
        $fridgeMessages.push(fridgeMessageToCreate);
        fridgeMessages.set($fridgeMessages);
        fridgeMessageInput = "";
    }

</script>


<!-- Hvordan man dynamisk styler -->
<!-- Læg mærke til DOM i chrome. Hvis is-girl={true} får alle komponenter det, 
 men hvis is-girl={isGirl} så er det kun "Mikkel", fordi han står som true i App.svelte -->
 <!-- is-boy tager alle som IKKE er isGirl og markerer dem som true (tjek dom) -->
<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h3>I'm just a child known as {name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show love</button>

<button onclick={onEatCookie}>Eat cookie</button>

<button onclick={() => drinkPantry.pop()}>Drink up</button>

<br>
<input bind:value={fridgeMessageInput} placeholder="Type your fridge message...">
<button onclick={handleSubmitFridgeMessage}>Write the fridge message</button>


<style>
    div {
        color: black;
    }

    .black-sheep {
        background-color: rebeccapurple;
    }

    .grey-sheep {
        background-color: aliceblue;
    }

    .not-a-sheep {
        background-color: red;
    }

    .is-girl {
        border: 2px dashed greenyellow;
    }

    .is-boy {
        border: 2px dashed orange;
    }
</style>