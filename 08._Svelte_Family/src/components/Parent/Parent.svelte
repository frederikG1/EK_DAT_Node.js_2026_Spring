<script>
  import Child from "../Child/Child.svelte";

    let { name, children } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    function handleShowLove(name) {
        console.log(`${name} loves you` );
    }

    /* using state makes the UI reactive, so cookies will be removed*/
    let cookieJar = $state(['🍪', '🍪', '🍪', '🍪']);

    let drinkPantry = $state(['🍺', '🍺', '🍺', '🍺']);

    function handleEatCookie() {
        cookieJar.pop();
    }

</script>

<button onclick={fridgeMessages.wipe}>Wipe fridge</button>

<h1>My name is {name}</h1>

{#each drinkPantry as drink}
    <span>{drink}</span>
{/each}

{#each cookieJar as cookie}
    <span>{cookie}</span>
{/each}


<!-- The ... is called the spread operator. 
 It takes all the properties of an object and passes them as individual props 
 So instead of writing each prop out manually:
 <Child name={child.name} age={child.age} children={child.children} /> -->
{#each children as child (child.name) }
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} drinkPantry={drinkPantry} />
{/each}




<style>
    h1 {
        color: aliceblue;
    }
</style>