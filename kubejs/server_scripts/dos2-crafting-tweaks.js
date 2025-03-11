/*

LAST UPDATE: 10 MAR 25
CHANGES:
- Added missing recipe for Solidified Garnish Block

*/

ServerEvents.tags('fluid', event => {
	// event.add('boice:lumisene', "supplementaries:lumisene")
	event.add('boice:lumisene', "supplementaries:lumisene")
})

ServerEvents.recipes(event => {

// ████████ UNIVERSAL WOOD RECIPES ████████████████████████████████████████████████████

event.remove({ output: 'vinery:grapevine_stem' })

event.shaped(
  Item.of('vinery:grapevine_stem', 6), // GRAPEVINE STEM REPLACEMENT RECIPE
  [
    ' A ',
    ' A ',
    ' A '
  ],
  {
    A: '#minecraft:logs'
  }
  
)


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

// ████████ MISSING TAGS ████████████████████████████████████████████████████

ServerEvents.tags('block', event => {

// Adds drop and required tool for Concrete Plate
  event.add('minecraft:mineable/pickaxe', 'new_soviet:concrete_plate')
  event.add('minecraft:needs_stone_tool', 'new_soviet:concrete_plate')
  event.add('minecraft:mineable/pickaxe', 'new_soviet:concrete_plate_stairs')
  event.add('minecraft:needs_stone_tool', 'new_soviet:concrete_plate_stairs')
  event.add('minecraft:mineable/pickaxe', 'new_soviet:concrete_plate_slab')
  event.add('minecraft:needs_stone_tool', 'new_soviet:concrete_plate_slab')
  event.add('minecraft:mineable/pickaxe', 'new_soviet:glazed_brick_tiles')
  event.add('minecraft:needs_stone_tool', 'new_soviet:glazed_brick_tiles')
  event.add('minecraft:mineable/pickaxe', 'new_soviet:cracked_glazed_brick_tiles')
  event.add('minecraft:needs_stone_tool', 'new_soviet:cracked_glazed_brick_tiles')
})

ServerEvents.tags('item', event => {

	// Unifying Kelp
	event.add('boice:kelp', 'minecraft:kelp')
	event.add('boice:kelp', 'garnished:vermilion_kelp')
	// Unifying tomato
	event.add('c:tomato', 'farmersdelight:tomato')

// Add missing wood to stripped log tag

	const logs = [
	'maple',
	'aspen',
	'baobab',
	'blue_enchanted',
	'cika',
	'cypress',
	'ebony',
	'fir',
	'green_enchanted',
	'holly',
	'ironwood',
	'jacaranda',
	'mahogany',
	'palm',
	'pine',
	'eucalyptus',
	'redwood',
	'sakura',
	'skyris',
	'white_mangrove',
	'willow',
	'witch_hazel',
	'zelkova',
	'palo_verde'
	];
	// plates.forEach(p => event.add('c:plates/' + p, '#c:' + p + '_plates'));
	logs.forEach(l => event.add('c:stripped_logs', 'biomeswevegone:stripped_' + l + '_log'));
	logs.forEach(l => event.add('c:stripped_wood', 'biomeswevegone:stripped_' + l + '_wood'));
})

ServerEvents.tags('item', event => {
	
	event.add('c:stripped_logs', 'biomesoplenty:stripped_maple_log')
	event.add('c:stripped_wood', 'biomesoplenty:stripped_maple_wood')
	event.add('c:stripped_logs', 'biomesoplenty:stripped_empyreal_log')
	event.add('c:stripped_wood', 'biomesoplenty:stripped_empyreal_wood')
	event.add('c:stripped_logs', 'biomesoplenty:stripped_pine_log')
	event.add('c:stripped_wood', 'biomesoplenty:stripped_pine_wood')
	
	event.add('c:stripped_logs', 'create_dd:stripped_rubber_log')
	event.add('c:stripped_wood', 'create_dd:stripped_rubber_wood')
	
	event.add('c:stripped_logs', 'betternether:rubeus_stripped_log')
	event.add('c:stripped_wood', 'betternether:rubeus_stripped_bark')
	event.add('c:stripped_logs', 'betternether:stalagnate_stripped_log')
	event.add('c:stripped_wood', 'betternether:stalagnate_stripped_bark')
	event.add('c:stripped_logs', 'betternether:willow_stripped_log')
	event.add('c:stripped_wood', 'betternether:willow_stripped_bark')
	event.add('c:stripped_logs', 'betternether:wart_stripped_log')
	event.add('c:stripped_wood', 'betternether:wart_stripped_bark')
	event.add('c:stripped_logs', 'betternether:mushroom_fir_stripped_log')
	event.add('c:stripped_wood', 'betternether:mushroom_fir_stripped_bark')
	event.add('c:stripped_logs', 'betternether:anchor_tree_stripped_log')
	event.add('c:stripped_wood', 'betternether:anchor_tree_stripped_bark')
	event.add('c:stripped_logs', 'betternether:nether_sakura_stripped_log')
	event.add('c:stripped_wood', 'betternether:nether_sakura_stripped_bark')

	event.add('c:stripped_logs', 'betterend:mossy_glowshroom_stripped_log')
	event.add('c:stripped_wood', 'betterend:mossy_glowshroom_stripped_bark')
	event.add('c:stripped_logs', 'betterend:pythadendron_stripped_log')
	event.add('c:stripped_wood', 'betterend:pythadendron_stripped_bark')
	event.add('c:stripped_logs', 'betterend:end_lotus_stripped_log')
	event.add('c:stripped_wood', 'betterend:end_lotus_stripped_bark')
	event.add('c:stripped_logs', 'betterend:lacugrove_stripped_log')
	event.add('c:stripped_wood', 'betterend:lacugrove_stripped_bark')
	event.add('c:stripped_logs', 'betterend:dragon_tree_stripped_log')
	event.add('c:stripped_wood', 'betterend:dragon_tree_stripped_bark')
	event.add('c:stripped_logs', 'betterend:tenanea_stripped_log')
	event.add('c:stripped_wood', 'betterend:tenanea_stripped_bark')
	event.add('c:stripped_logs', 'betterend:helix_tree_stripped_log')
	event.add('c:stripped_wood', 'betterend:helix_tree_stripped_bark')
	event.add('c:stripped_logs', 'betterend:umbrella_tree_stripped_log')
	event.add('c:stripped_wood', 'betterend:umbrella_tree_stripped_bark')
	event.add('c:stripped_logs', 'betterend:jellyshroom_stripped_log')
	event.add('c:stripped_wood', 'betterend:jellyshroom_stripped_bark')
	event.add('c:stripped_logs', 'betterend:lucernia_stripped_log')
	event.add('c:stripped_wood', 'betterend:lucernia_stripped_bark')

	event.add('c:lumisene', "supplementaries:lumisene")
})

// ████████ FALLEN STARGAZE RECIPE TWEAKS ████████████████████████████████████████████████████

ServerEvents.recipes(event => {
	event.remove({ output: 'create_dd:fallen_stargaze_singularity' })
	// Original recipe included blaze brass, mythril, radiance, shadow steel, experience mass
	
	
})

// ████████ CREATE ADJUSTMENTS & FIXES ████████████████████████████████████████████████████

ServerEvents.recipes(event => {
	
	// Mastic Resin Fix (recipe isn't working for some reason)
	event.recipes.createMixing("garnished:mastic_resin", [
	  "minecraft:wheat_seeds",
	  "minecraft:wheat_seeds",
	  "minecraft:wheat_seeds",
	  "minecraft:slime_ball",
	  "minecraft:sugar"
	]).heated()
	
	// Solidified Garnish Block
	event.recipes.createCompacting('garnished:solidified_garnish', [
		Fluid.of('garnished:garnish', 81000),
		'garnished:salt_compound',
		'minecraft:wheat',
		'minecraft:wheat'
	])
	
	// Removal of Modded Motors
	
	event.remove({ output: 'create_dd:accelerator_motor' })
	event.remove({ output: 'create_dd:kinetic_motor' })
	
	event.recipes.createMechanicalCrafting('2x create_dd:kinetic_motor', [
	  ' UUUUU',
	  'SGCCMN',
	  'SGCCOP',
	  ' UUUUU'
	], {
	  U: 'create:sturdy_sheet',
	  S: 'create:shaft',
	  G: 'create:large_cogwheel',
	  C: 'create_dd:zinc_casing',
	  M: 'create:precision_mechanism',
	  N: 'create_dd:integrated_mechanism',
	  O: 'create_dd:calculation_mechanism',
	  P: 'create_dd:inductive_mechanism'
	})
	
	// Blaze Cake Replacement Recipe
	
	event.remove({ output: 'create:blaze_cake_base' })

	event.recipes.createMixing('create:blaze_cake_base', [
		'minecraft:nether_wart',
		'minecraft:nether_wart',
		'minecraft:nether_wart',
		'create:cinder_flour',
		'create:cinder_flour',
		'create:cinder_flour',
		'create:cinder_flour',
		'create:cinder_flour',
		'create:polished_rose_quartz'
	])
	
	// Spectral Ruby Replacement Recipe
	
	event.remove({ output: 'create_dd:spectral_ruby' })

	event.recipes.createMixing('create_dd:spectral_ruby', [
		'compressedblocks:compressed_amethyst_x1',
		'minecraft:glowstone_dust',
		'minecraft:glowstone_dust',
		'minecraft:glowstone_dust',
		'betternether:nether_ruby'
])	
	
	// Lumisene Bucket Replacement Recipe
	
	event.remove({ output: 'supplementaries:lumisene_bucket' })
	event.remove({ output: 'supplementaries:lumisene_bottle' })
	event.recipes.createMixing(Fluid.of('supplementaries:lumisene', 4500) , [
		'minecraft:blaze_powder',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries'
	]).heated()

	// Irromolding Recipe Change
	event.remove({ output: 'create_unbreakable:irromolding' })

	event.recipes.createMechanicalCrafting('create_unbreakable:irromolding', [
	  'XAAAX',
	  'ACDCA',
	  'ADBDA',
	  'ACDCA',
	  'XAAAX'
	], {
	  A: 'create:brass_block',
	  B: 'create_dd:mithril_block',
	  C: 'create_dd:integrated_mechanism',
	  D: 'compressedblocks:compressed_obsidian_x2',
	  X: 'minecraft:air'
	})
	
	// Ember Alloy Recipe Change
	
	event.remove({ output: 'create_dd:ember_alloy', input: 'minecraft:blaze_powder' })
	event.recipes.createMixing('create_dd:ember_alloy', [
	  'minecraft:charcoal',
	  'minecraft:blaze_powder',
	  'create:cinder_flour',
	  'create:powdered_obsidian',
	  'minecraft:nether_brick'
	]).heated()

	// -------------------------------------------- Moved High Yield Recipes

	// BetterX Ore Crushing Support
	
	event.recipes.createCrushing([
		'betternether:nether_ruby',
		Item.of('betternether:nether_ruby').withChance(0.5)
		], 'betternether:nether_ruby_ore')

	event.recipes.createCrushing([
		Item.of('minecraft:lapis_lazuli', 8),
		Item.of('minecraft:lapis_lazuli').withChance(0.5),
		Item.of('create:experience_nugget').withChance(0.75)
		], 'betternether:nether_lapis_ore')
		
	event.recipes.createCrushing([
		Item.of('minecraft:redstone', 5),
		Item.of('minecraft:redstone').withChance(0.5),
		Item.of('create:experience_nugget').withChance(0.75)
		], 'betternether:nether_redstone_ore')
	
	// Track Alternative Recipe
	
	event.recipes.createSequencedAssembly([ // start the recipe
		 Item.of("create:track", 6)
	], 'minecraft:smooth_stone_slab', [ // 'create:brass_ingot' is the input.
	// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create:copper_nugget']),
		event.recipes.createFilling('create:incomplete_track', ['create:incomplete_track',Fluid.of('createmetalwork:molten_andesite_alloy', 4500)]),
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track'), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'minecraft:iron_nugget']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create_dd:steel_nugget']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track') // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('create:incomplete_track').loops(1) // set the transitional item and the loops (amount of repetitions)
	
	
	// Modded Track Alternative Recipe
	
	const tracks = [
	'acacia',
	'birch',
	'crimson',
	'dark_oak',
	'jungle',
	'oak',
	'spruce',
	'warped',
	'blackstone',
	'mangrove',
	'cherry'
	];
	
	// Regular width tracks
	tracks.forEach(t => event.recipes.createSequencedAssembly([ // start the recipe
		Item.of("railways:track_" + t, 6)
	], 'minecraft:' + t + '_slab', [
		event.recipes.createDeploying('railways:track_incomplete_' + t, ['railways:track_incomplete_' + t, 'create:copper_nugget']),
		event.recipes.createFilling('railways:track_incomplete_' + t, ['railways:track_incomplete_' + t,Fluid.of('createmetalwork:molten_andesite_alloy', 4500)]),
		event.recipes.createPressing('railways:track_incomplete_' + t, 'railways:track_incomplete_' + t),
		event.recipes.createDeploying('railways:track_incomplete_' + t, ['railways:track_incomplete_' + t, 'minecraft:iron_nugget']),
		event.recipes.createDeploying('railways:track_incomplete_' + t, ['railways:track_incomplete_' + t, 'create_dd:steel_nugget']),
		event.recipes.createPressing('railways:track_incomplete_' + t, 'railways:track_incomplete_' + t)
	]).transitionalItem('railways:track_incomplete_' + t).loops(1)
	)

	const ddtracks = [
	'smoked',
	'rose',
	'rubber',
	'spirit'
	];
	
	// Create DD Tracks
	ddtracks.forEach(d => event.recipes.createSequencedAssembly([ // start the recipe
		Item.of("railways:track_create_dd_" + d, 6)
	], 'create_dd:' + d + '_slab', [
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create:copper_nugget']),
		event.recipes.createFilling('create:incomplete_track', ['create:incomplete_track',Fluid.of('createmetalwork:molten_andesite_alloy', 4500)]),
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track'),
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'minecraft:iron_nugget']),
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create_dd:steel_nugget']),
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track')
	]).transitionalItem('railways:track_incomplete_' + d).loops(1)
	)
	
	/*/ 	
	'create_dd_rose',
	'create_dd_rubber',
	'create_dd_smoked',
	'create_dd_spirit'
	/*/
	
	// Precision Mechanism Alternative Recipe
	
	event.recipes.createSequencedAssembly([
		Item.of("create:precision_mechanism", 3)
	], 'create:golden_sheet', [
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','create:large_cogwheel']),
		event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism',Fluid.of('createmetalwork:molten_andesite_alloy', 4500)]),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism','minecraft:repeater']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:iron_nugget']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createaddition:electrum_wire']),
	]).transitionalItem('create:incomplete_precision_mechanism').loops(3)	

	// Precision Mechanism Alternative Recipe
	// ONE OF THESE 2 RECIPES IS BROKEN, DONT REMOVE. I DONT REMEMBER WHICH ONE.

	event.recipes.createSequencedAssembly([ // start the recipe
		Item.of("create:precision_mechanism", 3)
	], 'create:golden_sheet', [ // 'create:brass_ingot' is the input.
	// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:repeater']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createaddition:electrum_wire']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism',Fluid.of('tconstruct:molten_brass', 4500)]),
	]).transitionalItem('create:precision_mechanism').loops(5) // set the transitional item and the loops (amount of repetitions)

	// Abstruse Mechanism Recipe Addition
	const abstruse = "create_dd:incomplete_abstruse_mechanism"
	
	event.recipes.createSequencedAssembly([
		Item.of("create_dd:abstruse_mechanism", 1)
	], 'create_dd:shadow_steel_sheet', [
		event.recipes.createDeploying(abstruse, [abstruse, 'create:cogwheel']),
		event.recipes.createDeploying(abstruse, [abstruse,'create:large_cogwheel']),
		event.recipes.createPressing(abstruse, abstruse),
		event.recipes.createFilling(abstruse, [abstruse,Fluid.of('tconstruct:molten_amethyst_bronze', 18000)]),
		event.recipes.createDeploying(abstruse, [abstruse, 'garnished:ethereal_compound']),
		event.recipes.createFilling(abstruse, [abstruse,Fluid.of('tconstruct:molten_ender', 18000)]),
	]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(3)

	// Andesite Alloy Sheet Conflict Resolve
	
	event.remove({ output: 'createdeco:andesite_sheet' })
	event.recipes.createCutting([
	  '2x createdeco:andesite_sheet'
	], 'create_dd:andesite_sheet')

	// Cast Iron Ingot Conflict Resolve

	event.remove({ input: 'minecraft:iron_ingot', output: 'createbigcannons:cast_iron_ingot' })
	
	event.recipes.createCompacting('createbigcannons:cast_iron_ingot', [
	  'minecraft:iron_ingot',
	  'createnuclear:coal_dust'
	]).heated()
	
	// Adds missing log -> stripped log recipes to Mechanical Saw
	
	event.recipes.createCutting('vinery:stripped_dark_cherry_log', [
	  'vinery:dark_cherry_log'
	])

// ████████ AE2 ADJUSTMENTS ████████████████████████████████████████████████████

	event.shaped(
	  Item.of('ae2:certus_quartz_crystal', 3),
	  [
		'ABB',
		'BBB',
		'BBB'
	  ],
	  {
		A: 'minecraft:quartz',
		B: 'minecraft:lapis_lazuli'
	  }
	)
})

