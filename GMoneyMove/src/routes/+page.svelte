<script>

    let aq1 = false;
    let aq2 = false;
    let aq3 = false;

    function td1(){
        aq1 = !aq1;
    }
    function td2(){
        aq2 = !aq2;
    }
    function td3(){
        aq3 = !aq3;
    }

</script>


<body>
    
    <div class="Littles">
        <h1> $$$    G Money Moves Line    $$$</h1>
        <h2 class="Subtitle">Meet the Littles</h2>
        <br>
        
        <div class="Angel">
            
        </div>
        
        <div class="Brian">
        
        </div>
        
        <div class="Cody">
            
        </div>
        
        <div class = "kevin-box">
            <div class="Kevin">
                <h3>Kevin</h3>
                <img src= "/kevin.png" alt="Kevin's picture" class="kevin-photo" />
                <p>{"Wana hear a joke"}</p>
                <button on:click={td1}>
                    {aq1 ? 'Guess What!?!?' : 'Guess What!?!?'}
                </button>
                {#if aq1}
                    <div class="kevin-text">
                        <p>Chicken Butt</p>
                    </div>

                    <p>{""}</p>
                    <button on:click={td2}>
                        {aq2 ? 'Guess Why!?!?' : 'Guess Why!?!?'}
                    </button>
                    {#if aq2}
                        <div class="kevin-text">
                            <p>Chicken Thigh</p>
                        </div>


                            <p>{""}</p>
                            <button on:click={td3}>
                                {aq3 ? 'One more thing' : 'One more thing'}
                            </button>
                            {#if aq3}
                                <div class="kevin-text">
                                    <a href="/kevin">Chicken Wing!</a>
                                </div>
                            {/if}


                    {/if}
                    
                {/if}
            </div>
        </div>
        
    </div>
</body>


<style>
body {
    background-color: #A9E5BB;
}
h1 {
    /* color:  #708B75; */
    background-color: #708B75;
    border-radius: .25em;
    text-align: center;
    font-size: 3em;
}
.Kevin {
        background-color: #F3DFA2;
        padding: 1em;
        border-radius: 0.5em;
        margin: 1em;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: absolute;
        width: 25em;
        top: 175px;
        left: 10px;
    }

    .kevin-box{
        display: flex;
        flex-wrap: wrap;
        gap: 10em;
        padding: 20px;
    }

    .kevin-photo {
        width: 200px;
        height: 200px;
        border-radius: 5%;
    }

    .kevin-text {
        position: relative;
        left: 10px;
        padding: .25em;
        left: 7.2em;
        top: 0.5em;
        width: 10em;
        background-color: #FFE4B5;
        border-radius: 0.25em;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    button {
        background-color: #4CAF50;
        color: white;
        padding: 0.2em 0.25em;
        border: none;
        border-radius: 0.25em;
        cursor: pointer;
        font-size: 1em;
    }

    button:hover {
        background-color: #45A049;
    }


</style>