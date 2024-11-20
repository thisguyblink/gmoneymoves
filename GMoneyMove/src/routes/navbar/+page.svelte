<div class="nav">
    <h1 id="title">G Money Moves</h1>
    <div id="middle"></div>
    <p class="categories">projects</p>
</div>

<slot></slot>



<style>
#title {
    font-size: 2.5em;
    color: #32533d;
    padding-left: 5%;
}

.nav {
    display: flex;
    flex-direction: row;
    max-height: 6em;
    background-color: #BCFFDB;
    border: solid 2px #4A2545;
    border-radius: 1em;
}

#middle {
    width: 40%;
    align-items: center;
    background-color: blue  ;
}
.categories {
    background-color: aqua;
    top: .5em;
    align-self: start;
}
</style>