// ████████ UNIVERSAL RECIPES ████████████████████████████████████████████████████

	// tagging tconstruct glass with chipped glass tags

const dyes = [
	'white',
	'orange',
	'magenta',
	'light_blue',
	'yellow',
	'lime',
	'pink',
	'gray',
	'light_gray',
	'cyan',
	'purple',
	'blue',
	'brown',
	'green',
	'red',
	'black'
	];

 // 'chipped:' + g + '_stained_glass'
 // 'tconstruct:' + g + '_clear_stained_glass'

ServerEvents.tags('item', event => {
	dyes.forEach(dyes => event.add('chipped:' + dyes + '_stained_glass', 'tconstruct:' + dyes + '_clear_stained_glass'))
	dyes.forEach(dyes => event.add('chipped:' + dyes + '_stained_glass_pane', 'tconstruct:' + dyes + '_clear_stained_glass_pane'))
	event.add('chipped:glass', 'tconstruct:clear_glass');
	event.add('chipped:glass_pane', 'tconstruct:clear_glass_pane');

})

	// c:/onion

ServerEvents.tags('item', event => {
	event.add('c:onion', 'farmersdelight:onion')

})
ServerEvents.recipes(event => {
	event.replaceInput(
	  { input: 'farm_and_charm:onion' }, // Arg 1: the filter
	  'farm_and_charm:onion',            // Arg 2: the item to replace
	  '#c:onion'         // Arg 3: the item to replace it with
	  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
	)
	event.replaceInput(
	  { input: 'farmersdelight:onion' }, // Arg 1: the filter
	  'farmersdelight:onion',            // Arg 2: the item to replace
	  '#c:onion'         // Arg 3: the item to replace it with
	  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
	)
	// kelp replacement with boice:kelp tag
	event.replaceInput(
	  { input: 'minecraft:kelp' }, // Arg 1: the filter
	  'minecraft:kelp',            // Arg 2: the item to replace
	  '#boice:kelp'         // Arg 3: the item to replace it with
	  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
	)
	
	event.remove({ type: 'minecraft:smelting', input: 'garnished:vermilion_kelp', output: 'minecraft:dried_kelp' })
	event.remove({ type: 'minecraft:campfire', input: 'garnished:vermilion_kelp', output: 'minecraft:dried_kelp' })
	event.remove({ type: 'minecraft:smoking', input: 'garnished:vermilion_kelp', output: 'minecraft:dried_kelp' })
	event.smelting('minecraft:dried_kelp', 'minecraft:kelp')
})

