<script>
    import { generateName } from './scripts.js';
    let name = '';
    let birthday = '';
    let color = 'red';
    let colorRGB = '#FF0000';
    let spookyName = '';
  
    function displaySpookyName(event) {
      event.preventDefault();
      const result = generateName(name, birthday, color);
      spookyName = result[0];
      colorRGB = result[1];
    }
  </script>

<style>
    @import './style.css';
</style>
      
    <div>
        <form on:submit={displaySpookyName}>
        <h3>Input the following info to get your spooky name or <a href="/kevin" class="backLink">Go Back</a></h3>
        <p>Name<br /><input type="text" bind:value={name} placeholder="Name" /></p>
        <p>Birthday<br /><input type="date" bind:value={birthday} /></p>
        <p>Favorite Color</p>
        <select bind:value={color}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
        </select>
        <br><input type="submit" value="Submit"/>
        </form>
    </div>
    
    <p>Your spooky name is: <span style="color: {colorRGB}">{spookyName}</span></p>

