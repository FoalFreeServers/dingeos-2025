ServerEvents.recipes(event => {

// ████████ UNIVERSAL WOOD RECIPES ████████████████████████████████████████████████████

event.shaped(
  Item.of('minecraft:stick', 16), // STICKS SHORTCUT RECIPE
  [
    ' A ',
    ' A ',
    '   '
  ],
  {
    A: '#minecraft:logs'
  }
  
)
event.shaped(
  Item.of('minecraft:chest', 4), // CIRCLE OF UNIVERSAL LOGS INTO 4 CHESTS RECIPE
  [
    'AAA',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#minecraft:logs'
  }
)

event.shaped(
  Item.of('minecraft:crafting_table'),
  [
    ' AA',
    ' AA',
    '   '
  ],
  {
    A: '#minecraft:planks'
  }
)

// ████████ BUILDING WAND RECIPES ████████████████████████████████████████████████████

// Removes default recipes for Building Wands
event.remove({ output: 'wands:stone_wand' })
event.remove({ output: 'wands:iron_wand' })
event.remove({ output: 'wands:diamond_wand' })

// Adds new recipes for Building Wands

event.shaped(
  Item.of('wands:stone_wand'),
  [
    '  C',
    ' S ',
    'S  '
  ],
  {
    C: 'minecraft:cobblestone',
	S: 'minecraft:stick'
  }
)

event.shaped(
  Item.of('wands:iron_wand'),
  [
    '  C',
    ' S ',
    'S  '
  ],
  {
    C: 'minecraft:iron_block',
	S: 'minecraft:stick'
  }
)

event.shaped(
  Item.of('wands:diamond_wand'),
  [
    '  C',
    ' S ',
    'S  '
  ],
  {
    C: 'minecraft:diamond_block',
	S: 'minecraft:stick'
  }
)
})

ServerEvents.tags('block', event => {

// Adds drop and required tool for Concrete Plate
  event.add('minecraft:mineable/pickaxe', 'new_soviet:concrete_plate')
  event.add('minecraft:needs_stone_tool', 'new_soviet:concrete_plate')
  event.add('minecraft:mineable/pickaxe', 'new_soviet:concrete_plate_stairs')
  event.add('minecraft:needs_stone_tool', 'new_soviet:concrete_plate_stairs')
  event.add('minecraft:mineable/pickaxe', 'new_soviet:concrete_plate_slab')
  event.add('minecraft:needs_stone_tool', 'new_soviet:concrete_plate_slab')
})