ServerEvents.tags('item', event => {
	event.add('c:onion', 'farmersdelight:onion')

})

// ████████ MAGITEK MECHS RECIPE ADJUSTMENTS ██████████████████████████████████████████████████████████████

ServerEvents.recipes(event => {
	// Magicite Energy Core
event.remove({ output: 'mtmechs:magicite_item' })

event.shaped(
  Item.of('mtmechs:magicite_item'), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:cobalt_ingot',
    B: 'compressedblocks:compressed_lapis_x1',  //arg 3: the mapping object
	C: 'minecraft:diamond_block'
  }
)

	// New Lapis Alloy Recipe

event.remove({ input: 'create_dd:tin_nugget', output: 'create_dd:lapis_alloy' })
event.recipes.createMixing('create_dd:lapis_alloy', [
  'minecraft:lapis_lazuli',
  'minecraft:lapis_lazuli',
  'minecraft:lapis_lazuli',
  'minecraft:lapis_lazuli',
  'create_dd:tin_nugget',
  'create:powdered_obsidian'
]).heated()

	// Tunnel Mecha

event.remove({ output: 'mtmechs:ta_arm_item' })
event.shaped(
  Item.of('mtmechs:ta_arm_item'), // arg 1: output
  [
    'A  ',
    'ABC', // arg 2: the shape (array of strings)
    'ABC'
  ],
  {
    A: 'create_dd:lapis_alloy',
    B: 'mtmechs:iron_gear_item',  //arg 3: the mapping object
	C: 'create:mechanical_drill'
  }
)

event.remove({ output: 'mtmechs:ta_stack_item' })
event.shaped(
  Item.of('mtmechs:ta_stack_item'), // arg 1: output
  [
    'A A',
    ' BA', // arg 2: the shape (array of strings)
    ' AC'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'create_dd:lapis_alloy_block',  //arg 3: the mapping object
	C: 'minecraft:blast_furnace'
  }
)

event.remove({ output: 'mtmechs:ta_chassis_item' })
event.shaped(
  Item.of('mtmechs:ta_chassis_item'), // arg 1: output
  [
    'A A',
    'BCB', // arg 2: the shape (array of strings)
    'DED'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'create_dd:lapis_alloy_block',  //arg 3: the mapping object
	C: '#create:seats',
	D: 'create:large_cogwheel',
	E: 'minecraft:redstone_block'
  }
)

	// Proto Mecha

event.remove({ output: 'mtmechs:pa_whole_item' })
event.shaped(
  Item.of('mtmechs:pa_whole_item'), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'E E'
  ],
  {
    A: 'create_dd:overcharged_alloy_block',
    B: 'mtmechs:iron_gear_item',  //arg 3: the mapping object
	C: 'create_dd:abstruse_mechanism',
	D: 'mtmechs:pa_chassis_item',
	E: 'mtmechs:pa_leg_item',
  }
)

