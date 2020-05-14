import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {place: '',
                        map: '',
                        items: '',
                        shortcut: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({place: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.place === '1st'){
            alert("Green Shell, Banana, Fake Box");
        }
        if(this.state.place === '2nd'){
            alert("Red Shell, Green Shell, Banana");
        }
        if(this.state.place === '3rd'){
            alert("Red Shell, Three Green Shells, Mushroom");
        }
        if(this.state.place === '4th'){
            alert("Three Green Shells, Mushroom, Big Mushroom (if you're lucky!)");
        }
        if(this.state.place === '5th'){
            alert("Thunder Cloud, Three Green Shells, Three Red Shells");
        }
        if(this.state.place === '6th'){
            alert("Squid, Three Red Shells, Thunder Cloud");
        }
        if(this.state.place === '7th'){
            alert("Three Mushrooms, Squid, POW!");
        }
        if(this.state.place === '8th'){
            alert("POW!, Three Mushrooms, Gold Mushroom");
        }
        if(this.state.place === '9th'){
            alert("Gold Mushroom, Big Mushroom, Three Red Shells");
        }
        if(this.state.place === '10th'){
            alert("Gold Mushroom, Three Mushrooms, Bullet Bill");
        }
        if(this.state.place === '11th'){
            alert("Lightning, Bullet Bill, Three Mushrooms");
        }
        if(this.state.place === '12th'){
            alert("Bullet Bill, Lightning, Three Mushrooms");
        }
        if(this.state.map == 'Luigi Circuit'){
            alert("Use a mushroom over the sand for the boost! But don't use the speed ups at the end!");
        }
        if(this.state.map == 'Moo Moo Meadows'){
            alert("AVOID THE COWS!!! Use mushrooms wisely");
        }
        if(this.state.map == 'Mushroom Gorge'){
            alert("If manual, at the end of the Gorge (with a mushroom, dart left). Otherwise, don't get blue-shelled");
        }
        if(this.state.map == 'Toads Factory'){
            alert("AVOID THE DIRT!!! Use mushrooms wisely, notice when the arrows are green or red");
        }
        if(this.state.map == 'Mario Circuit'){
        alert("Use a mushroom over the sand for the boost! Avoid Chain-Chomp");
        }
        if(this.state.map == 'Coconut Mall'){
            alert("Pay attention to the escalators, try the lower level sometimes, and dont hit the cars!");
        }
        if(this.state.map == 'DK Summit'){
            alert("When approaching the gorge, take a hard right, and youll land on the floor below");
        }
        if(this.state.map == 'Warios Gold Mine'){
            alert("There is a sneaky little cut, if you can hit a hard right turn after the first dip");
        }
        if(this.state.map == 'Daisy Circuit'){
            alert("There is a hidden staircase near the beginning to the right, may need a mushroom");
        }
        if(this.state.map == 'Koopa Cape'){
            alert("If you have a good offroad kart, try cutting some corners. Otherwise use the water!");
        }
        if(this.state.map == 'Maple Treeway'){
            alert("Right off the bat! Cut right and grab a nice item!");
        }
        if(this.state.map == 'Grumble Volcano'){
            alert("Grab a mushroom. Before the first lap ends, boost off the far-left white square and hop onto the big rock to the left " +
                "slowly glide to the left around the rock. Land and you will have skipped a whole lap!");
        }
        if(this.state.map == 'Dry Dry Ruins'){
            alert("Use a mushroom over the sand at the end of the lap for a large lead");
        }
        if(this.state.map == 'Moonview Highway'){
            alert("Dont hit the cars!!!! Hit the boosts instead!");
        }
        if(this.state.map == 'Bowsers Castle'){
            alert("Over the middle of the Bowser section, hang tight on the same side in order to cut a large part of the area");
        }
        if(this.state.map == 'Rainbow Road'){
            alert("Race hard, shake the wiimote, pray to your God");
        }
        if(this.state.map == 'Peach Beach'){
            alert("Use all speed items over the water, if possible. Avoid the Ducklings");
        }
        if(this.state.map == 'Yoshi Falls'){
            alert("It is literally... a circle");
        }
        if(this.state.map == 'Ghost Valley 2'){
            alert("Use a shake boost to hit a cut soon after the lap starts (over to your right)");
        }
        if(this.state.map == 'Marios Raceway'){
            alert("Any speed item is beneficial here, you can also shake boost off of the tunnel!");
        }
        if(this.state.map == 'Sherbet Land'){
            alert("Avoid the penguins, there isnt really any good optimization here");
        }
        if(this.state.map == 'Shy Guy Beach'){
            alert("Use speed items over the water and grass areas, avoid the bombs (duh)");
        }
        if(this.state.map == 'Delfino Square'){
            alert("First, after the blocky area, use a mushroom to the right and land on the bridge. " + "If you miss that one " +
                "you can hit a sharp right turn following the bridge.");
        }
        if(this.state.map == 'Waluigi Stadium'){
            alert("Ride the railing across the pirahna plant section.");
        }
        if(this.state.map == 'Desert Hills'){
            alert("Start slow! Get a good speed item and go left of the pyramid.");
        }
        if(this.state.map == 'Bowser Castle 3'){
            alert("Nothing crazy here, avoid the thwomps and walls. Lava hurts too!");
        }
        if(this.state.map == 'Jungle Parkway'){
            alert("If you're using a kart with good offroad -  at the end of the lap take a hard left over the mud");
        }
        if(this.state.map == 'GCN Mario Circuit'){
            alert("Use speed items over all grassy areas. Avoid the Chain Chomp, which comes out far! As well as the pirhana plants.");
        }
        if(this.state.map == 'Mario Circuit 3'){
            alert("There is a small opening near the end of the lap that any speed item can get you across");
        }
        if(this.state.map == 'Peach Gardens'){
            alert("These flowers are asking to get blown through by a speed item. Do not waste on the ramps near the end of the " +
                "race. Also, chain chomps still hurt here too");
        }
        if(this.state.map == 'DK Mountains'){
            alert("Near the end of the lap, there is a sharp left turn that leads into an area where you can slow down and take a " +
                "sharp right turn and fall back onto the map, much faster than it would take to drive it.");
        }
        if(this.state.map == 'N64 Bowser Castle'){
            alert("Take advantage of grassy areas, while avoiding the thwomps and walls. If you're daring.... near the end of " +
                "the lap, take a mushroom and hit the right side of the jump at a tight angle towards the building.");
        }
        event.preventDefault();
    }

    render() {
        return(
            <div className="App">
                Welcome to the Mario Kart Wii Helper Tool!
                <form onSubmit={this.handleSubmit}>
                    <label>
                        What place are you in? I'll tell you what to expect!
                        <select place={this.state.value} onChange={this.handleChange}>
                            <option place={'1st'}>1st</option>
                            <option place={'2nd'}>2nd</option>
                            <option place={'3rd'}>3rd</option>
                            <option place={'4th'}>4th</option>
                            <option place={'5th'}>5th</option>
                            <option place={'6th'}>6th</option>
                            <option place={'7th'}>7th</option>
                            <option place={'8th'}>8th</option>
                            <option place={'9th'}>9th</option>
                            <option place={'10th'}>10th</option>
                            <option place={'11th'}>11th</option>
                            <option place={'12th'}>12th</option>
                        </select>
                    </label>
                    <input type="submit" place="submit"/>
                </form>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        What map are you racing on?
                        <select map={this.state.value} onChange={this.handleChange}>
                            <option map={'Luigi Circuit'}>Luigi Circuit</option>
                            <option map={'Moo Moo Meadows'}>Moo Moo Meadows</option>
                            <option map={'Mushroom Gorge'}>Mushroom Gorge</option>
                            <option map={'Toads Factory'}>Toads Factory</option>
                            <option map={'Mario Circuit'}>Mario Circuit</option>
                            <option map={'Coconut Mall'}>Coconut Mall</option>
                            <option map={'DK Summit'}>DK Summit</option>
                            <option map={'Warios Gold Mine'}>Warios Gold Mine</option>
                            <option map={'Daisy Circuit'}>Daisy Circuit</option>
                            <option map={'Koopa Cape'}>Koopa Cape</option>
                            <option map={'Maple Treeway'}>Maple Treeway</option>
                            <option map={'Grumble Volcano'}>Grumble Volcano</option>
                            <option map={'Dry Dry Ruins'}>Dry Dry Ruins</option>
                            <option map={'Moonview Highway'}>Moonview Highway</option>
                            <option map={'Bowsers Castle'}>Bowsers Castle</option>
                            <option map={'Rainbow Road'}>Rainbow Road</option>
                            <option map={'Peach Beach'}>Peach Beach</option>
                            <option map={'Yoshi Falls'}>Yoshis Falls</option>
                            <option map={'Ghost Valley 2'}>Ghost Valley 2</option>
                            <option map={'Marios Raceway'}>Marios Raceway</option>
                            <option map={'Sherbet Land'}>Sherbet Land</option>
                            <option map={'Shy Guy Beach'}>Shy Guy Beach</option>
                            <option map={'Delfino Square'}>Delfino Square</option>
                            <option map={'Waluigi Stadium'}>Waluigi Stadium</option>
                            <option map={'Desert Hills'}>Desert Hills</option>
                            <option map={'Bowser Castle 3'}>Bowser Castle 3</option>
                            <option map={'Jungle Parkway'}>Jungle Parkway</option>
                            <option map={'GCN Mario Circuit'}>GCN Mario Circuit</option>
                            <option map={'Mario Circuit 3'}>Mario Circuit 3</option>
                            <option map={'Peach Gardens'}>Peach Gardens</option>
                            <option map={'DK Mountain'}>DK Mountain</option>
                            <option map={'N64 Bowser Castle'}>N64 Bowser Castle</option>
                        </select>
                    </label>
                    <input type="submit" map="submit"/>
                </form>

            </div>
        );
    }
}

export default App;
