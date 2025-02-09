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
})

ServerEvents.tags('item', event => {

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
	'palo_verde',
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
})

// ████████ FALLEN STARGAZE RECIPE TWEAKS ████████████████████████████████████████████████████

ServerEvents.recipes(event => {
	event.remove({ output: 'create_dd:fallen_stargaze_singularity' })
	// Original recipe included blaze brass, mythril, radiance, shadow steel, experience mass
	
	
})

// ████████ CREATE ADJUSTMENTS ████████████████████████████████████████████████████

ServerEvents.recipes(event => {
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
	event.remove({ output: 'create_dd:spectral_ruby' })

	event.recipes.createMixing('create_dd:spectral_ruby', [
		'compressedblocks:compressed_amethyst_x2',
		'minecraft:glowstone',
		'minecraft:glowstone',
		'minecraft:glowstone',
		'betternether:nether_ruby'
])	

	event.remove({ output: 'supplementaries:lumisene_bucket' })
	event.remove({ output: 'supplementaries:lumisene_bottle' })
	event.recipes.createMixing('supplementaries:lumisene_bucket', [
		'minecraft:blaze_powder',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries',
		'minecraft:glow_berries'
]).heated()

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
		
	event.recipes.createSequencedAssembly([ // start the recipe
		 Item.of("create:track", 5)
	], 'minecraft:smooth_stone_slab', [ // 'create:brass_ingot' is the input.
	// the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'minecraft:iron_nugget']),
		event.recipes.createFilling('create:incomplete_track', ['create:incomplete_track',Fluid.of('createmetalwork:molten_andesite_alloy', 4500)]),
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track'), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create:copper_nugget']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create_dd:steel_nugget']), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track') // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	]).transitionalItem('create:incomplete_track').loops(0) // set the transitional item and the loops (amount of repetitions)

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
	
	tracks.forEach(t => event.recipes.createSequencedAssembly([ // start the recipe
		Item.of("railways:track_" + t, 5)
	], 'minecraft:' + t + '_slab', [
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'minecraft:iron_nugget']),
		event.recipes.createFilling('create:incomplete_track', ['create:incomplete_track',Fluid.of('createmetalwork:molten_andesite_alloy', 4500)]),
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track'),
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create:copper_nugget']),
		event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'create_dd:steel_nugget']),
		event.recipes.createPressing('create:incomplete_track', 'create:incomplete_track')
	]).transitionalItem('create:incomplete_track').loops(0)
	)
	
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

	event.remove({ output: 'createdeco:andesite_sheet' })
	event.recipes.createCutting([
	  '2x createdeco:andesite_sheet'
	], 'create_dd:andesite_sheet')

	event.remove({ input: 'minecraft:iron_ingot', output: 'createbigcannons:cast_iron_ingot' })
	
	event.recipes.createCompacting('createbigcannons:cast_iron_ingot', [
	  'minecraft:iron_ingot',
	  'createnuclear:coal_dust'
	]).heated()


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