event.remove({ output: 'mtmechs:pa_chassis_item' })
event.shaped(
  Item.of('mtmechs:pa_chassis_item'), // arg 1: output
  [
    'ABA',
    'DCD', // arg 2: the shape (array of strings)
    'FEF'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'create_dd:lapis_alloy_block',  //arg 3: the mapping object
	C: '#create:seats',
	D: 'create_dd:overcharged_alloy_block',
	E: 'create_dd:abstruse_mechanism',
	F: 'createnuclear:uranium_rod'
  }
)

event.remove({ output: 'mtmechs:pa_leg_item' })
event.shaped(
  Item.of('mtmechs:pa_leg_item'), // arg 1: output
  [
    ' A ',
    ' A ', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'create_dd:lapis_alloy',
    B: 'create_dd:refined_radiance_block'
  }
)

	// Magitek Mecha

event.remove({ output: 'mtmechs:ma_arm_item' })
event.shaped(
  Item.of('mtmechs:ma_arm_item'), // arg 1: output
  [
    '  A',
    'ABC', // arg 2: the shape (array of strings)
    'A  '
  ],
  {
    A: 'create_dd:steel_ingot',
    B: 'create:brass_ingot',  //arg 3: the mapping object
	C: 'create:zinc_block'
  }
)

event.remove({ output: 'mtmechs:ma_stack_item' })
event.shaped(
  Item.of('mtmechs:ma_stack_item'), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'create_dd:steel_ingot',
    B: 'minecraft:furnace'
  }
)

