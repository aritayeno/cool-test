import { Parallax, Scoll, DarkMode, EventGroup } from 'giftbag'

// All giftbag follow this pattern
// 1. Create
// 2. Setup
// 3. Initialize


// 1. Create new parallax
const parallax = new Parallax ();

// 2. Setup
// Selector Elements
const parallaxElements = document.querySelectorAll ('.parallx-elemtn')

parallax.setup({
    selector: parallaxElements
    // selector: This is the elemetns that will be selected
})

// 3. Init
parallax.init()



// Scroll
const scroll = new Scroll();
const scrollElements = document.querySelectorAll('.scroll-element');

scroll.setup({
    selector: scrollElements
})

scroll.init ()