event.remove({ output: 'mtmechs:ma_chassis_item' })
event.shaped(
  Item.of('mtmechs:ma_chassis_item'), // arg 1: output
  [
    'A A',
    'BCB', // arg 2: the shape (array of strings)
    'DED'
  ],
  {
    A: 'create:brass_ingot',
    B: 'create:zinc_block',  //arg 3: the mapping object
	C: '#create:seats',
	D: 'create_dd:steel_sheet',
	E: 'mtmechs:iron_gear_item'
  }
)

event.remove({ output: 'mtmechs:ma_leg_item' })
event.shaped(
  Item.of('mtmechs:ma_leg_item'), // arg 1: output
  [
    ' A ',
    ' A ', // arg 2: the shape (array of strings)
    'BCB'
  ],
  {
    A: 'create_dd:steel_ingot',
    B: 'create:brass_ingot',  //arg 3: the mapping object
	C: 'create:zinc_block'
  }
)
})
	
ServerEvents.tags('block', event => {
	// Add missing nether ore to the c:nether_ores tag
	event.add('c:nether_ores', 'tconstruct:cobalt_ore')
})

	// Loot Bag drop from ores


// ████████ MISCELLANEOUS RECIPES ████████████████████████████████████████████████████

	// Fix lack of recipe, not sure why it doesnt appear in JEI

ServerEvents.recipes(event => {
	event.recipes.createMixing('garnished:ender_jelly', [
	  'garnished:salt_compound',
	  '#c:ender_dusts',
	  '#c:ender_dusts',
	  '#c:ender_dusts',
	  Fluid.of('minecraft:water', 40500)
	]).heated()

	// Copycats Amount Adjustments
	// ['copycats:copycat_wall', 'copycats:copycat_slope', 'copycats:copycat_vertical_slope', 'copycats:copycat_block', 'copycats:copycat_fence', 'copycats:copycat_fence_gate', 'copycats:copycat_slab', 'copycats:copycat_stairs', 'copycats:copycat_vertical_stairs']

	event.remove({ output: ['copycats:copycat_wall', 'copycats:copycat_slope', 'copycats:copycat_vertical_slope', 'copycats:copycat_block', 'copycats:copycat_fence', 'copycats:copycat_fence_gate', 'copycats:copycat_slab', 'copycats:copycat_stairs', 'copycats:copycat_vertical_stairs'] })
	event.stonecutting('4x copycats:copycat_wall', 'create:zinc_ingot')
	event.stonecutting('4x copycats:copycat_slope', 'create:zinc_ingot')
	event.stonecutting('4x copycats:copycat_vertical_slope', 'create:zinc_ingot')
	event.stonecutting('3x copycats:copycat_block', 'create:zinc_ingot')
	event.stonecutting('4x copycats:copycat_fence', 'create:zinc_ingot')
	event.stonecutting('2x copycats:copycat_fence_gate', 'create:zinc_ingot')
	event.stonecutting('6x copycats:copycat_slab', 'create:zinc_ingot')
	event.stonecutting('3x copycats:copycat_stairs', 'create:zinc_ingot')
	event.stonecutting('3x copycats:copycat_vertical_stairs', 'create:zinc_ingot')
	
	// RPG Series Adjustments
	
	event.remove({ mod: 'jewelry' })
	event.remove({ output: 'runes:crafting_altar' })
	event.remove({output: '#runes:runes'})
	event.remove({output: ['paladins:holy_wand','paladins:holy_staff','paladins:diamond_holy_wand','paladins:diamond_holy_staff']})
	
	// Healing Rune
	event.shapeless(
  Item.of('runes:healing_stone', 2),
  [
    'create:andesite_alloy',
    'minecraft:glistering_melon_slice'
  ]
)
	// Frost Rune
	event.shapeless(
  Item.of('runes:frost_stone', 2),
  [
    'create:andesite_alloy',
    'minecraft:snowball',
    'minecraft:snowball',
    'minecraft:snowball',
    'minecraft:snowball'
  ]
)

	// Arcane Rune
	event.shapeless(
  Item.of('runes:arcane_stone', 4),
  [
    'create:andesite_alloy',
    'minecraft:amethyst_shard',
    'minecraft:amethyst_shard',
    'minecraft:glowstone',
    'minecraft:ender_pearl'
  ]
)

	// Arcane Rune
	event.shapeless(
  Item.of('runes:arcane_stone', 1),
  [
    'create:andesite_alloy',
    'minecraft:amethyst_shard',
    'minecraft:glowstone'
  ]
)

	// Fire Rune
	event.shapeless(
  Item.of('runes:fire_stone', 3),
  [
    'create:andesite_alloy',
    'minecraft:blaze_powder'
  ]
)

	// Fire Rune
	event.shapeless(
  Item.of('runes:fire_stone', 16),
  [
    'create:andesite_alloy',
    'minecraft:blaze_powder',
    'create_dd:ember_alloy'
  ]
)

	// Holy Wand
	event.shaped(
	  Item.of('paladins:holy_wand'),
	  [
		' CA',
		' BC',
		'B  '
	  ],
	  {
		A: 'compressedblocks:compressed_gold_x1',
		B: 'createaddition:iron_rod',
		C: 'create:brass_nugget'
	  }
	)

	// Diamond Holy Wand
	event.shaped(
	  Item.of('paladins:diamond_holy_wand'),
	  [
		' CA',
		' BC',
		'B  '
	  ],
	  {
		A: 'compressedblocks:compressed_diamond_x1',
		B: 'createaddition:iron_rod',
		C: 'minecraft:diamond'
	  }
	)
	
	// Holy Staff
	event.shaped(
	  Item.of('paladins:holy_staff'),
	  [
		' AA',
		' BA',
		'B  '
	  ],
	  {
		A: 'compressedblocks:compressed_gold_x1',
		B: 'createaddition:iron_rod',
	  }
	)
	
	// Diamond Holy Staff
	event.shaped(
	  Item.of('paladins:diamond_holy_staff'),
	  [
		' AA',
		' BA',
		'B  '
	  ],
	  {
		A: 'compressedblocks:compressed_diamond_x1',
		B: 'createaddition:iron_rod',
	  }
	)
});


// RENEWABLE DIAMONDS MOD (HIGH PRESSURE) TWEAKS

ServerEvents.recipes(event => {
	// event.remove({ mod: 'create_high_pressure' })
	event.remove({ type: 'create:crushing', input: 'create:scorchia', output: 'garnished:brittle_dust' })
	event.remove({ type: 'create:milling', input: 'create:scorchia', output: 'garnished:brittle_dust' })
	event.remove({ input: 'minecraft:coal', output: 'create_dd:coal_piece' })

	event.smelting('create_high_pressure:graphite_powder', 'minecraft:coal')
	
	event.recipes.createCompacting(Item.of('create_high_pressure:graphite_compressed').withChance(0.35), [
	'create_high_pressure:graphite_powder',
	'create_high_pressure:graphite_powder',
	'create_high_pressure:graphite_powder'
	]).heated()
	
	event.recipes.createCompacting([Item.of('minecraft:diamond').withChance(0.007),Item.of('create_high_pressure:impure_diamond').withChance(0.85)], [
	'create_high_pressure:graphite_compressed'
	]).superheated()

});